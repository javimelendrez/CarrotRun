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
    hits(bunnies){
        return collideRectRect(this.x,this.y, this.r,this.r, bunnies.x, bunnies.y, bunnies.r, bunnies.r);
    }
    inc_points(coins){
        return collideRectRect(this.x,this.y, this.r,this.r, coins.x, coins.y, coins.r, coins.r);
    }
    move(){
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }
    show(){
        image(cImg, this.x, this.y, this.r, this.r);
    }
}