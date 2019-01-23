import {WIDTH, HEIGHT} from './constants';
import {play, pressedKeys} from './game';

const canvas = document.createElement("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
document.body.insertBefore(canvas, document.body.childNodes[0]);

const context = canvas.getContext("2d");
context.font = "48px 'Press Start 2P'";
context.fillStyle = 'white';


window.addEventListener('keydown', function (e) {
  pressedKeys[e.keyCode] = (e.type == "keydown");
})

window.addEventListener('keyup', function (e) {
  pressedKeys[e.keyCode] = (e.type == "keydown");
})

const button = document.querySelector('button');
button.onclick = () => {
  play(context);
  button.blur();
}

play(context);
