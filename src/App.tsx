import React, { useEffect, useRef } from 'react';
import { canvasSizeSet, clearCanvas } from './utils/canvasUtils';

const WIDTH = 1024;
const HEIGHT = 768;

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Ref just lets me hold a reference to htmlcanvas element
  const getCanvasCtx = (canvas = canvasRef.current) => {
    return { canvas, ctx: canvas?.getContext('2d') };
  };

  useEffect(() => {
    const {ctx, canvas} = getCanvasCtx()
    if (!ctx || !canvas) {
      throw new Error("CANVAS GETCANVASCTX ERROR")
    }
    canvasSizeSet(WIDTH, HEIGHT, canvas)
    ctx.strokeStyle = "#23262E"
    ctx.lineJoin = "round"
    ctx.lineCap = "round"
    ctx.lineWidth = 3

    console.log(clearCanvas(canvas), "test")
    clearCanvas(canvas)
  }, []);

  return (
    <div className="container">
      <div className="bar inset">
        <div className="buttons">
          <button aria-label="Close" />
          <button />
          <button />
        </div>
        <div className="title">Paintbrush</div>
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default App;
