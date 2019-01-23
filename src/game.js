import { Player } from './player';
import { Cat } from './cat';
import { Box } from './box';
import { Background } from './background';
import {HEIGHT, WIDTH} from './constants';


const KEY_SPACE = 32;

export const pressedKeys = [];

const isSpaceHit = () => pressedKeys[KEY_SPACE];

export const play = (context) => {
    let counter = 0;
    const initialWorldSpeed = 6

    const update = () => {
        counter += 1;

        const worldSpeed = initialWorldSpeed + parseInt(counter / 500)

        background.update(worldSpeed);
        background.draw(context);

        context.fillText(counter, 40, 100);
        // context.fillText(worldSpeed, 40, 100);

        const isThrown = (
            !box.isThrown &&
            !box.isLanded &&
            !cat.isCaught &&
            isSpaceHit()
        );
        if (isThrown) {
            box.throw();
            player.throw();
        } else if (box.isThrown) {
            player.run();
        }

        player.draw(context)
        cat.update(worldSpeed);
        cat.draw(context)
        box.update(worldSpeed);
        box.draw(context);

        const isCatCaught = cat.isCaught || (
            !box.isLanded && box.checkCollision(cat)
        );
        if(isCatCaught) {
            box.catchCat();
            cat.catchCat();

            cat = new Cat()
        }

        const isBoxPicked = (
            cat.isCaught || box.isLanded
        ) && player.checkCollision(box);
        if (isBoxPicked) {
            box.pickUp();
            player.pickUp();
        }


        const isPlayerAlive = isCatCaught || !cat.checkCollision(player);
        if ( isPlayerAlive) {
            requestAnimationFrame(update);
        } else {
            requestAnimationFrame(gameOver);
        }
    };

    const gameOver = () => {
        context.fillText("GAME OVER", 260, 100);
        if (isSpaceHit()) {
            play(context);
        } else {
            requestAnimationFrame(gameOver);
        }
    };

    const player = new Player();
    let cat = new Cat();
    const box = new Box(player);
    const background = new Background();

    requestAnimationFrame(update);
};
