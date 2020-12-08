
class Bunny{

    constructor(){
        this.r = 75;
        this.x = width;
        this.y = height - this.r;
    }
    move(){
        this.x -= 16; //the whole screen is scrolling by 3 pixels

    }
    show(){
        rect(this.x, this.y, this.r, this.r);
    }
}