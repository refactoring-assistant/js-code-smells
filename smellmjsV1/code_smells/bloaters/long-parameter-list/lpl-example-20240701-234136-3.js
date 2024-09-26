function drawRectangle(canvasContext, x1, y1, x2, y2, fillColor, strokeColor, lineWidth, lineJoin, lineCap, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY) {
    canvasContext.fillStyle = fillColor;
    canvasContext.strokeStyle = strokeColor;
    canvasContext.lineWidth = lineWidth;
    canvasContext.lineJoin = lineJoin;
    canvasContext.lineCap = lineCap;
    canvasContext.shadowColor = shadowColor;
    canvasContext.shadowBlur = shadowBlur;
    canvasContext.shadowOffsetX = shadowOffsetX;
    canvasContext.shadowOffsetY = shadowOffsetY;
  
    canvasContext.fillRect(x1, y1, x2, y2);
    canvasContext.strokeRect(x1, y1, x2, y2);
}