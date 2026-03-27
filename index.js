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

