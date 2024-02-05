

import { CanvasMessage } from './widgets/canvasMessage';
import { CanvasButton } from './widgets/canvasButton';
import { Card } from './widgets/card';
import { Anime } from './models/anime';
import { consts } from './util/consts';
import { RoundedButton } from './widgets/roundedButton';
import { ScreenObject } from './util/screenObject';
import { CanvasStateManager } from './util/stateManager';
import { RoundedCard } from './widgets/roundedCard';
import { AnimeLoader } from './util/animeLoader';
import { EventEmitter } from './util/eventEmitter';
import { Shadow } from './widgets/shadow';

const screen = ScreenObject.getInstance().getScreen()
const stateManager = new CanvasStateManager(screen);
const eventEmitter = new EventEmitter();
const animeLoader = new AnimeLoader(eventEmitter);
start();
function start() {
    animeLoader.loadAnimeById(21);
    const ctx = screen.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, screen.width, screen.height);
    ctx.fillStyle = '#000000';
    ctx.fillText('Carregando...', (screen.width / 2), screen.height / 2);
}

const btn2 = new RoundedButton('Clique aqui', 50, 20, 100, 50, "#fff", '#3498db', 20, () => {
    stateManager.restoreState('initial');
}
);

const btn1 = new RoundedButton('Clique aqui', screen.width - 200, screen.height - 200, 100, 100, "white", consts.colors[2], 16, () => {
    stateManager.restoreState('second');
});
function states() {
    stateManager.saveState('initial', [
        btn1
    ]);

    stateManager.saveState('second', [
        new CanvasMessage('Clique no botão para voltar.'),

        //new Shadow(card, consts.colors[2], 0.3, 15),
        //card,
        btn2

    ]);
}

states();
eventEmitter.on('animeLoaded', (data) => {
    //console.log('Anime loaded:', animeId);
    const anime = data.anime as Anime;
    const image = data.image as Image;
    
    stateManager.addToState(stateManager.getCurrentState(), new Shadow(new Card(image, anime.data.title, 200, 100, 400, 400, consts.colors[2]), consts.colors[2], 0.3, 15));
    stateManager.reloadState();
})

stateManager.restoreState('initial');



// Path: switch-anime/src/main.ts
