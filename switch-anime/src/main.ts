

import { CanvasMessage } from './canvasMessage';
import { CanvasButton } from './CanvasButton';
import { CanvasStateManager } from './StateManager';
import { Card } from './Card';
import { Anime } from './anime';
import { calculateAspectRatioFit } from './util';
import { Shadow } from './shadow';
import { consts } from './consts';
import { RoundedCard } from './RoundedCard';
import { BaseWidget } from './baseWidget';
import { GifWidget } from './gif';
var card: Card;
var image = new Image();
var anime: Anime = new Anime({});
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
    await fetch('https://api.jikan.moe/v4/anime/1')
        .then((response) => response.blob())
        .then(async (blob) => {

            const json = await blob.text();
            anime = Anime.fromJson(json);
            loadimage(anime.data.images.jpg.image_url);
            card = new Card(ctx, image, anime.data.title, 200, 100, 400, 400, consts.colors[0]);

            card.addEventListener('touchstart', () => {
                ctx.clearRect(0, 0, screen.width, screen.height);
            });
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}


const ctx = screen.getContext("2d");

const messageDrawer = new CanvasMessage(screen);
const stateManager = new CanvasStateManager(ctx);
const btn2 = new RoundedCard(screen, null, consts.colors[2], 1, screen.width - 200, screen.height - 200, 100, 100, 16);
btn2.child = new CanvasButton(screen, 'Clique aqui1', 50, 20, 100, 50, "#fff", '#3498db', () => {
    stateManager.restoreState('initial');
});
const base = new BaseWidget(screen, 50, 20, 200, 100, "#fff", '#3498db', () => { }, () => { });

const btn1 = new RoundedCard(screen, null, consts.colors[2], 1, screen.width - 200, screen.height - 200, 100, 100, 16);
btn1.child = new CanvasButton(screen, 'Clique aqui', btn1.x, btn1.y, btn1.cardWidth, btn1.cardHeight, "white", "transparent", () => {
    stateManager.restoreState('second');
});


start();
function start() {
    //const gif = new GifWidget(screen, '/loading.gif', 0, 0, 300, 300);
    //gif.draw();
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, screen.width, screen.height);
    ctx.fillStyle = '#000000';
    ctx.fillText('Carregando...', (screen.width / 2), screen.height / 2);

}

function states() {
    stateManager.saveState('initial', () => {
        //messageDrawer.showMessage('Clique no botão para mudar de estado.');

        ctx.clearRect(0, 0, screen.width, screen.height);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, screen.width, screen.height);
        btn1.draw();
        btn2.removeTouchEvent();
        //btn1.draw();
    });
    stateManager.saveState('second', () => {
        //screen.removeEventListener('touchstart', () => { });
        ctx.clearRect(0, 0, screen.width, screen.height);
        btn1.removeTouchEvent();
        //btn1.removeTouchEvent();
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, screen.width, screen.height);
        messageDrawer.showMessage('Clique no botão para voltar.');
        messageDrawer.showMessage('Segundo estado.');
        new Shadow(ctx, card, consts.colors[0], 0.3, 15).draw();
        btn2.draw();
        /* if (anime.loading == false) {
             ctx.fillText(anime.data.title, screen.width / 2, screen.height / 3)
         } else {
             ctx.fillText('Carregando...', screen.width / 2, screen.height / 3)
         }*/

    });
}
// Path: switch-anime/src/main.ts
