export default class Square {
    constructor(sideSize) {
        this.sideSize = sideSize;
        this.topSide = sideSize;
        this.rightSide = sideSize;
        this.bottomSide = sideSize;
        this.leftSide = sideSize;
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
    }
    getSides() {
        return [
            this.topSide,
            this.rightSide,
            this.bottomSide,
            this.leftSide,
        ];
    }
    getArea() {
        return this.sideSize * this.sideSize;
    }
    getPerimeter() {
        return this.topSide +
            this.rightSide +
            this.bottomSide +
            this.leftSide;
    }
}
