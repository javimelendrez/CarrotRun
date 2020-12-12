//team QC Quarintined Games
//in this file Clouds objects are defined and created with a specifix size and position, also there movements and draw functions.
class Clouds{

    constructor(){
        this.r = 50;
        this.x = width;
        this.y = 100;
    }
    move(){
        this.x -= 10; //the clouds are scrolling by 10 pixels
    }
    show(){
        image(cloudImg, this.x,this.y,this.r,this.r);
    }
}