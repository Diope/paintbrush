import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { strokeEnd, strokeStart, strokeUpdate } from './state/actions';
import { currentStrokeSelector } from './state/reducer';
import { canvasSizeSet, drawStroke } from './utils/canvasUtils';

const WINDOWWIDTH = window.innerWidth;
const WINDOWHEIGHT = window.innerHeight;

// TODO: Re-render on resize

// console.log(WINDOWHEIGHT, WINDOWHEIGHT, testHeight, testWidth);

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Ref just lets me hold a reference to htmlcanvas element
  const getCanvasCtx = (canvas = canvasRef.current) => {
    return { canvas, ctx: canvas?.getContext('2d') };
  };
  const dispatch = useDispatch();
  const currentStroke = useSelector(currentStrokeSelector);

  useEffect(() => {
    // console.log(userHeight, userWidth);
    const { ctx, canvas } = getCanvasCtx();
    if (!ctx || !canvas) {
      throw new Error('CANVAS GETCANVASCTX ERROR');
    }
    requestAnimationFrame(() =>
      drawStroke(ctx, currentStroke.points, currentStroke.color)
    );
  }, [currentStroke]);

  useEffect(() => {
    const userHeight = WINDOWHEIGHT * 0.809;
    const userWidth = WINDOWWIDTH * 0.743;
    const { ctx, canvas } = getCanvasCtx();
    if (!ctx || !canvas) {
      throw new Error('CANVAS GETCANVASCTX ERROR');
    }
    canvasSizeSet(userWidth, userHeight, canvas);
  }, []); // TODO: Not sure if two useEffects is right, did this bc canvas was rerendering on each stroke.

  const isDrawing = !!currentStroke.points.length;

  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    dispatch(strokeUpdate(offsetX, offsetY));
  };
  const penDown = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    dispatch(strokeStart(offsetX, offsetY));
  };
  const penUp = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing) dispatch(strokeEnd());
  };

  return (
    <div className="container">
      <div className="bar inset">
        <div className="buttons">
          <button aria-label="Close" />
          <button />
          <button />
        </div>
        <div className="title">Pinsel</div>
      </div>
      <canvas
        ref={canvasRef}
        onMouseUp={penUp}
        onMouseDown={penDown}
        onMouseOut={penUp}
        onMouseMove={draw}
      />
    </div>
  );
}

export default App;
