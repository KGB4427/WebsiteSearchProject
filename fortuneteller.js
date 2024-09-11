function fadeInImage() {
    // Get references to the first and second image elements
    const CrystalBall = document.getElementById('#CrystalBall');
    const SpeachBubble = document.getElementById('#Speech');

    SpeachBubble.style.opacity = '0';

    // Add a click event listener to the first image element
    CrystalBall.addEventListener('click', () => {
        // Fade in the #Speech element
        SpeachBubble.style.opacity = '1';
    });
}