import React, { useEffect, useRef } from 'react';
import { canvasSizeSet, clearCanvas } from './utils/canvasUtils';


const WINDOWWIDTH = window.innerWidth;
const WINDOWHEIGHT = window.innerHeight;

// TODO: Re-render on resize

// console.log(WINDOWHEIGHT, WINDOWHEIGHT, testHeight, testWidth);

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Ref just lets me hold a reference to htmlcanvas element
  const getCanvasCtx = (canvas = canvasRef.current) => {
    return { canvas, ctx: canvas?.getContext('2d') };
  };

  useEffect(() => {
    const userHeight = WINDOWHEIGHT * .809
    const userWidth = WINDOWWIDTH * .743
    const { ctx, canvas } = getCanvasCtx();
    if (!ctx || !canvas) {
      throw new Error('CANVAS GETCANVASCTX ERROR');
    }
    canvasSizeSet(userWidth, userHeight ,canvas);
    ctx.strokeStyle = '#23262E';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 3;

    clearCanvas(canvas);
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
