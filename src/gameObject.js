export class GameObject {
    constructor(x, y, width, height, imgSrc) {
        this.reset(x, y, width, height);

        this.image = this.loadImage(imgSrc);
    }

    reset(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    getBox() {
        return [
            [this.x, this.y],
            [this.x + this.width, this.y + this.height]
        ];
    }

    checkCollision(obj) {
        const [[objX, objY], [objXMax, objYMax]] = obj.getBox();
        const x = this.x;
        const xMax = x + this.width;
        const y = this.y;
        const yMax = y + this.height;
        const xIntersection = (
            x <= objX && objX <= xMax ||
            x <= objXMax && objXMax <= xMax ||
            objX <= x && xMax <= objXMax
        )
        return xIntersection && (
            y <= objY && objY <= yMax ||
            y <= objYMax && objYMax <= yMax ||
            objY <= y && yMax <= objYMax
        );
    }

    draw(context) {
        // context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(
            this.image,
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }

    loadImage(src) {
        const image = new Image();
        image.src = src;
        return image;
    }
}
