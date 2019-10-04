import { HEIGHT, WIDTH } from './constants';
import { GameObject } from './gameObject';
import backgroundSrc from './img/background.png';

export class Background extends GameObject {
    constructor() {
        super(0, 0, WIDTH, HEIGHT, backgroundSrc);
        this.distance = 0;
    }

    update(worldSpeed) {
        this.distance = (this.distance + worldSpeed) % 1600;
    }

    draw(context) {
        context.drawImage(
            this.image,
            this.distance, //sx
            // 574-320,
            0, //sy
            800, //sw
            574, //sh
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}
