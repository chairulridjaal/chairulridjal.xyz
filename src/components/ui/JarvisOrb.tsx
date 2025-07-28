import React, { useEffect, useRef, useState } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Vertex {
  x: number;
  y: number;
  z: number;
  projectedX: number;
  projectedY: number;
}

interface Electron {
  angle: number;
  speed: number;
  radius: number;
  orbitTilt: number;
  orbitRotation: number;
  size: number;
}

const JarvisOrb: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0, z: 0 });
  const electronsRef = useRef<Electron[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  // Create icosphere vertices for 3D effect
  const createIcosphere = (): Vertex[] => {
    const vertices: Vertex[] = [];
    const t = (1.0 + Math.sqrt(5.0)) / 2.0; // Golden ratio

    // Create 12 vertices of icosahedron
    const baseVertices: Point3D[] = [
      { x: -1, y: t, z: 0 }, { x: 1, y: t, z: 0 }, { x: -1, y: -t, z: 0 }, { x: 1, y: -t, z: 0 },
      { x: 0, y: -1, z: t }, { x: 0, y: 1, z: t }, { x: 0, y: -1, z: -t }, { x: 0, y: 1, z: -t },
      { x: t, y: 0, z: -1 }, { x: t, y: 0, z: 1 }, { x: -t, y: 0, z: -1 }, { x: -t, y: 0, z: 1 }
    ];

    // Add more vertices in rings for better sphere appearance
    for (let ring = 0; ring < 8; ring++) {
      const ringY = Math.cos((ring / 7) * Math.PI) * 0.6;
      const ringRadius = Math.sin((ring / 7) * Math.PI) * 0.6;
      
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        vertices.push({
          x: Math.cos(angle) * ringRadius,
          y: ringY,
          z: Math.sin(angle) * ringRadius,
          projectedX: 0,
          projectedY: 0
        });
      }
    }

    // Add base icosahedron vertices
    baseVertices.forEach(v => {
      const length = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
      vertices.push({
        x: v.x / length * 0.6,
        y: v.y / length * 0.6,
        z: v.z / length * 0.6,
        projectedX: 0,
        projectedY: 0
      });
    });

    return vertices;
  };

  // Create electrons for different orbital paths
  const createElectrons = (): Electron[] => {
    const electrons: Electron[] = [];
    
    // Create multiple electron orbits
    const orbits = [
      { radius: 100, tilt: 0, rotation: 0, count: 2 },
      { radius: 130, tilt: Math.PI / 3, rotation: Math.PI / 4, count: 3 },
      { radius: 160, tilt: Math.PI / 2, rotation: Math.PI / 2, count: 4 },
    ];

    orbits.forEach(orbit => {
      for (let i = 0; i < orbit.count; i++) {
        electrons.push({
          angle: (i / orbit.count) * Math.PI * 2,
          speed: 0.02 + Math.random() * 0.01,
          radius: orbit.radius + Math.random() * 20 - 10,
          orbitTilt: orbit.tilt,
          orbitRotation: orbit.rotation,
          size: 2 + Math.random() * 2
        });
      }
    });

    return electrons;
  };

  const verticesRef = useRef<Vertex[]>(createIcosphere());

  useEffect(() => {
    electronsRef.current = createElectrons();
  }, []);

  const project3D = (vertex: Vertex, centerX: number, centerY: number, scale: number) => {
    // Simple perspective projection
    const distance = 500;
    const perspective = distance / (distance - vertex.z * scale);
    
    vertex.projectedX = centerX + vertex.x * scale * perspective;
    vertex.projectedY = centerY + vertex.y * scale * perspective;
  };

  const rotatePoint = (point: Vertex, rotX: number, rotY: number, rotZ: number) => {
    // Rotate around X axis
    let y = point.y * Math.cos(rotX) - point.z * Math.sin(rotX);
    let z = point.y * Math.sin(rotX) + point.z * Math.cos(rotX);
    point.y = y;
    point.z = z;

    // Rotate around Y axis
    let x = point.x * Math.cos(rotY) + point.z * Math.sin(rotY);
    z = -point.x * Math.sin(rotY) + point.z * Math.cos(rotY);
    point.x = x;
    point.z = z;

    // Rotate around Z axis
    x = point.x * Math.cos(rotZ) - point.y * Math.sin(rotZ);
    y = point.x * Math.sin(rotZ) + point.y * Math.cos(rotZ);
    point.x = x;
    point.y = y;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;
      const time = Date.now() * 0.001;

      // Auto rotation
      rotationRef.current.y += 0.008;
      rotationRef.current.x += 0.004;

      // Mouse influence
      if (isHovered) {
        const mouseInfluenceX = (mouseRef.current.x - centerX) * 0.0008;
        const mouseInfluenceY = (mouseRef.current.y - centerY) * 0.0008;
        rotationRef.current.x += mouseInfluenceY * 0.1;
        rotationRef.current.y += mouseInfluenceX * 0.1;
      }

      // Draw electron orbits first (behind the nucleus)
      electronsRef.current.forEach(electron => {
        // Update electron position
        electron.angle += electron.speed;

        // Calculate 3D orbital position
        const orbitalX = Math.cos(electron.angle) * electron.radius;
        const orbitalZ = Math.sin(electron.angle) * electron.radius;
        const orbitalY = 0;

        // Apply orbital tilt and rotation
        let x = orbitalX * Math.cos(electron.orbitRotation) - orbitalZ * Math.sin(electron.orbitRotation);
        let z = orbitalX * Math.sin(electron.orbitRotation) + orbitalZ * Math.cos(electron.orbitRotation);
        let y = orbitalY * Math.cos(electron.orbitTilt) - z * Math.sin(electron.orbitTilt);
        z = orbitalY * Math.sin(electron.orbitTilt) + z * Math.cos(electron.orbitTilt);

        // Project to 2D
        const distance = 500;
        const perspective = distance / (distance - z);
        const projectedX = centerX + x * perspective;
        const projectedY = centerY + y * perspective;

        // Draw electron trail
        const trailLength = 8;
        for (let i = 0; i < trailLength; i++) {
          const trailAngle = electron.angle - (i * 0.1);
          const trailX = Math.cos(trailAngle) * electron.radius;
          const trailZ = Math.sin(trailAngle) * electron.radius;
          
          let tx = trailX * Math.cos(electron.orbitRotation) - trailZ * Math.sin(electron.orbitRotation);
          let tz = trailX * Math.sin(electron.orbitRotation) + trailZ * Math.cos(electron.orbitRotation);
          let ty = 0 * Math.cos(electron.orbitTilt) - tz * Math.sin(electron.orbitTilt);
          tz = 0 * Math.sin(electron.orbitTilt) + tz * Math.cos(electron.orbitTilt);

          const trailPerspective = distance / (distance - tz);
          const trailProjX = centerX + tx * trailPerspective;
          const trailProjY = centerY + ty * trailPerspective;

          const alpha = (1 - i / trailLength) * 0.3;
          ctx.fillStyle = `rgba(34, 197, 94, ${alpha})`;
          ctx.beginPath();
          ctx.arc(trailProjX, trailProjY, electron.size * (1 - i / trailLength), 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw electron
        const electronGradient = ctx.createRadialGradient(
          projectedX, projectedY, 0,
          projectedX, projectedY, electron.size * 3
        );
        electronGradient.addColorStop(0, 'rgba(34, 197, 94, 1)');
        electronGradient.addColorStop(0.5, 'rgba(34, 197, 94, 0.8)');
        electronGradient.addColorStop(1, 'rgba(34, 197, 94, 0)');

        ctx.fillStyle = electronGradient;
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, electron.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw orbital paths when hovered
        if (isHovered) {
          ctx.strokeStyle = 'rgba(34, 197, 94, 0.1)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          
          for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
            const pathX = Math.cos(angle) * electron.radius;
            const pathZ = Math.sin(angle) * electron.radius;
            
            let px = pathX * Math.cos(electron.orbitRotation) - pathZ * Math.sin(electron.orbitRotation);
            let pz = pathX * Math.sin(electron.orbitRotation) + pathZ * Math.cos(electron.orbitRotation);
            let py = 0 * Math.cos(electron.orbitTilt) - pz * Math.sin(electron.orbitTilt);
            pz = 0 * Math.sin(electron.orbitTilt) + pz * Math.cos(electron.orbitTilt);

            const pathPerspective = distance / (distance - pz);
            const pathProjX = centerX + px * pathPerspective;
            const pathProjY = centerY + py * pathPerspective;

            if (angle === 0) {
              ctx.moveTo(pathProjX, pathProjY);
            } else {
              ctx.lineTo(pathProjX, pathProjY);
            }
          }
          ctx.stroke();
        }
      });

      // Create working copy of vertices for this frame (nucleus)
      const frameVertices: Vertex[] = verticesRef.current.map(v => ({ ...v }));

      // Rotate all vertices
      frameVertices.forEach(vertex => {
        rotatePoint(vertex, rotationRef.current.x, rotationRef.current.y, rotationRef.current.z);
      });

      // Sort vertices by z-depth for proper rendering
      frameVertices.sort((a, b) => b.z - a.z);

      // Project and draw vertices (nucleus)
      frameVertices.forEach(vertex => {
        const scale = 100 + Math.sin(time * 1.5) * 10; // Pulsing effect
        project3D(vertex, centerX, centerY, scale);

        // Calculate alpha based on z-depth
        const depth = (vertex.z + 1) / 2; // Normalize to 0-1
        const baseAlpha = depth * 0.9 + 0.3;
        
        // Create size based on depth
        const size = (depth * 4 + 2) * (isHovered ? 1.3 : 1);

        // Create gradient for each point
        const gradient = ctx.createRadialGradient(
          vertex.projectedX, vertex.projectedY, 0,
          vertex.projectedX, vertex.projectedY, size * 2
        );
        
        gradient.addColorStop(0, `rgba(34, 197, 94, ${baseAlpha})`);
        gradient.addColorStop(0.5, `rgba(34, 197, 94, ${baseAlpha * 0.7})`);
        gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(vertex.projectedX, vertex.projectedY, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connecting lines for wireframe effect
      if (isHovered) {
        ctx.strokeStyle = 'rgba(34, 197, 94, 0.15)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < frameVertices.length; i++) {
          for (let j = i + 1; j < frameVertices.length; j++) {
            const v1 = frameVertices[i];
            const v2 = frameVertices[j];
            const distance = Math.sqrt(
              (v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2 + (v1.z - v2.z) ** 2
            );
            
            // Only draw lines between nearby vertices
            if (distance < 0.25) {
              ctx.beginPath();
              ctx.moveTo(v1.projectedX, v1.projectedY);
              ctx.lineTo(v2.projectedX, v2.projectedY);
              ctx.stroke();
            }
          }
        }
      }

      // Enhanced central core glow
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      coreGradient.addColorStop(0, `rgba(34, 197, 94, ${isHovered ? 0.9 : 0.6})`);
      coreGradient.addColorStop(0.3, `rgba(34, 197, 94, ${isHovered ? 0.5 : 0.3})`);
      coreGradient.addColorStop(1, 'rgba(34, 197, 94, 0)');

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="w-96 h-96 cursor-pointer transition-all duration-500"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        filter: isHovered ? 'brightness(1.4) saturate(1.3)' : 'brightness(1)',
        transform: isHovered ? 'scale(1.08)' : 'scale(1)'
      }}
    />
  );
};

export default JarvisOrb;
