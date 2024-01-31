export class Anime {
    loading = true;
    data!: {
        mal_id: number;
        url: string;
        images: {
            jpg: {
                image_url: string;
                small_image_url: string;
                large_image_url: string;
            };
            webp: {
                image_url: string;
                small_image_url: string;
                large_image_url: string;
            };
        };
        trailer: {
            youtube_id: string | null;
            url: string | null;
            embed_url: string | null;
            images: {
                image_url: string | null;
                small_image_url: string | null;
                medium_image_url: string | null;
                large_image_url: string | null;
                maximum_image_url: string | null;
            };
        };
        approved: boolean;
        titles: {
            type: string;
            title: string;
        }[];
        title: string;
        title_english: string;
        title_japanese: string;
        title_synonyms: string[];
        type: string;
        source: string;
        episodes: number;
        status: string;
        airing: boolean;
        aired: {
            from: string;
            to: string | null;
            prop: {
                from: {
                    day: number;
                    month: number;
                    year: number;
                };
                to: {
                    day: number | null;
                    month: number | null;
                    year: number | null;
                };
            };
            string: string;
        };
        duration: string;
        rating: string;
        score: number;
        scored_by: number;
        rank: number;
        popularity: number;
        members: number;
        favorites: number;
        synopsis: string;
        background: string | null;
        season: string | null;
        year: number | null;
        broadcast: {
            day: string | null;
            time: string | null;
            timezone: string | null;
            string: string | null;
        };
        producers: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[];
        licensors: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[];
        studios: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[];
        genres: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[];
        explicit_genres: any[]; // Adjust this based on the actual data
        themes: {
            mal_id: number;
            type: string;
            name: string;
            url: string;
        }[];
        demographics: any[]; // Adjust this based on the actual data
    };

    constructor(data: Partial<Anime>) {
        Object.assign(this, data);
    }

    static fromJson(json: string): Anime {
        const parsedJson = JSON.parse(json);
        const anime = new Anime(parsedJson);
        anime.loading = false;
        return anime
    }
}
