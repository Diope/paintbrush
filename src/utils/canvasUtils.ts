export const clearCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d")
  if (!ctx) {
    throw new Error(" - CANVAS RENDERING ISSUE - ")
  }
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}; // This should clear the canvas on click hopefully.

export const canvasSizeSet = (
  width: number,
  height: number,
  canvas: HTMLCanvasElement
) => {
  canvas.getContext("2d")?.scale(2,2)
  canvas.width = width * 2
  canvas.height = height * 2
};