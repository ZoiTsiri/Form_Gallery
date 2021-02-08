// 3sec delay
var delay = 3;

var slides = document.getElementsByClassName('slide').length;
var current = 1;
var timer = setTimeout(nextSlide, delay * 1000);

function nextSlide() {
  // if current slide position equals slides length, show 1st slide. Otherwise show current slide position + 1 
  var next = (current == slides ? 1 : current + 1);
  // hide current slide
  $('slide' + current).classList.remove('display');
  // show next slide
  $('slide' + next).classList.add('display');

  current = next;

  // set nextSlide to timer
  timer = setTimeout(nextSlide, delay * 1000);
}

function slideshowNext() {
  slideshowPause();

  // if current slide position equals slides length, show 1st slide. Otherwise show current slide position + 1 
  var next = (current == slides ? 1 : current + 1);
  // hide current slide
  $('slide' + current).classList.remove('display');
  // show next slide
  $('slide' + next).classList.add('display');
  current = next;

  return (false);
}

function slideshowPrevious() {
  slideshowPause();

  // if current slide position equals 1 length, show the last slide. Otherwise show current slide position - 1 
  var prev = (current == 1 ? slides : current - 1);
  // hide current slide
  $('slide' + current).classList.remove('display');
  // show next slide
  $('slide' + prev).classList.add('display');
  current = prev;

  return (false);
}

function slideshowPause() {
  clearTimeout(timer);
  timer = false;
  $('pause').classList.add('hidden');
  $('play').classList.remove('hidden');
  return (false);
}

function slideshowPlay() {
  $('pause').classList.remove('hidden');
  $('play').classList.add('hidden');
  nextSlide();
  return (false);
}

// removes hide class to show buttons
function showControls(slideshow) {
  slideshow.children[0].classList.remove('hidden');
}

// adds hidden class to hide buttons
function hideControls(slideshow) {
  if (timer) {
    slideshow.children[0].classList.add('hidden');
  }
}

// getting the element for the specific id
function $(id) {
  return (document.getElementById(id));
}