import {WIDTH, BASELINE} from './constants';
import { GameObject } from './gameObject';

import boxSrc from './img/box.png';
import openBoxSrc from './img/open_box.png';

const HEIGHT_HALF = BASELINE/2;
const WIDTH_HALF = WIDTH/2;

export class Box extends GameObject {
    constructor(player) {
        const height = 50
        const defaults = [player.x, player.y - height + 10, 50, height];

        super(...defaults, openBoxSrc);
        this.defaults = defaults;

        this.defaultX = this.x;
        this.defaultY = this.y;
        this.isThrown = false;
        this.isLanded = false;
    }

    throw() {
        this.isThrown = true;
    }

    update(worldSpeed) {
        if (this.isLanded) {
            this.x -= worldSpeed;
        } else if (this.isThrown) {
            this.x += 6;
            this.y = 0.008 * (this.x - WIDTH_HALF + 300 ) ** 2 + HEIGHT_HALF;

            if (this.y > BASELINE - this.height) {
                this.isThrown = false;
                this.isLanded = true;
            }
        }
    }

    pickUp() {
        this.reset(...this.defaults);
        this.isLanded = false;
        this.image.src = openBoxSrc
    }

    catchCat(){
        this.image.src =  boxSrc;
    }
}
