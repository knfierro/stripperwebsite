

function moveFlashlight(e) {
    const section = $('#flashlight-section');
    const offset = section.offset();
    
    // Get coordinates for either Mouse or Touch
    let pageX, pageY;
    if (e.type.includes('touch')) {
        // Use the first finger touch point
        pageX = e.originalEvent.touches[0].pageX;
        pageY = e.originalEvent.touches[0].pageY;
    } else {
        pageX = e.pageX;
        pageY = e.pageY;
    }

    const x = pageX - offset.left;
    const y = pageY - offset.top;

    $('.light').css(
        'background',
        'radial-gradient(circle at ' + x + 'px ' + y + 'px, transparent 100px, #000 200px)'
    );
}

// Bind both mouse and touch events
$(document).on('mousemove touchmove touchstart', moveFlashlight);


gsap.from(".fade-up", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3
});


const bubbles = document.querySelectorAll('.envo-bubble');

bubbles.forEach(bubble => {
    bubble.addEventListener('click', function(e) {
        // Prevent clicking the bubble from immediately triggering the "click-outside" reset
        e.stopPropagation();

        // Check if this bubble is already zoomed in
        const isActive = this.classList.contains('is-active');

        // Reset all bubbles first (so only one is zoomed at a time)
        bubbles.forEach(b => b.classList.remove('is-active'));

        // If it wasn't active before, make it active now
        if (!isActive) {
            this.classList.add('is-active');
        }
    });
});

// Reset if the user taps anywhere else on the page
document.addEventListener('click', () => {
    bubbles.forEach(b => b.classList.remove('is-active'));
});