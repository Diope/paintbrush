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

  // Ah I can set the style height and width!
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
};