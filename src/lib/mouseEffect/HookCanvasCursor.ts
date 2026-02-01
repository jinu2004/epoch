// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect } from 'react';

const useCanvasCursor = () => {
    let ctx;
    let f;
    let e;
    const pos = {};
    let lines;
    const E = {
        debug: true,
        friction: 0.5,
        trails: 50,
        size: 30,
        dampening: 0.15,
        tension: 0.98,
    };

    function n(e) {
        this.init(e || {});
    }
    n.prototype = {
        init: function (e) {
            this.phase = e.phase || 0;
            this.offset = e.offset || 0;
            this.frequency = e.frequency || 0.001;
            this.amplitude = e.amplitude || 1;
        },
        update: function () {
            return (
                (this.phase += this.frequency),
                    (e = this.offset + Math.sin(this.phase) * this.amplitude)
            );
        },
        value: function () {
            return e;
        },
    };

    function Line(e) {
        this.init(e || {});
    }

    Line.prototype = {
        init: function (e) {
            this.spring = e.spring + 0.1 * Math.random() - 0.02;
            this.friction = E.friction + 0.01 * Math.random() - 0.002;
            this.nodes = [];
            let t, n = 0;
            for (; n < E.size; n++) {
                t = new Node();
                t.x = pos.x;
                t.y = pos.y;
                this.nodes.push(t);
            }
        },
        update: function () {
            let e = this.spring,
                t = this.nodes[0];
            t.vx += (pos.x - t.x) * e;
            t.vy += (pos.y - t.y) * e;
            // eslint-disable-next-line prefer-const
            let n, i = 0, a = this.nodes.length;
            for (; i < a; i++)
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                (t = this.nodes[i]),
                0 < i &&
                ((n = this.nodes[i - 1]),
                    (t.vx += (n.x - t.x) * e),
                    (t.vy += (n.y - t.y) * e),
                    (t.vx += n.vx * E.dampening),
                    (t.vy += n.vy * E.dampening)),
                    (t.vx *= this.friction),
                    (t.vy *= this.friction),
                    (t.x += t.vx),
                    (t.y += t.vy),
                    (e *= E.tension);
        },
        draw: function () {
            let a;
            let o;
            let e,
                t,
                n = this.nodes[0].x,
                i = this.nodes[0].y;
            ctx.beginPath();
            ctx.moveTo(n, i);
            for (; a < o; a++) {
                e = this.nodes[a];
                t = this.nodes[a + 1];
                n = 0.5 * (e.x + t.x);
                i = 0.5 * (e.y + t.y);
                ctx.quadraticCurveTo(e.x, e.y, n, i);
            }
            e = this.nodes[a];
            t = this.nodes[a + 1];
            ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
            ctx.stroke();
            ctx.closePath();
        },
    };

    const t = 0;
    let idleTimeout;
    let angle = 0;
    let idleTimer;
    const radius = 10;
    function simulateMovement() {
        // pos.x -= 2 + Math.random() * 3;
        // pos.y += Math.sin(Math.random() * 0.002 * Date.now()) * 9;
        // if (pos.x < 0) pos.x = window.innerWidth - 500;
        // if (pos.y < 0) pos.y = window.innerHeight -500;

        angle += 0.05; // Adjust speed of circular motion
        const wobbleFactor = 5* Math.sin(Date.now() * 0.002);
        const dynamicRadius = radius + wobbleFactor;

        // Fixed radius for circular movement
        const noiseX = (Math.random() - 0.5) * 5; // Random noise
        const noiseY = (Math.random() - 0.5) * 5;

        // pos.x += Math.cos(angle) * radius + noiseX;
        // pos.y += Math.sin(angle) * radius + noiseY;
        //   if (pos.x < 0) pos.x = window.innerWidth - 40;
        // //  if (pos.y < 0) pos.y = window.innerHeight -20;

        const newX = pos.x + Math.cos(angle) * dynamicRadius + noiseX;
        const newY = pos.y + Math.sin(angle) * dynamicRadius + noiseY;

        // Clamp position within window boundaries
        pos.x = Math.max(radius, Math.min(window.innerWidth - radius, newX));
        pos.y = Math.max(radius, Math.min(window.innerHeight - radius, newY));


    }

    function resetIdleTimer() {
        clearTimeout(idleTimeout);
        clearInterval(idleTimer);
    }




    function onMousemove(e) {

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        resetIdleTimer

        function o() {
            lines = [];
            for (let e = 0; e < E.trails; e++)
                lines.push(new Line({ spring: 0.4 + (e / E.trails) * 0.025 }));
        }
        function c(e) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            e.touches
                ? ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
                : ((pos.x = e.clientX), (pos.y = e.clientY)),
                e.preventDefault();
        }
        function l(e) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            1 == e.touches.length &&
            ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY));
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        document.removeEventListener('mousemove', onMousemove),
            document.removeEventListener('touchstart', onMousemove),
            document.addEventListener('mousemove', c),
            document.addEventListener('touchmove', c),
            // document.addEventListener('touchstart', l),
            c(e),
            o(),
            render();
    }

    function render() {
        if (ctx.running) {
            // simulateMovement()
            ctx.globalCompositeOperation = 'source-over';
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.globalCompositeOperation = 'lighter';
            ctx.strokeStyle = 'hsla(' + Math.round(f.update()) + ',50%,50%,0.2)';
            ctx.lineWidth = 1;
            let e, t = 0;
            for (; t < E.trails; t++) {
                (e = lines[t]).update();
                e.draw();
            }
            ctx.frame++;
            window.requestAnimationFrame(render);
        }
    }

    function resizeCanvas() {
        ctx.canvas.width = window.innerWidth - 20;
        ctx.canvas.height = window.innerHeight;
    }

    e = 0;
    lines = [];

    function Node() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
    }

    const renderCanvas = function () {
        ctx = document.getElementById('canvas').getContext('2d');
        ctx.running = true;
        ctx.frame = 1;
        f = new n({
            phase: Math.random() * 2 * Math.PI,
            amplitude: 85,
            frequency: 0.0015,
            offset: 285,
        });
        document.addEventListener('mousemove', onMousemove);
        document.addEventListener('touchstart', onMousemove);
        document.body.addEventListener('orientationchange', resizeCanvas);
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('focus', () => {
            if (!ctx.running) {
                ctx.running = true;
                render();
            }
        });
        window.addEventListener('blur', () => {
            ctx.running = true;
        });
        resizeCanvas();
    };

    useEffect(() => {
        renderCanvas();

        return () => {
            ctx.running = false;
            document.removeEventListener('mousemove', onMousemove);
            document.removeEventListener('touchstart', onMousemove);
            document.body.removeEventListener('orientationchange', resizeCanvas);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('focus', () => {
                if (!ctx.running) {
                    ctx.running = true;
                    render();
                }
            });
            window.removeEventListener('blur', () => {
                ctx.running = true;
            });

        };
    }, []);
};

export default useCanvasCursor;