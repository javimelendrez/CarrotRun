let carrot; //make a carrot  variable
function setup(){
    createCanvas(600,450);
    carrot = new Carrot();
}
function draw(){
    background(220);
    //call the function to show the carrot
    carrot.show();
    carrot.move();
}
//if the user press the space key then the jump function will be called
function keyPressed(){
    if(key == ' '){
        carrot.jump();
    }
}