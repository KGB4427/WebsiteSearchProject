// Get references to the first and second image elements
let CrystalBall = select('#CrystalBall');
let SpeachBubble = select('#Speech');

function fadeInImage() {
    SpeachBubble.style.zIndex = '4';
    SpeachBubble.style.opacity = '0';

    // Add a click event listener to the first image element
    CrystalBall.addEventListener('click', () => {
        // Fade in the #Speech element
        SpeachBubble.style.opacity = '1';
    });
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

drawHoroRectangle();
fadeInImage();

function SetUp() {
    let ButtonTest = select('#ButtonTest');
    ButtonTest.mousePressed(showImage);

    let Speech = select('#Speech');

}

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