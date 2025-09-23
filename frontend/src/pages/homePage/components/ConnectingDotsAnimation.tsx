import React, { useRef, useEffect } from 'react';

// --- Type Definitions for TypeScript ---
interface MousePosition {
    x: number | null;
    y: number | null;
}

/**
 * The Neural Weaver Animation Component.
 * A high-performance, interactive particle network rendered on HTML5 Canvas.
 * Optimized for use as a background in a React component with TypeScript.
 */
const NeuralWeaver = () => {
    // Specify that the ref is for an HTMLCanvasElement
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        // Early return if canvas is not yet available
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        // Early return if context couldn't be created
        if (!ctx) return;

        // Explicitly type animationFrameId as a number
        let animationFrameId: number;

        // --- Configuration (UPDATED FOR VISIBILITY) ---
        const PARTICLE_COUNT = 150; 
        const CONNECTION_DISTANCE = 100; // Increased range slightly
        const MOUSE_REPEL_RADIUS = 120;
        const PARTICLE_COLOR = '#90b8f8'; // Brighter particle color
        const LINE_COLOR = 'rgba(144, 184, 248, 0.35)'; // Increased line opacity

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles: Particle[] = [];
        const mouse: MousePosition = { x: null, y: null };

        // --- Particle Class ---
        class Particle {
            x: number;
            y: number;
            dx: number;
            dy: number;
            radius: number;

            constructor(x: number, y: number, dx: number, dy: number, radius: number) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.radius = radius;
            }

            draw() {
                if(ctx){
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    ctx.fillStyle = PARTICLE_COLOR;
                    ctx.fill();
                }
                
            }

            update() {
                if (canvas && this.x > canvas.width || this.x < 0) this.dx = -this.dx;
                if (canvas && this.y > canvas.height || this.y < 0) this.dy = -this.dy;
                
                if (mouse.x !== null && mouse.y !== null) {
                    let dxMouse = this.x - mouse.x;
                    let dyMouse = this.y - mouse.y;
                    let distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                    if (distanceMouse < MOUSE_REPEL_RADIUS) {
                        const forceDirectionX = dxMouse / distanceMouse;
                        const forceDirectionY = dyMouse / distanceMouse;
                        const force = (MOUSE_REPEL_RADIUS - distanceMouse) / MOUSE_REPEL_RADIUS;
                        this.x += forceDirectionX * force * 1.5;
                        this.y += forceDirectionY * force * 1.5;
                    } else {
                        this.x += this.dx;
                        this.y += this.dy;
                    }
                } else {
                     this.x += this.dx;
                     this.y += this.dy;
                }

                this.draw();
            }
        }

        // --- Animation Logic ---
        function init() {
            particles = [];
            for (let i = 0; canvas && i < PARTICLE_COUNT; i++) {
                // Increased particle size for better visibility
                let radius = Math.random() * 1.5 + 1; 
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let dx = (Math.random() - 0.5) * 0.3;
                let dy = (Math.random() - 0.5) * 0.3;
                particles.push(new Particle(x, y, dx, dy, radius));
            }
        }

        function connect() {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = Math.sqrt(
                        (particles[a].x - particles[b].x) ** 2 +
                        (particles[a].y - particles[b].y) ** 2
                    );
                    if (ctx && distance < CONNECTION_DISTANCE) {
                        ctx.strokeStyle = LINE_COLOR;
                        ctx.lineWidth = 1; // Increased line width
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            if(ctx && canvas){
                //ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#111827'; // A dark gray color
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                particles.forEach(p => p.update());
                connect();
                animationFrameId = requestAnimationFrame(animate);
            }
            
        }

        // --- Event Listeners ---
        const handleResize = () => {
            // Add null check for canvas inside the handler for safety
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        init();
        animate();

        // --- Cleanup ---
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    // Style the canvas to be a fixed background
    const canvasStyle: React.CSSProperties = {
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1, 
    };

    return <canvas ref={canvasRef} style={canvasStyle} />;
};

export default NeuralWeaver;

