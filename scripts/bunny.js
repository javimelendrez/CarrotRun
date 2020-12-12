//team QC Quarintined Games
//in this file bunny objects are defined and created with a specifix size and position, also there movements and draw functions.
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
        image(eImg, this.x, this.y, this.r, this.r);
    }
}