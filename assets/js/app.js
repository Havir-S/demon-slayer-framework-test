// SCROLL EVENTS

const documents = document.documentElement,
      mainLogo = document.getElementById('main-logo'),
      textBlade = document.getElementById('misc-div');

function scrollCheck() {

// LOGO CHECK
  let scrollTop     = documents.scrollTop,
      elementOffset = mainLogo,
      distance      = ((elementOffset.offsetTop + elementOffset.offsetHeight) - scrollTop );
      console.log(distance);

      if (!logoCheck) {
        if (distance < -120) {
          console.log('ding');
          mainLogo.classList.remove('d-none');
          logoCheck = true;
        }

      }

      if (distance <= -750 && textCheck == true) {
        textBlade.children[0].style.display = 'none';
        textCheck = false;
      }

      if (distance >= -750 && textCheck == false) {
        textBlade.children[0].style.display = 'block';
        textCheck = true;
      }
}
let logoCheck = false,
    textCheck = true;
function scrollSetup() {


  window.addEventListener('scroll', function() {

    scrollCheck();
  });
}

scrollSetup();

// NAVBAR MOBILE

const mobileButton = document.getElementById('toggle-mobile-nav'),
      mobileNavBar = document.getElementById('mobile-navbar'),
      mobileIconInside = document.querySelector('.mobile-icon-inside');

const toggleMobileNav = function() {
  mobileNavBar.classList.toggle('d-none');
  mobileIconInside.classList.toggle('mobile-started');
}

mobileButton.addEventListener('click', function() {
  toggleMobileNav();
})


// TRAILERS SLIDER

const trailers = document.querySelectorAll('.video-div'),
      trailersBar = document.getElementsByClassName('videos-list')[0],
      nextTrailerBtn = document.getElementsByClassName('trailer-next')[0],
      prevTrailerBtn = document.getElementsByClassName('trailer-prev')[0];

let currentTrailerIndex = 0;

const changeTrailer = function(index, e, g) {
  if ((index + 1) == trailers.length) {
    currentTrailerIndex = 0;
  }


  trailersBar.style.transform = `translateX(-${540 * index}px)`;
}

for (var j = 0; j < trailers.length; j++) {
  trailers[j].addEventListener('click', function() {
    changeTrailer(this.getAttribute('data-trailer-index'));
    currentTrailerIndex = Number(this.getAttribute('data-trailer-index'));
  })
}

nextTrailerBtn.onclick = function() {
  changeTrailer(currentTrailerIndex++);
}

prevTrailerBtn.onclick = function() {
  changeTrailer(currentTrailerIndex--);
}

const trailerChanger = setInterval(function() {
  changeTrailer(currentTrailerIndex++);
},4000);





// SCREENSHOTS SLIDER

const slides = document.getElementsByClassName('episode-div'),
      slidesBar = document.querySelector('.episodes-bar'),
      controlButtons = document.querySelectorAll('.change-control'),
      imgs = document.querySelectorAll('.episode-img');

let currentSlideIndex = 0;

for (var j = 0; j < controlButtons.length; j++){
  controlButtons[j].addEventListener('click', function() {
    changeSlide(this.getAttribute('data-slide-index'))
    currentSlideIndex = Number(this.getAttribute('data-slide-index'));


  })
}

const changeSlide = function(index) {
  slidesBar.style.transform = 'translateX(-' + (imgs[0].width * index) + 'px)';

  for (var j =0; j < imgs.length; j++) {
    imgs[j].classList.remove('main-slide');
    controlButtons[j].classList.remove('active-sc');
    controlButtons[index].classList.add('active-sc');
  }
  imgs[index].classList.add('main-slide');
}

// INTERVAL

let slider = setInterval(function() {
  if (currentSlideIndex > 3) {
    currentSlideIndex = 0;
  }
  changeSlide(currentSlideIndex++);
},3000);
