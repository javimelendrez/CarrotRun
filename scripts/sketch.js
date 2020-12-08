let carrot; //make a carrot  variable
let bunnies = []; //an array of bunnies
function setup(){
    createCanvas(800,450);
    carrot = new Carrot();
}
function draw(){
    background(220);
    //call the function to show the carrot
    carrot.show();
    carrot.move();
    //pick a random number between 0 and 1
    if(random(1) < 0.01) {
        var taco = new Bunny();
        bunnies.push(taco); //random chance of adding a bunny
    }
    for( let b of bunnies){
        b.move();
        b.show();
    }
}
//if the user press the space key then the jump function will be called
function keyPressed(){
    if(key == ' '){
        carrot.jump();
    }
}