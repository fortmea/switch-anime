import { ScreenObject } from "../util/screenObject";

export class BaseWidget {
    protected canvas: Screen;
    protected context: CanvasRenderingContext2D;
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected textColor: string = '#fff';
    protected backgroundColor: string = '#3498db';
    protected onClick: () => void;
    protected drawFunction: () => void;
    protected child: BaseWidget | null = null;

    constructor(x: number, y: number, width: number, height: number, textColor?: string, backgroundColor?: string, onClick?: () => void | null, drawFunction?: () => void, child?: BaseWidget | null) {
        this.canvas = ScreenObject.getInstance().getScreen();
        this.context = this.canvas.getContext('2d')!;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.textColor = textColor || "#fff";
        this.backgroundColor = backgroundColor || '#3498db';
        this.onClick = onClick ?? (() => { });
        this.drawFunction = drawFunction!;
        this.child = child!;
    }
    //add getters and setters for every property
    public getCanvas(): Screen {
        return this.canvas;
    }
    public setCanvas(canvas: Screen): void {
        this.canvas = canvas;
    }
    public getContext(): CanvasRenderingContext2D {
        return this.context;
    }
    public setContext(context: CanvasRenderingContext2D): void {
        this.context = context;
    }
    public getX(): number {
        return this.x;
    }
    public setX(x: number): void {
        this.x = x;
    }
    public getY(): number {
        return this.y;
    }
    public setY(y: number): void {
        this.y = y;
    }
    public getWidth(): number {
        return this.width;
    }
    public setWidth(width: number): void {
        this.width = width;
    }
    public getHeight(): number {
        return this.height;
    }
    public setHeight(height: number): void {
        this.height = height;
    }
    public getTextColor(): string {
        return this.textColor;
    }
    public setTextColor(textColor: string): void {
        this.textColor = textColor;
    }
    public getBackgroundColor(): string {
        return this.backgroundColor;
    }
    public setBackgroundColor(backgroundColor: string): void {
        this.backgroundColor = backgroundColor;
    }
    public getOnClick(): () => void {
        return this.onClick;
    }
    public setOnClick(onClick: () => void): void {
        this.onClick = onClick;
    }
    public getDrawFunction(): () => void {
        return this.drawFunction;
    }
    public setDrawFunction(drawFunction: () => void): void {
        this.drawFunction = drawFunction;
    }
    public getChild(): BaseWidget | null {
        return this.child;
    }
    public setChild(child: BaseWidget | null): void {
        this.child = child;
    }


    public readonly draw = () => {
        this.drawFunction();
        this.addTouchEvent();
        if (this.child) {
            this.child.draw();
        }
    }

    public removeTouchEvent() {
        if (this.context) {
            this.canvas.removeEventListener('touchstart', this.event);
            if (this.child) {
                this.child.removeTouchEvent();
            }
        }
    }
    drawRoundedRect(x: number, y: number, width: number, height: number, radius: number, color: string) {
        const ctx = this.getContext();
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.arcTo(x + width, y, x + width, y + height, radius);
        ctx.arcTo(x + width, y + height, x, y + height, radius);
        ctx.arcTo(x, y + height, x, y, radius);
        ctx.arcTo(x, y, x + width, y, radius);
        ctx.closePath();

        // Fill the rounded rectangle
        ctx.fillStyle = color; // Change the color as needed
        ctx.fill();
    }


    protected event = (event: TouchEvent) => {
        const touch = event.changedTouches[0];
        const touchX = touch.clientX;
        const touchY = touch.clientY;

        if (
            touchX > this.x &&
            touchX < this.x + this.width &&
            touchY > this.y &&
            touchY < this.y + this.height
        ) {
            this.onClick();
        }
    };


    protected addTouchEvent() {
        if (this.context) {
            this.canvas.addEventListener('touchstart', this.event);
        }
    }
}