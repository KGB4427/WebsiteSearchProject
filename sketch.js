function addImageOverlay(event) {
    // Remove any previous instances of the image
    const previousImages = document.querySelectorAll('img');
    previousImages.forEach((img) => {
        img.remove();
    });

    // Create a new image element
    const image = document.createElement('img');

    // Set the source of the image
    image.src = 'Images/TestMouse.png';

    // Set the width and height of the image
    image.width = 50; // Replace 100 with the desired width
    image.height = 50; // Replace 100 with the desired height

    // Set the position of the image based on the mouse coordinates
    image.style.position = 'fixed'; // Use 'fixed' instead of 'absolute' to keep the image fixed on the screen
    image.style.left = `${event.clientX - image.width / 2}px`;
    image.style.top = `${event.clientY - image.height / 2}px`;

    // Hide the mouse cursor
    document.body.style.cursor = 'none';

    // Add the image to the document body
    document.body.appendChild(image);
}

// Attach the event listener to the 'mousemove' event
document.addEventListener('mousemove', addImageOverlay);