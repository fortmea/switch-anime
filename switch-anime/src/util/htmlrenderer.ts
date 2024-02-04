export class HTMLRenderer {
    private context: CanvasRenderingContext2D;
  
    constructor(canvas: CanvasRenderingContext2D) {
      this.context = canvas;
    }
  
    renderHTML(html: string): void {
      const img = new Image();
      const svg = new Blob([`<svg xmlns="http://www.w3.org/2000/svg"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml">${html}</div></foreignObject></svg>`], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svg);
  
      img.onload = () => {
        this.context.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
      };
  
      img.src = url;
    }
  }
  