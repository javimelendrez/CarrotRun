let carrot; //make a carrot  variable
let bunnies = []; //an array of bunnies
let clouds = []; //an array of clouds
let coins = []; //an array of coins
let score; //this is the score that is going to print on the screen
let restart_button; //this is a variable that we will use to create the restart button
let cImg;
let eImg;
let cloudImg;
let coinsImg;
let coinSound; 
function preload(){
    //preload the images
    cImg = loadImage('carrot.png');
    eImg = loadImage('evil.png');
    cloudImg = loadImage('clouds.png');
    coinsImg = loadImage('coins.png');
    //preload coin collision sound
    //soundFormats('wav', 'ogg');
    coinSound = loadSound('coni.wav' );
}
function setup(){
    createCanvas(800,450);
    carrot = new Carrot();
    score = 0; //on setup the score should be 0
}
function draw(){
    background(0,205,255);
    //call p5 function to draw text for scoer
    textSize(15);
    text("Score: "+ score, 700,50);
    //call the function to show the carrot
    carrot.show();
    carrot.move();
    //pick a random number between 0 and 1
    if(random(1) < 0.01) {
        //we going to use this same probability to make the coin above the bunnies
        var money = new Coins();
        coins.push(money);
        var taco = new Bunny();
        bunnies.push(taco); //random chance of adding a bunny
    }
    for(m of coins){
        m.move();
        m.show();
        //console.log(coins);
        //lets dry js shift 
        //remove the coin from the front that will get hit in the array
        if(carrot.inc_points(m)){
            coinSound.play(); //play the sound on impact
            score++; //increment the store
            //and delete from the array for the sketch to disappear
            coins.shift();
        }
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
    if(random(1) < 0.02){
        var strife = new Clouds();
        clouds.push(strife);
    }
    for(let c of clouds){
        c.move();
        c.show();
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