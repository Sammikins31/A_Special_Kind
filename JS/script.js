let logoText = document.getElementById('logo-text');
let bubbles = document.getElementById('bubbles');
let rockLeft = document.getElementById('rock-left');
let coral = document.getElementById('coral');
let bubble_pg1 = document.querySelector('.bubble_pg1');
let yellow_fish = document.querySelector('.yellow_fish');


// Parallax scroll
window.addEventListener('scroll', ()=> {
    let value = window.scrollY;

    // logo scroll behind
    logoText.style.marginTop = value * 1.0 + 'px';
    // bubbles move to top when scrolled
    bubbles.style.top = value * -1.5 + 'px';
    rockLeft.style.left = value * -1 + 'px';
    coral.style.top = value * -0.2 + 'px';
});
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    bubble_pg1.style.top = scrollPosition * 0.5 + 'px';
    yellow_fish.style.left = scrollPosition * 0.5 + 'px';
 });
 
 


// const rules for horizontal andv vertical scrolls

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

// function noscroll(){
//     window.scrollTo (0,0);
// }
// window.addEventListener("scroll", noscroll);

let quote1 = document.querySelector('.quote1');
let quote2 = document.querySelector('.quote2');
let quote3 = document.querySelector('.quote3');

let observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
           entry.target.style.animation = 'fadeInOut 8s';
           if (entry.target === quote2) {
               entry.target.style.setProperty('animation-delay', '6s');
           } else if (entry.target === quote3) {
               entry.target.style.setProperty('animation-delay', '10s');
           }
       } else {
           entry.target.style.animation = 'none';
       }
   });
}, {
   threshold: 0.1
});

observer.observe(quote1);
observer.observe(quote2);
observer.observe(quote3);

  







