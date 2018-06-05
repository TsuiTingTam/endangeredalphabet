$('#demo7').scrollbox({
  linear: true,
  delay: 0,
  speed: 60,
  autoPlay: false,
  onMouseOverPause: false
});
$('#demo7-forward').mouseover (function () {
  $('#demo7').trigger('forwardHover');
}).mouseout(function() {
  $('#demo7').trigger('pauseHover');
});