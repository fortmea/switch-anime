export class Grid {
  private context: CanvasRenderingContext2D;
  private rows: number;
  private cols: number;
  private cellSize: number;
  private lineColor: string;

  constructor(canvas: CanvasRenderingContext2D, rows: number, cols: number, cellSize: number, lineColor: string = '#000000') {
    this.context = canvas
    this.rows = rows;
    this.cols = cols;
    this.cellSize = cellSize;
    this.lineColor = lineColor;
  }

  render(): void {
    this.context.strokeStyle = this.lineColor;

    for (let i = 0; i <= this.rows; i++) {
      const y = i * this.cellSize;
      this.drawLine(0, y, this.cols * this.cellSize, y);
    }

    for (let j = 0; j <= this.cols; j++) {
      const x = j * this.cellSize;
      this.drawLine(x, 0, x, this.rows * this.cellSize);
    }
  }

  private drawLine(x1: number, y1: number, x2: number, y2: number): void {
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
  }
}

