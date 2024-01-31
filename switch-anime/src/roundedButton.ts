//rounded button class, based on the canvasButton and Rounded card and shadow classes
export class RoundedButton extends CanvasButton {
    constructor(ctx, image, text, x, y, width, height, color) {
        super(ctx, image, text, x, y, width, height, color);
        this.radius = 20;
        this.shadow = new Shadow(ctx, this, color, 0.2, 5);
    }
    draw() {
        this.shadow.draw();
    }
}
