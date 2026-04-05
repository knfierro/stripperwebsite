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