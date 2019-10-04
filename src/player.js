import { BASELINE } from './constants';
import { GameObject } from './gameObject';

// import playerSrc from './img/player.png';
import runSrc from './img/run.png';
import throwSrc from './img/throw.png';
import holdSrc from './img/hold.png';

export class Player extends GameObject {
    constructor() {
        const height = 60;
        super(10, BASELINE - height, 30, height, holdSrc);
    }

    throw() {
        this.image.src = throwSrc;
    }

    pickUp() {
        this.image.src = holdSrc;
    }

    run() {
        this.image.src = runSrc;
    }
}
