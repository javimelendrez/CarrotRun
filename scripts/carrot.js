class Carrot{
        constructor(){
            //carrot class has an x and a y
        this.r = 50;
        this.x = this.r;
        this.y = height - this.r;
        //we need the carrot to jump so it needs an up velocity
        this.vy = 0;
        this.gravity = 2; // it is a counter attacking force adjusting speed of jump

    }
    jump(){
        this.vy = -25; //moves the jump up
    }
    move(){
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }
    show(){
        rect(this.x, this.y, this.r, this.r);
    }
}