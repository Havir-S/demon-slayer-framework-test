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
let logoCheck = false;
let textCheck = true;
function scrollSetup() {


  window.addEventListener('scroll', function() {

    scrollCheck();
  });
}

scrollSetup();
