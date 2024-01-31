import { BaseWidget } from "./baseWidget";
export class GifWidget extends BaseWidget {
    protected gifPath: String;
    protected ctx: CanvasRenderingContext2D;
    protected image = new Image();
    
    //constructor
    constructor(screen: Screen, gifPath: String, x: number, y: number, width: number, height: number) {
        super(screen, x, y, width, height);
        this.gifPath = gifPath;
        this.ctx = screen.getContext('2d')!;
        this.image.src = this.gifPath.toString();
    }
    //add getters and setters for every property
    public getGifPath(): String {
        return this.gifPath;
    }
    public setGifPath(gifPath: String): void {
        this.gifPath = gifPath;
    }
    public onDrawFrame(ctx: CanvasRenderingContext2D, frame: { width: any; height: any; buffer: CanvasImageSource; }) {
        // update canvas size
        // update canvas that we are using for Konva.Image
        ctx.drawImage(frame.buffer, super.getX(), super.getY());
    }

    public draw() {
        //super.draw();
        
        //convert image path to CanvasImageSource
        //console.log(this.image.src)
        
        this.context.drawImage(this.image, 0, 0);
        requestAnimationFrame(() => this.draw());
    }
}