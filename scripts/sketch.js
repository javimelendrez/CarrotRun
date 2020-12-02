let carrot; //make a carrot  variable
function setup(){
    createCanvas(600,450);
    carrot = new Carrot();
}
function draw(){
    background(220);
    //call the function to show the carrot
    carrot.show();
}