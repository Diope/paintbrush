import { Point } from './types';

export const clearCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error(' - CANVAS RENDERING ISSUE - ');
  }
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}; // This should clear the canvas on click hopefully.

export const canvasSizeSet = (
  width: number,
  height: number,
  canvas: HTMLCanvasElement
) => {
  // Ah I can set the style height and width!
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

};

export const drawStroke = (
  ctx: CanvasRenderingContext2D,
  points: Point[],
  color: string
) => {
  if (!points.length) return;

  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  points.forEach((point) => {
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
  });
  ctx.closePath();
};
