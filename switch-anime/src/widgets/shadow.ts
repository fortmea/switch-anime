import { Card } from "./card";
import { BaseWidget } from "./baseWidget";

export class Shadow extends BaseWidget {
    blur: number;
    depth: number; // Add depth property

    constructor(object: Card, color: string, blur: number, depth: number) {
        super(object.x, object.y, object.width, object.height, color);

        this.backgroundColor = color;
        this.blur = blur;
        this.depth = depth;
        this.setDrawFunction(() => this.drawShadow());
        this.child = object;
    }

    drawShadow() {
        const r = parseInt(this.backgroundColor.substring(1, 3), 16);
        const g = parseInt(this.backgroundColor.substring(3, 5), 16);
        const b = parseInt(this.backgroundColor.substring(5, 7), 16);

        // Calculate depth effect
        const depthAlpha = 1 - this.depth / 100; // Adjust the depth factor as needed

        // Set shadow color with depth effect
        this.context.fillStyle = `rgba(${r},${g},${b},${this.blur * depthAlpha})`;

        // Draw shadow with diffusion effect
        this.context.fillRect(
            this.child!.getX() + this.depth, // Adjust the x-coordinate based on depth
            this.child!.getY() + this.depth, // Adjust the y-coordinate based on depth
            this.child!.getWidth(),
            this.child!.getHeight()
        );
    }
}