import { Anime } from "../models/anime";
import { consts } from "./consts";
import { EventEmitter } from "./eventEmitter";
import { calculateAspectRatioFit } from "./util";

export class AnimeLoader {
    image: Image = new Image();
    currentAnimeId: number | null;
    anime: Anime | null = new Anime({});
    eventEmitter: EventEmitter;
    constructor(eventEmitter: EventEmitter) {
        this.currentAnimeId = null;
        this.eventEmitter = eventEmitter;
    }

    async loadAnimeById(animeId: number) {
        if (this.currentAnimeId === animeId) {
            console.warn('Anime with the same ID is already loaded.');
            return;
        }


        this.anime = await this.fetchAnimeData(animeId);
        if (this.anime === null) {
            return;
        } else {
            this.currentAnimeId = animeId;
            await this.loadImage(this.anime.data.images.jpg.image_url);

        }
    }

    private async fetchAnimeData(animeId: number) {
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
            const blob = await response.blob();
            const json = await blob.text();
            return Anime.fromJson(json);
        } catch (error) {
            console.error('Error fetching anime data:', error);
            return null;
        }
    }

    private loadImage(imageUrl: string) {
        return new Promise<void>(async (resolve, reject) => {
            try {
                const response = await fetch(imageUrl);
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);

                // Create a new Image element
                const image = new Image();

                // Set up a load event listener
                image.addEventListener('load', () => {
                    const { width, height } = calculateAspectRatioFit(image.width, image.height, 300, 300);
                    image.setAttribute("width", width.toString());
                    image.setAttribute("height", height.toString());

                    // Emit the event after the image has loaded
                    this.eventEmitter.emit('animeLoaded', { 'anime': this.anime, 'image': image });

                    // Resolve the promise
                    resolve();
                });

                // Set the src attribute to start loading the image
                image.src = url;
            } catch (error) {
                console.error('Error loading image:', error);
                // Reject the promise in case of an error
                reject(error);
            }
        });
    }
}