// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-global-reach',
//   standalone: true,
//   imports: [],
//   templateUrl: './global-reach.component.html',
//   styleUrl: './global-reach.component.css'
// })
// export class GlobalReachComponent {

// }

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import * as THREE from 'three';

@Component({
  selector: 'app-global-reach',
  standalone: true,
  templateUrl: './global-reach.component.html',
  styleUrls: ['./global-reach.component.css'],
})
export class GlobalReachComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true })
  container!: ElementRef<HTMLDivElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  private globe!: THREE.Mesh;

  private animationId = 0;

  ngAfterViewInit(): void {
    this.createScene();
    this.createCamera();
    this.createRenderer();

    this.createLights();

    this.createEarth();

    this.animate();

    window.addEventListener('resize', this.onResize);
  }

  createScene() {
    this.scene = new THREE.Scene();
  }

  createCamera() {
    const width = this.container.nativeElement.clientWidth;

    const height = this.container.nativeElement.clientHeight;

    this.camera = new THREE.PerspectiveCamera(
      45,

      width / height,

      0.1,

      100,
    );

    this.camera.position.z = 3;
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,

      alpha: true,
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.renderer.setSize(
      this.container.nativeElement.clientWidth,

      this.container.nativeElement.clientHeight,
    );

    this.container.nativeElement.appendChild(this.renderer.domElement);
  }

  createLights() {
    const ambient = new THREE.AmbientLight(
      0xffffff,

      2,
    );

    this.scene.add(ambient);

    const light = new THREE.DirectionalLight(
      0xffffff,

      3,
    );

    light.position.set(5, 4, 5);

    this.scene.add(light);
  }

  createEarth() {
    const geometry = new THREE.SphereGeometry(
      1,

      128,

      128,
    );

    const material = new THREE.MeshStandardMaterial({
      color: 0x666666,

      roughness: 0.9,

      metalness: 0.05,
    });

    this.globe = new THREE.Mesh(
      geometry,

      material,
    );

    this.scene.add(this.globe);
  }

  animate = () => {
    this.animationId = requestAnimationFrame(this.animate);

    this.globe.rotation.y += 0.0015;

    this.renderer.render(
      this.scene,

      this.camera,
    );
  };

  onResize = () => {
    const width = this.container.nativeElement.clientWidth;

    const height = this.container.nativeElement.clientHeight;

    this.camera.aspect = width / height;

    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  };

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);

    this.renderer.dispose();

    window.removeEventListener(
      'resize',

      this.onResize,
    );
  }
}