// Get references to the first and second image elements
let CrystalBall;
let SpeachBubble;
let Eye;
let Horoscope;
let HoroscopeImages = []; // Array to hold horoscope images
let Aries;
let AriesArray = ["An Aries I see. You'll have great fortune... In a large create of goat milk.", 
                  "If you see a mermaid in the river. Avoid them! They want your One Piece collection!",
                  "I heard that if an Aries spins in their chair super fast, they'll be sent to the 4th dimension. Or throw up. I forget which."];
let Taurus;
let TaurusArray = ["Im a taurus", "What's up"];
let Gemini;
let GeminiArray = ["Im a gemini", "What's up"];
let Cancer;
let CancerArray = ["Im a cancer", "What's up"];
let Leo;
let LeoArray = ["Im a leo", "What's up"];
let Virgo;
let VirgoArray = ["Im a virgo", "What's up"];
let Libra;
let LibraArray = ["Im a libra", "What's up"];
let Scorpio;
let ScorpioArray = ["Im a scorpio", "What's up"];
let messages = [
    "Your fate is not always set in stone. I should know as I'm made of crystal.",
    "AI The future is uncertain, but your path is clear.",
    "AI Trust in yourself and the answers will come.",
    "AI A great opportunity is on the horizon.",
    "AI Change is coming, embrace it with open arms.",
    "A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A" // Text text length
];
let currentMessage = "";

let showMessage = false;

let opac = 0; // Opacity of the image

function preload(){

    SpeachBubble = loadImage('images/SpeachBubble.png');
        // Load horoscope images into the array
    for (let i = 0; i < 8; i++) {
        HoroscopeImages[i] = loadImage(`images/horoscopes/horoscope${i + 1}.svg`);
    }


}

function setup() {

    createCanvas(window.innerWidth, window.innerHeight);

    background(220, 0);    

    CrystalBall = select('#CrystalBall');
    Eye = select('#Eyeball');
    Horoscope = select('.Horoscope');
    Aries = select('#Aries');
    Taurus = select('#Taurus');
    Gemini = select('#Gemini');
    
    Eye.mousePressed(fadeInImage);
    Aries.mousePressed(displayAriesMessage);
    Taurus.mousePressed(displayTaurusMessage);
    Gemini.mousePressed(displayGeminiMessage);
    console.log('showMessage:', showMessage);



}

function draw(){

    if (showMessage) {
        //SpeachBubble.style('display', 'block');
        showImage();
        
    } else {
        //SpeachBubble.style('display', 'none');

    }



}

function fadeInImage() {

    showMessage = true;
    currentMessage = random(messages);
    showTextBox();

}

function showImage() {

    // Fixed size for the SpeachBubble
    let speachBubbleWidth = 300; // Fixed width
    let speachBubbleHeight = 300; // Fixed height

    // Position the SpeachBubble on the right side of the canvas
    let speachBubbleX = 380; // pixels from the left edge
    let speachBubbleY = 150; // Centered vertically

    // Calculate the text box width and position
    let textBoxWidth = speachBubbleWidth - 30; // Adjust for padding
    let textBoxHeight = speachBubbleHeight - 20; // Adjust for padding
    let textX = speachBubbleX + 30; // Adjust for padding
    let textY = speachBubbleY + 105; // Adjust for padding
    

    
    // Change the opacity of the image
    if(showMessage){
        
        SpeachBubble.resize(width*0.5, 0);
        tint(255, 15);
        image(SpeachBubble, speachBubbleX, speachBubbleY, speachBubbleWidth, speachBubbleHeight); //x y
        // console.log('showMessage:', showMessage);

        // Set the text properties
        textFont('Comic Sans'); // Font type
        fill(0); // Text color (black)
        textSize(24); // Text size
        textAlign(LEFT, TOP); // Center align text
        textWrap(WORD); // Enable word wrapping


        // Display text over the SpeachBubble image
        text(currentMessage, textX, textY, textBoxWidth, textBoxHeight);
        
    
    }
    

    
}

function showTextBox() {
    // Clear the canvas before showing the new text box
    background(220, 0); // Clear the background

    // Display the text box
    showImage();
    textBoxVisible = true;
}

function hideTextBox() {
    if (textBoxVisible) {
        // Clear the canvas to hide the text box
        background(220, 0); // Clear the background
        textBoxVisible = false;
        showMessage = false;
    }
}

function displayAriesMessage() {
    showMessage = true;
    currentMessage = random(AriesArray); // Select a random message from the AriesArray
    showTextBox();
}

function displayTaurusMessage() {
    showMessage = true;
    currentMessage = random(TaurusArray); // Select a random message from the TaurusArray
    showTextBox();
}

function displayGeminiMessage() {
    showMessage = true;
    currentMessage = random(GeminiArray); // Select a random message from the GeminiArray
    showTextBox();
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//     background(220, 0); // Clear the background with a specific color
// }

// function drawHoroRectangle() {
//     const rectangle = document.createElement('div');
//     rectangle.style.width = '80%';
//     rectangle.style.height = '1000px';
//     rectangle.style.borderRadius = '45px';
//     rectangle.style.background = 'rgba(45, 3, 32, 0.55)';
//     document.body.appendChild(rectangle);
//     rectangle.style.position = 'absolute';
//     rectangle.style.top = '70%';
//     rectangle.style.right = '10%';
//     rectangle.style.zIndex = '0';
// }

// function SetUp() {
//     let ButtonTest = select('#ButtonTest');
//     ButtonTest.mousePressed(showImage);

//     let Speech = select('#Speech');

// }

// function setup() {
//     // Add your setup code here
//     createCanvas(window.innerWidth, 400); // create a canvas with width and height of the window
//     background(220);
// // Add your setup code here
// }

// function draw() {
//     // add your drawing code here
//     noStroke();
//     fill(255, 80)
//     circle(mouseX, mouseY, width * 0.05);
    
// } This code is here because I knew this code worked and I
// need to see if the code above was working too.