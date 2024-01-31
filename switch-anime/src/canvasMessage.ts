export class CanvasMessage {
    private canvas: Screen;
    private context: CanvasRenderingContext2D;
  
    constructor(canvas: Screen) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d')!;
    }
  
    showMessage(message: string) {
      //this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
      this.context.fillStyle = '#FFF'; // Text color
      this.context.font = '20px Arial';
      this.context.textAlign = 'center';
      this.context.textBaseline = 'middle';
      this.context.fillText(message, this.canvas.width / 2, this.canvas.height / 2);
    }
  }