import { BaseWidget } from "./baseWidget";

export class CanvasButton extends BaseWidget {
  private text: string;
  constructor(canvas: Screen, text: string, x: number, y: number, width: number, height: number, textColor: string = "#fff", backgroundColor: string = '#3498db', onClick: () => void) {
    super(canvas, x, y, width, height, textColor, backgroundColor, onClick, () => { }, null);
    super.setDrawFunction(this.drawButton);
    this.text = text;
  }

  public drawButton() {
    
    this.context.fillStyle = this.backgroundColor; // Background color
    this.context.fillRect(this.x, this.y, this.width, this.height);

    this.context.fillStyle = this.textColor; // Text color
    const fontsize = this.height * .15;
    this.context.font = `${fontsize}px system-ui`;
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
    this.addTouchEvent();
  }

}

