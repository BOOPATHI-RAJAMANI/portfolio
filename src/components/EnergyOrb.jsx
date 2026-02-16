import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const EnergyOrb = ({ phase }) => {
  const mountRef = useRef(null);

  // No need to update container class here, handled by phase in Hero

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    // Initial size
    renderer.setSize(130, 130);
    renderer.setPixelRatio(window.devicePixelRatio);

    mountRef.current.appendChild(renderer.domElement);

    // Create particles as objects
    const count = 1800;
    const particles = [];
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = 1;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      particles.push({
        position: new THREE.Vector3(x, y, z),
        basePosition: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(),
        mode: "orb",
      });

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
      color: "#4fd1c5",
      size: 0.02,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Lerp function for smooth transitions
    const lerp = (start, end, factor) => start + (end - start) * factor;

    // Roam function
    const roam = () => {
      particles.forEach(p => {
        p.mode = "free";
        if (prevPhase !== "universe") {
          p.velocity.set(
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4
          );
        }
      });
    };

    // Regroup function
    const regroup = () => {
      particles.forEach(p => {
        p.mode = "orb";
      });
    };

    // Animate
    let time = 0;
    let prevPhase = phase;
    let glow = 0.8; // Initial glow
    const animate = () => {
      time += 0.01;

      // Phase-specific logic
      switch (phase) {
        case "charging":
          glow = lerp(glow, 2, 0.05);
          material.opacity = glow;
          break;
        case "expanding":
          // Scale handled in CSS
          break;
        case "breaking":
          particles.forEach(p => {
            p.velocity.multiplyScalar(2.5);
            p.velocity.add(new THREE.Vector3(
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 2
            ));
          });
          break;
        case "universe":
          roam();
          break;
        case "collapsing":
          regroup();
          break;
        case "reset":
          glow = lerp(glow, 0.8, 0.05);
          material.opacity = glow;
          break;
        default:
          // Normal or other phases
          break;
      }
      prevPhase = phase;

      particles.forEach((p, i) => {
        const ix = i * 3;
        const iy = ix + 1;
        const iz = ix + 2;

        if (p.mode === "free") {
          // FREE ROAM MODE 🌌
          p.position.add(p.velocity);
          p.velocity.multiplyScalar(0.99); // Slow drift

          // Add noise
          p.position.x += Math.sin(time + i) * 0.002;
          p.position.y += Math.cos(time + i) * 0.002;
        } else {
          // ORB MODE 🌍 (Return)
          p.position.lerp(p.basePosition, 0.05);
        }

        positions[ix] = p.position.x;
        positions[iy] = p.position.y;
        positions[iz] = p.position.z;
      });

      positions.needsUpdate = true;

      points.rotation.y += 0.002;
      points.rotation.x += 0.001;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "130px",
        height: "130px",
      }}
    />
  );
};

export default EnergyOrb;
