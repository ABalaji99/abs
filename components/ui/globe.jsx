"use client";

import createGlobe from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_CONFIG = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [],
};

export default function Globe({
  className,
  config = DEFAULT_CONFIG,
  markers = [],
}) {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const phi = useRef(0);
  const width = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state) => {
      if (!pointerInteracting.current) phi.current += 0.005;
      state.phi = phi.current + r;
    },
    [r]
  );

  const handleResize = () => {
    if (canvasRef.current) {
      width.current = canvasRef.current.offsetWidth;
      canvasRef.current.style.width = `${width.current}px`;
      canvasRef.current.style.height = `${width.current}px`;
    }
  };

  useEffect(() => {
    const debounceResize = () => {
      clearTimeout(window.__resizeTimer);
      window.__resizeTimer = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debounceResize);
    handleResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      markers,
      width: width.current * 2,
      height: width.current * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"), 300);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", debounceResize);
    };
  }, [config, markers, onRender]);

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        aria-label="Interactive rotating globe"
        className="w-full h-full opacity-0 transition-opacity duration-500"
        onPointerDown={(e) =>
          updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => {
          if (e.touches[0]) updateMovement(e.touches[0].clientX);
        }}
      />
    </div>
  );
}
