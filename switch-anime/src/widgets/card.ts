import { BaseWidget } from "./baseWidget";
import { consts } from "../util/consts";
export class Card extends BaseWidget {
  image: Image;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string = '#ffffff';
  onclick: () => void; 

  constructor(image: Image, text: string, x: number, y: number, width: number, height: number, color: string = '#ffffff', onclick: (() => void) | null = null) {
    super(x, y, width, height, color, color, onclick ?? (() => { }));
    this.image = image;
    this.text = text;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.onclick = onclick ?? (() => { });
    this.setDrawFunction(() => this.drawCard());
  }



  public drawCard() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    super.addTouchEvent();

    const r = parseInt(this.color.substring(1, 3), 16);
    const g = parseInt(this.color.substring(3, 5), 16);
    const b = parseInt(this.color.substring(5, 7), 16);

    this.context.font = '20px Arial';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    const textX = this.x + this.width / 2;
    const textY = this.y + this.height - 40;
    this.context.fillStyle = `rgba(${r},${g},${b}, 0.5)`;
    this.context.fillRect(this.x + 50, textY - 20, this.width - 100, 40);
    this.context.fillStyle = consts.colors[4]; 
    this.context.fillText(this.text, textX, textY);
  }
}