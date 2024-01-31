import { BaseWidget } from "./baseWidget";

//rounded shadow class, extends baseWidget
export class RoundedShadow extends BaseWidget {
    color: any;
    blur: any;
    depth: any;
    ctx: any;
    constructor(screen: any, child: BaseWidget, color: any, blur: any, depth: any) {
        super(screen, child.getX(), child.getY(), child.getWidth(), child.getHeight());
        this.child = child;
        this.color = color;
        this.blur = blur;
        this.depth = depth;
        this.draw();
    }
    draw() {
        // Convert color from hex to rgba to be able to set alpha
        const r = parseInt(this.color.substring(1, 3), 16);
        const g = parseInt(this.color.substring(3, 5), 16);
        const b = parseInt(this.color.substring(5, 7), 16);
        // Calculate depth effect
        const depthAlpha = 1 - this.depth / 100; // Adjust the depth factor as needed
        // Set shadow color with depth effect
        this.ctx.fillStyle = `rgba(${r},${g},${b},${this.blur * depthAlpha})`;
        // Draw shadow with diffusion effect
        if (this.child) {
            this.ctx.fillRect(this.child.getX() + this.depth, // Adjust the x-coordinate based on depth
                this.child.getY() + this.depth, // Adjust the y-coordinate based on depth
                this.child.getWidth(), this.child.getHeight());
            // Draw the actual child
            this.child.draw();
        }
    }
}