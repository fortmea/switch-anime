import { consts } from "./consts";

export class CanvasStateManager {
    private screen: CanvasRenderingContext2D;
    private states: { [key: string]: () => void } = {};
  
    constructor(screen: CanvasRenderingContext2D) {
      this.screen = screen;
    }
  
    saveState(key: string, drawFunction: () => void) {
      this.states[key] = drawFunction;
    }
  
    restoreState(key: string) {
      const drawFunction = this.states[key];
      if (drawFunction) {
        this.screen.clearRect(0, 0, consts.screenWidth, consts.screenHeight);
        drawFunction();
      } else {
        console.error(`State with key '${key}' not found.`);
      }
    }
}