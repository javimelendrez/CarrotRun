class Coins{
    constructor(){
        this.r = 75;
        this.x = width;
        this.y = height -this.r; //it should be right above the bunnies
        this.y -= this.r; //one more time for good measure
    }
    move(){
        this.x -= 16; //we moving at the same speed of the bunny
    }
    show(){
        image(coinsImg, this.x, this.y, this.r, this.r);
    }
}