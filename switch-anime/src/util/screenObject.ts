export class ScreenObject {
    private static instance: ScreenObject;
    private screen: Screen

    constructor(screen: Screen) {
        this.screen = screen;
    }
    public static getInstance(): ScreenObject {
        if (!ScreenObject.instance) {
            ScreenObject.instance = new ScreenObject(screen);
        }
        return ScreenObject.instance;
    }
    public getScreen(): Screen {
        return this.screen;
    }


}