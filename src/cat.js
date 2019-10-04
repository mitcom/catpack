import { WIDTH, BASELINE } from './constants';
import { GameObject } from './gameObject';

import cat0Src from './img/cats/cat0.png';
import cat1Src from './img/cats/cat1.png';
import cat2Src from './img/cats/cat2.png';
import cat3Src from './img/cats/cat3.png';
import cat4Src from './img/cats/cat4.png';
import cat5Src from './img/cats/cat5.png';
import cat6Src from './img/cats/cat6.png';
import cat7Src from './img/cats/cat7.png';
import cat8Src from './img/cats/cat8.png';
import cat9Src from './img/cats/cat9.png';

const cats = [
    cat0Src,
    cat1Src,
    cat2Src,
    cat3Src,
    cat4Src,
    cat5Src,
    cat6Src,
    cat7Src,
    cat8Src,
    cat9Src,
];

export class Cat extends GameObject {
    constructor() {
        const catNumber = parseInt(Math.random() * cats.length);
        const catSrc = cats[catNumber];

        const catDelay = 300 + parseInt(Math.random() * 300);

        const height = 40;

        super(WIDTH + catDelay, BASELINE - height, 40, height, catSrc);

        this.catSpeed = parseInt(Math.random() * 3) - 1;

        this.isCaught = false;
    }

    draw(context) {
        if (!this.isCaught) {
            super.draw(context);
        }
    }

    update(worldSpeed) {
        this.x -= worldSpeed + this.catSpeed;
    }

    catchCat() {
        this.isCaught = true;
    }
}
