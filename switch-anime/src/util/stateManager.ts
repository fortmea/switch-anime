import { BaseWidget } from "../widgets/baseWidget";
import { consts } from "./consts";

export class CanvasStateManager {
  private screen: CanvasRenderingContext2D;
  private currentState: string = "initial";
  private states: { [key: string]: BaseWidget[] } = {};
  private callback: () => void = () => { };

  constructor(screen: Screen, callback: () => void = () => { }) {
    this.screen = screen.getContext('2d')!;
    this.callback = callback;
  }

  saveState(key: string, objects: BaseWidget[] = []) {
    this.states[key] = objects;
  }

  restoreState(key: string) {
    this.states[this.currentState].forEach((obj) => obj.removeTouchEvent());
    this.currentState = key;
    const objects = this.states[key];
    if (objects) {
      this.screen.clearRect(0, 0, consts.screenWidth, consts.screenHeight);
      this.screen.fillStyle = "white";
      this.screen.fillRect(0, 0, consts.screenWidth, consts.screenHeight);
      objects.forEach((obj) => obj.draw());
      this.callback();
    } else {
      console.error(`State with key '${key}' not found or empty.`);
    }
  }

  addToState(key: string, object: BaseWidget) {
    if (this.states[key]) {
      this.states[key].push(object);
    } else {
      this.states[key] = [object];
    }
  }

  reloadState() {
    this.restoreState(this.currentState);
  }
  getCurrentState() {
    return this.currentState;
  }
}