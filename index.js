$(document).mousemove(function(e) {
  // Check if mouse is inside the flashlight section
  const section = $('#flashlight-section');
  const offset = section.offset();
  const x = e.pageX - offset.left;
  const y = e.pageY - offset.top;

  $('.light').css(
    'background',
    'radial-gradient(circle at ' + x + 'px ' + y + 'px, transparent 150px, #000 300px)'
  );
});

gsap.from(".fade-up", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3
});
// Select all bubbles
const bubbles = document.querySelectorAll('.envo-bubble');

bubbles.forEach(bubble => {
    bubble.addEventListener('click', function(e) {
        // Prevent the "click outside" logic from firing immediately
        e.stopPropagation();

        // If you want only one bubble to be zoomed out at a time, 
        // remove 'is-active' from all others first:
        bubbles.forEach(b => {
            if (b !== bubble) b.classList.remove('is-active');
        });

        // Toggle the zoom-out effect on the tapped bubble
        this.classList.toggle('is-active');
    });
});

// Reset the bubbles if the user taps anywhere else on the screen
document.addEventListener('click', () => {
    bubbles.forEach(bubble => bubble.classList.remove('is-active'));
});