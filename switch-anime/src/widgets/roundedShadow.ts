import { BaseWidget } from "./baseWidget";

//rounded shadow class, extends baseWidget
export class RoundedShadow extends BaseWidget {
    radius: number;
    color: any;
    blur: any;
    depth: any;
    constructor(child: BaseWidget, color: any, blur: any, depth: any, radius: number) {
        super(child.getX(), child.getY(), child.getWidth(), child.getHeight());
        this.child = child;
        this.color = color;
        this.blur = blur;
        this.depth = depth;
        this.radius = radius;
        this.setDrawFunction(this.drawRoundedShadow);
    }
    private drawRoundedShadow() {
        const r = parseInt(this.color.substring(1, 3), 16);
        const g = parseInt(this.color.substring(3, 5), 16);
        const b = parseInt(this.color.substring(5, 7), 16);
        const depthAlpha = 1 - this.depth / 100;
        if (this.child) {
            this.drawRoundedRect(this.child.getX() + this.depth, this.child.getY() + this.depth, this.child.getWidth(), this.child.getHeight(), this.radius, `rgba(${r},${g},${b},${this.blur * depthAlpha})`);
            
        }
    }
}