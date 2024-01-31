import { CanvasButton } from "./CanvasButton";
import { RoundedShadow } from "./roundedShadow";

//rounded button class, based on the canvasButton and Rounded card and shadow classes
export class RoundedButton extends CanvasButton {
    radius: number;
    constructor(screen: Screen, text: string, x: number, y: number, width: number, height: number, color: string | undefined, backgroundColor: string | undefined, radius: number, onClick: () => void) {
        super(screen, text, x, y, width, height, color, backgroundColor, onClick);
        this.radius = radius;
        super.setDrawFunction(this.drawButton);
        super.setOnClick(onClick);
        
        this.setText(text);
    }
    
    draw() {
        super.addTouchEvent();
        super.drawRoundedRect(this.x, this.y, this.width, this.height, this.radius, this.backgroundColor);
        //write text
        const fontsize = this.height * .15;
        this.context.fillStyle = this.textColor; // Text color
        this.context.font = `${fontsize}px system-ui`;
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.fillText(this.getText(), this.x + this.width / 2, this.y + this.height / 2);

        //super.draw();
        

    }
}
