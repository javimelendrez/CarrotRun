//team QC Quarintined Games
//in this file coin objects are defined and created with a specifix size and position, also there movements and draw functions.
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