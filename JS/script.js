let logoText = document.getElementById('logo-text');
let bubbles = document.getElementById('bubbles');
let rockLeft = document.getElementById('rock-left');
let coral = document.getElementById('coral');

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;

    // logo scroll behind
    logoText.style.marginTop = value * 2.2 + 'px';
    // bubbles move to top when scrolled
    bubbles.style.top = value * -1.5 + 'px';
    rockLeft.style.left = value * -1 + 'px';
    coral.style.top = value * -0.2 + 'px';

});


















const horizontals = document.querySelectorAll('.section--horizontal');

const setTranslateX = (element, progression) => {
  if (progression > 1) {
    progression = 1;
  } else if (progression < 0) {
    progression = 0;
  }

  const toMove = element.offsetWidth - window.innerWidth;
  const transform = -1 * toMove * progression + 'px';
  
  element.style.transform = 'translateX(' + transform + ')';
}

window.addEventListener('scroll', () => {
  horizontals.forEach(horizontal => {
    const inner = horizontal.querySelector('.section__inner');

    window.requestAnimationFrame(() => {
      const toGo = horizontal.offsetHeight - window.innerHeight;

      const position = window.scrollY - horizontal.offsetTop;
      const progression = position / toGo;

      if (progression > 0 && progression < 1) {
        horizontal.classList.add('section--isFixed');
      } else {
        horizontal.classList.remove('section--isFixed');
      }

      if (progression >= 1) {
        horizontal.classList.add('section--isScrolled');
      } else {
        horizontal.classList.remove('section--isScrolled');
      }

      setTranslateX(inner, progression);
    });
  });
});