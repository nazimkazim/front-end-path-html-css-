window.onload = function () {
  Loaded();
};




function Loaded() {
  /* var scroll = window.requestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  }; */

  function debounce(func, wait = 20, immediate) {
    let timeout;

    return function executedFunction() {
      const context = this;
      const args = arguments;

      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
    };
  };

  const computerContainer = document.querySelector('.laptop-container');
  const laptop = document.getElementById("laptop");
  const keyboard = document.getElementById("keyboard");
  const extrabuttons = document.getElementById("extrabuttons");


  function checkSlide(e) {
    //console.log(computerContainer.clientHeight)
    //console.log(window.innerHeight)
    const slideInAt = (window.scrollY + window.innerHeight) - computerContainer.clientHeight / 2;
    console.log(slideInAt);
    if (slideInAt > computerContainer.offsetTop) {
      laptop.classList.add('laptop');
      keyboard.classList.add('keyboard');
      extrabuttons.classList.add('extrabuttons');
    }
  }

  window.addEventListener('scroll', debounce(checkSlide));
}


