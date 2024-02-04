

import { CanvasMessage } from './widgets/canvasMessage';
import { CanvasButton } from './widgets/canvasButton';
import { Card } from './widgets/card';
import { Anime } from './models/anime';
import { calculateAspectRatioFit } from './util/util';
import { Shadow } from './widgets/shadow';
import { consts } from './util/consts';
import { RoundedButton } from './widgets/roundedButton';
import { ScreenObject } from './util/screenObject';
import { CanvasStateManager } from './util/stateManager';
import { RoundedCard } from './widgets/roundedCard';

var card: Card;
var image = new Image();
var anime: Anime = new Anime({});
const dogImage = new Image();
dogImage.src = '/dog.jpg';

obter();

function loadimage(imageurl: string) {
    fetch(imageurl).then((response) => {
        return response.blob();
    }
    ).then((blob) => {

        const url = URL.createObjectURL(blob);
        image.src = url;
        const { width, height } = calculateAspectRatioFit(image.width, image.height, 300, 300);
        image.setAttribute("width", width);
        image.setAttribute("height", height);

        card.image = image;
        states();
        stateManager.restoreState('initial');

    });
}

async function obter() {
    await fetch('https://api.jikan.moe/v4/anime/21')
        .then((response) => response.blob())
        .then(async (blob) => {

            const json = await blob.text();
            anime = Anime.fromJson(json);
            loadimage(anime.data.images.jpg.image_url);
            card = new Card(image, anime.data.title, 200, 100, 400, 400, consts.colors[0]);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

const stateManager = new CanvasStateManager(ScreenObject.getInstance().getScreen());
const btn2 = new RoundedButton('Clique aqui', 50, 20, 100, 50, "#fff", '#3498db', 20, () => {
    stateManager.restoreState('initial');
}
);

const btn1 = new RoundedCard(null, consts.colors[2], 1, screen.width - 200, screen.height - 200, 100, 100, 16);
btn1.child = new CanvasButton('Clique aqui', btn1.x, btn1.y, btn1.cardWidth, btn1.cardHeight, "white", "transparent", () => {
    stateManager.restoreState('second');
});


start();
function start() {
    const ctx = screen.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, screen.width, screen.height);
    ctx.fillStyle = '#000000';
    ctx.fillText('Carregando...', (screen.width / 2), screen.height / 2);
}

function states() {
    stateManager.saveState('initial', [
        btn1
    ]);
    stateManager.saveState('second', [
        new CanvasMessage('Clique no botão para voltar.'),
        new Shadow(card, consts.colors[2], 0.3, 15),
        //card,
        btn2

    ]);
}
// Path: switch-anime/src/main.ts
