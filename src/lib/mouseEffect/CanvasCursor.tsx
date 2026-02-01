'use client';

import { useEffect, useState } from "react";
import useCanvasCursor from "./HookCanvasCursor";



const CanvasCursor = () => {
    useCanvasCursor();
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };

        checkTouch();
        window.addEventListener("resize", checkTouch);
        return () => window.removeEventListener("resize", checkTouch);
    }, []);

    return <canvas className={isTouchDevice ? 'pointer-events-none absolute hidden inset-0' : 'pointer-events-none fixed inset-0'} id='canvas' />;
};
export default CanvasCursor;