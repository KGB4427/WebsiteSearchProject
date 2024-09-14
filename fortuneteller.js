// Get references to the first and second image elements
let CrystalBall;
let SpeachBubble;
let Eye;
let messages = [
    "Your fate is not always set in stone. I should know as I'm made of crystal.",
    "AI The future is uncertain, but your path is clear.",
    "AI Trust in yourself and the answers will come.",
    "AI A great opportunity is on the horizon.",
    "AI Change is coming, embrace it with open arms.",
    "A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A" // Text text length
];
let currentMessage = "";

let showMessage = false;

let opac = 0; // Opacity of the image

function preload(){

    SpeachBubble = loadImage('images/SpeachBubble.png');

}

function setup() {

    createCanvas(window.innerWidth, window.innerHeight);

    background(220, 0);    

    CrystalBall = select('#CrystalBall');
    Eye = select('#Eyeball');
    
    Eye.mousePressed(fadeInImage);
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

}

function showImage() {

    // Fixed size for the SpeachBubble
    let speachBubbleWidth = 300; // Fixed width
    let speachBubbleHeight = 150; // Fixed height

    // Position the SpeachBubble on the right side of the canvas
    let speachBubbleX = width - speachBubbleWidth - 20; // 20 pixels from the right edge
    let speachBubbleY = height / 2 - speachBubbleHeight / 2; // Centered vertically

    // Calculate the text box width and position
    let textBoxWidth = speachBubbleWidth - 30; // Adjust for padding
    let textBoxHeight = speachBubbleHeight - 20; // Adjust for padding
    let textX = speachBubbleX + 15; // Adjust for padding
    let textY = speachBubbleY + 15; // Adjust for padding
    
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