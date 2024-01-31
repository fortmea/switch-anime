import { consts } from "./consts";

export class Card extends EventTarget {
  private ctx: CanvasRenderingContext2D;
  image: Image;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string = '#ffffff';
  onclick: () => void; // Added onclick callback

  constructor(ctx: CanvasRenderingContext2D, image: Image, text: string, x: number, y: number, width: number, height: number, color: string = '#ffffff') {
    super();
    this.ctx = ctx;
    this.image = image;
    this.text = text;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.onclick = () => { }; // Initialize onclick callback

  }



  public draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.addEventListener('touchstart', this.onclick); // Add click event listener
    // Desenha o texto
    //calculate font size based on card size

    const r = parseInt(this.color.substring(1, 3), 16);
    const g = parseInt(this.color.substring(3, 5), 16);
    const b = parseInt(this.color.substring(5, 7), 16);

    this.ctx.font = '20px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    const textX = this.x + this.width / 2;
    const textY = this.y + this.height - 40;
    this.ctx.fillStyle = `rgba(${r},${g},${b}, 0.5)`; // Background color
    this.ctx.fillRect(this.x + 50, textY - 20, this.width - 100, 40);
    this.ctx.fillStyle = consts.colors[4]; // Text color
    this.ctx.fillText(this.text, textX, textY);
  }

  public removeClickEvent() {
    this.removeEventListener('touchstart', this.onclick); // Remove click event listener
  }
}