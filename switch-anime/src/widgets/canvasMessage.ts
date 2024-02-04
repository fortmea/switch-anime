import { BaseWidget } from "./baseWidget";
import { ScreenObject } from "../util/screenObject";

export class CanvasMessage extends BaseWidget{
    constructor(message: string) {
      super(0, 0, ScreenObject.getInstance().getScreen().width, ScreenObject.getInstance().getScreen().height);
      this.setDrawFunction(() => this.showMessage(message));
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