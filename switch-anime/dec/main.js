// src/canvasMessage.ts
var CanvasMessage = class {
  canvas;
  context;
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
  }
  showMessage(message) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "#FFF";
    this.context.font = "20px Arial";
    this.context.textAlign = "center";
    this.context.textBaseline = "middle";
    this.context.fillText(message, this.canvas.width / 2, this.canvas.height / 2);
  }
};

// src/CanvasButton.ts
var CanvasButton = class {
  canvas;
  context;
  text;
  x;
  y;
  width;
  height;
  onClick;
  constructor(canvas, text, x, y, width, height, onClick) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.text = text;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.onClick = onClick;
    this.draw();
    this.addTouchEvent();
  }
  draw() {
    this.context.fillStyle = "#3498db";
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.fillStyle = "#fff";
    this.context.font = "20px Arial";
    this.context.textAlign = "center";
    this.context.textBaseline = "middle";
    this.context.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
  }
  addTouchEvent() {
    if (this.context) {
      this.canvas.addEventListener("touchstart", (event) => {
        const touch = event.changedTouches[0];
        const touchX = touch.clientX;
        const touchY = touch.clientY;
        if (touchX > this.x && touchX < this.x + this.width && touchY > this.y && touchY < this.y + this.height) {
          this.onClick();
        }
      });
    }
  }
};

// src/StateManager.ts
var CanvasStateManager = class {
  screen;
  states = {};
  constructor(screen2) {
    this.screen = screen2;
  }
  saveState(key, drawFunction) {
    this.states[key] = drawFunction;
  }
  restoreState(key) {
    const drawFunction = this.states[key];
    if (drawFunction) {
      this.screen.getContext("2d").clearRect(0, 0, this.screen.width, this.screen.height);
      drawFunction();
    } else {
      console.error(`State with key '${key}' not found.`);
    }
  }
};

// src/Card.ts
var Card = class {
  ctx;
  imageUrl;
  text;
  x;
  y;
  width;
  height;
  constructor(ctx2, imageUrl, text, x, y, width, height) {
    this.ctx = ctx2;
    this.imageUrl = imageUrl;
    this.text = text;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw() {
    const image = new Image();
    image.src = this.imageUrl;
    image.onload = () => {
      this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
      this.ctx.fillStyle = "#000";
      this.ctx.font = "16px Arial";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      const textX = this.x + this.width / 2;
      const textY = this.y + this.height / 2;
      this.ctx.fillText(this.text, textX, textY);
    };
  }
};

// src/fps.ts
var FPS = class extends EventTarget {
  last;
  rate;
  time;
  decay;
  every;
  ticks;
  constructor() {
    super();
    this.last = Date.now();
    this.rate = 0;
    this.time = 0;
    this.decay = 0.2;
    this.every = 10;
    this.ticks = 0;
  }
  tick = () => {
    const time = Date.now(), diff = time - this.last, fps2 = diff;
    this.ticks += 1;
    this.last = time;
    this.time += (fps2 - this.time) * this.decay;
    this.rate = 1e3 / this.time;
    if (!(this.ticks % this.every)) {
      this.dispatchEvent(new Event("update"));
    }
  };
};

// src/main.ts
var card;
fetch("https://fortmea.tech/images/profile.jpg").then(
  (response) => {
    return response.blob();
  }
).then((blob) => {
  const url = URL.createObjectURL(blob);
  card = new Card(ctx, url, "Texto do Card", 200, 100, 200, 150);
  states();
  stateManager.restoreState("initial");
});
var ctx = screen.getContext("2d");
var messageDrawer = new CanvasMessage(screen);
var stateManager = new CanvasStateManager(screen);
var fps = new FPS();
start();
requestAnimationFrame(states);
function start() {
  fps.addEventListener("update", () => {
    ctx.fillStyle = "blue";
    ctx.fillRect(screen.width - 104, 0, 90, 26);
    ctx.fillStyle = "white";
    ctx.font = "20px system-ui";
    ctx.fillText(`FPS: ${Math.round(fps.rate)}`, screen.width - 104, 26);
  });
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, screen.width, screen.height);
  ctx.fillStyle = "#000000";
  ctx.fillText("Carregando...", screen.width / 2, screen.height / 2);
}
function states() {
  stateManager.saveState("initial", () => {
    messageDrawer.showMessage("Clique no bot\xE3o para mudar de estado.");
    new CanvasButton(screen, "Clique aqui", 50, 20, 100, 50, () => {
      stateManager.restoreState("second");
    });
  });
  stateManager.saveState("second", () => {
    messageDrawer.showMessage("Clique no bot\xE3o para voltar.");
    messageDrawer.showMessage("Segundo estado.");
    new CanvasButton(screen, "Clique aqui", 50, 20, 100, 50, () => {
      stateManager.restoreState("initial");
    });
  });
}
fps.tick();
//# sourceMappingURL=main.js.map
