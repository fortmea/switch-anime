import { EventHandler } from "./eventHandler";

export class EventEmitter {
    private events: Record<string, EventHandler[]> = {};

    on(eventName: string, handler: EventHandler): void {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(handler);
    }

    emit(eventName: string, data: any): void {
        const handlers = this.events[eventName];
        if (handlers) {
            handlers.forEach((handler) => handler(data));
        }
    }
}