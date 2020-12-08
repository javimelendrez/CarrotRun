let carrot; //make a carrot  variable
let bunnies = []; //an array of bunnies
let score; //this is the score that is going to print on the screen
let restart_button; //this is a variable that we will use to create the restart button
function setup(){
    createCanvas(800,450);
    carrot = new Carrot();
    score = 0; //on setup the score should be 0
}
function draw(){
    background(220);
    //call p5 function to draw text for scoer
    text("Score: "+ score, 700,50);
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
        if (carrot.hits(b)) {
            console.log('game over');
            //we should probably print on the screen game over
            textSize(30); //size of the font
            text("Game Over: You were killed by a bunny!", 200, 225);
            //now draw a button for the user to restart the game
            restart_button = createButton("Restart"); //restart the game
            restart_button.position(400,250);
            // if (restart_button.mouseClicked()){
            //     restart();
            // }
            //restart_button.mousePressedOver(restart());
            // going to try using a text box instead
            // textSize(15);
            // text("Restart", 300, 260);
            // if(mousePressedOver(true)){

            // }
            restart_button.onClick = function rest(){
                console.log('click');
                restart();
            };
            noLoop();
        }
    }
}
//if the user press the space key then the jump function will be called
function keyPressed(){
    if(key == ' '){
        carrot.jump();
    }
}
//creating a restart function for when the user clicks the restart button
function restart(){
    console.log('hey look you clicked the restart button');
    document.location.reload(true);
}