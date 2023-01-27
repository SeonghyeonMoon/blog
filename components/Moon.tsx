import { useTheme } from '@emotion/react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Moon() {
  const theme = useTheme();
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    if (!canvas.current) return;
    const renderer = new THREE.WebGLRenderer({ canvas: canvas.current, antialias: true, alpha: true });
    renderer.setSize(200, 200);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setClearColor(0x000000, 0);

    const camera = new THREE.PerspectiveCamera(50, 1);
    camera.position.set(0, 0, 30);
    const loader = new GLTFLoader();

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, -5, 5);
    scene.add(light);

    loader.load('/nasa_cgi_moon_kit/scene.gltf', (gltf: { scene: THREE.Object3D<THREE.Event> }) => {
      scene.add(gltf.scene);
      renderer.render(scene, camera);

      const animate = () => {
        requestAnimationFrame(animate);
        gltf.scene.rotation.y += 0.002;
        renderer.render(scene, camera);
      };
      animate();
    });
  }, [theme.background]);

  return <canvas ref={canvas} width={200} height={200} />;
}

export default Moon;
