CPSC 386 Section 1 Monday/Wednesday 5:30PM
Project 3 Simple New Video Games
Team Name: Quarantined Games QC
Team Member Names : Javier Melendrez, Gabriel Rivera

Intro: To create this game we used p5.js and javascript to draw the game. The game is a 2D endless runner. The objective of the game is avoiding colliding with the npc
bunnies by jumping over them and surving as long as you can. You can keep track of your score by collecting the coins placed above the NPC bunnies. On the top right you can view your score and aim for a better run in your next game. All the objects in the game were programmed using classes. Within their constructors they are provided with the essential sizing and location of the object on the canvas. Each object then has their own respect functions which can be called for which provide the functionality to
move and draw the object.


CONTENT FILES: README.txt, sketch.js, index.html, bunny.js, carrot.js, clouds.js, coins.js, carrot.png, clouds.png, coins.png, evil.png, tree.png, coni.wav, gameMusic.wav, gameOver.wav 386-01-p3-QC-ProjectSummaryandDesignReport-201211.pdf
External Requirements: A live server to run the game. 
Setup and Installation: Download the zip folder from our GitHub link and extract the files onto your computer. Make sure all the files are in the same
folder and open the index.html in your web browser using a live local server. Note just clicking on the index.html file will not run our game. We have noticed that p5.js did not want to load our game assets and the canvas unless it was running on our live server. We suggest running the game on Visuals Studio Code with the Live Server Extension both are free and available on Linux/Windows/MacOSX. 
Sample Invocation:?
Features: Player runs in an endless runner. Jumps over NPC bunnies to prevent collision and losing the game. Game can be restarted by clicking the restart button.
There is a point system by colliding with the coins placed above the bunnies to keep track of score to beat for next time they run again. 
Bugs: We do not know if this a bug or not, but p5.js is not allowing us to run the game by just opening the index.html in your browser wants everything is downloaded. Again View
setup and installation to see how we got our project to run. 

Here is a Link to a video demo of our game just incase you cannot get a live server going on your system
https://youtu.be/SVyVWaYJyXA
