var carousel = document.querySelector('.carousel');
var cellCount = 7;
var selectedIndex = 0;
var interval = 1000;
var prevButton = document.querySelector('.previous-button');
var nextButton = document.querySelector('.next-button');
var rotate;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

prevButton.addEventListener( 'mouseover', function() {
  selectedIndex--;
  rotateCarousel();
  rotate = setInterval(function(){
    selectedIndex--;
    rotateCarousel();
  }, interval);
});
prevButton.addEventListener( 'mouseout', function() {
  clearInterval(rotate);
});

nextButton.addEventListener( 'mouseover', function() {
  selectedIndex++;
  rotateCarousel();
  rotate =   setInterval(() => {
    selectedIndex++;
    rotateCarousel();
  }, interval);
});
nextButton.addEventListener( 'mouseout', function() {
  clearInterval(rotate);
});


