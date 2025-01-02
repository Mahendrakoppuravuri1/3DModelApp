/*import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ModelViewer = ({ url }) => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      console.error("Container is not available");
      return;
    }

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xeeeeee); // Set background color to light grey

    // Append the renderer to the container
    container.appendChild(renderer.domElement);

    // Add lighting to the scene
    const light = new THREE.AmbientLight(0xffffff, 1); // Soft white light
    scene.add(light);

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );

    // Set camera position
    camera.position.z = 5;

    // Add OrbitControls for user interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update the controls
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      // Ensure the container and renderer exist before removing
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose of the renderer to free up resources
      renderer.dispose();
    };
  }, [url]);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default ModelViewer;
*/