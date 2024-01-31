import { Card } from "./Card";

export class Shadow {
    ctx: CanvasRenderingContext2D;
    object: Card;
    color: string;
    blur: number;
    depth: number; // Add depth property
    
    constructor(ctx: CanvasRenderingContext2D, object: Card, color: string, blur: number, depth: number) {
        this.ctx = ctx;
        this.object = object;
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
        this.ctx.fillRect(
            this.object.x + this.depth, // Adjust the x-coordinate based on depth
            this.object.y + this.depth, // Adjust the y-coordinate based on depth
            this.object.width,
            this.object.height
        );

        // Draw the actual object
        this.object.draw();
    }
}