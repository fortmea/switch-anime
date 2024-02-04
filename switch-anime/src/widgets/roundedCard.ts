import { BaseWidget } from "./baseWidget";

export class RoundedCard extends BaseWidget {
    public child: any; // You can replace 'any' with the specific type of your child object
    public color: string;
    public alpha: number = 1; // Add alpha property
    public x: number = 0; // Add x property
    public y: number = 0; // Add y property
    public cardWidth = 200;
    public cardHeight = 150;
    public cardRadius = 20;
    constructor(child: any, color: string = '#ffffff', alpha: number = 1, x: number = 0, y: number = 0, cardWidth: number = 200, cardHeight: number = 150, cardRadius: number = 20) {
        super(x, y, cardWidth, cardHeight, color, color, () => { }, child); // Add empty onClick and drawFunction arguments
        super.setDrawFunction(this.drawCard); // Set the drawCard function as the drawFunction
        this.child = child;
        this.color = color;
        this.alpha = alpha;
        this.x = x;
        this.y = y;
        this.cardWidth = cardWidth;
        this.cardHeight = cardHeight;
        this.cardRadius = cardRadius;

    }

    drawCard() {
        const r = parseInt(this.color.substring(1, 3), 16);
        const g = parseInt(this.color.substring(3, 5), 16);
        const b = parseInt(this.color.substring(5, 7), 16);


        this.drawRoundedRect(this.x, this.y, this.cardWidth, this.cardHeight, this.cardRadius, `rgba(${r},${g},${b}, ${this.alpha})`); // Background color
    }
}