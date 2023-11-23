let logoText = document.getElementById('logo-text');
let bubbles = document.getElementById('bubbles');
let rockLeft = document.getElementById('rock-left');
let coral = document.getElementById('coral');
// let bubble_pg1 = document.querySelector('.bubble_pg1');
let bully1 = document.querySelector('.bully1');
let bully3 = document.querySelector('.bully3');
let herman = document.querySelector('.herman');


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
    // bubble_pg1.style.top = scrollPosition * 0.5 + 'px';
   bully1.style.left = scrollPosition * 0.10 + 'px';
   bully3.style.left = scrollPosition * -0.1 + 'px';
   herman.style.left = scrollPosition * 0.1 + 'px';
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
  


let btn2 = document.getElementById('btn2');
let quotes = document.querySelectorAll('.quote-container h2');

btn2.addEventListener('click', function() {
    quotes.forEach(quote => {
        quote.style.animation = 'none';
        quote.style.opacity = '1';
    });
    observer.disconnect();
 });
 
    // magnifier
    let magnifier = document.getElementById('magnifier');
    let initialMouseX;
    let initialMouseY;
    let initialMagnifierX;
    let initialMagnifierY;
    let isDragging = false;
    
    magnifier.addEventListener('mousedown', function(event) {
       isDragging = true;
       initialMouseX = event.clientX;
       initialMouseY = event.clientY;
       initialMagnifierX = magnifier.offsetLeft;
       initialMagnifierY = magnifier.offsetTop;
    
       // Prevent text selection during drag
       event.preventDefault();
    });
    
    document.addEventListener('mousemove', function(event) {
       if (isDragging) {
           magnifier.style.left = initialMagnifierX + (event.clientX - initialMouseX) + 'px';
           magnifier.style.top = initialMagnifierY + (event.clientY - initialMouseY) + 'px';
       }
    });
    
    document.addEventListener('mouseup', function(event) {
       if (isDragging) {
           isDragging = false;
           initialMouseX = null;
           initialMouseY = null;
       }
    });
    
    document.addEventListener('mouseleave', function(event) {
       if (isDragging) {
           isDragging = false;
           initialMouseX = null;
           initialMouseY = null;
       }
    });
    
// observerPage2.observe(page2);
// document.addEventListener('DOMContentLoaded', function() {

//     let page2 = document.getElementById('page2');
//     let quotesContainer = document.querySelector('.bully-container');
//     let bullyQuotes = document.querySelectorAll('.bully-quote');
//     let bullyQuote1 = document.querySelector('.bully-quote1');
//     let bullyQuote2 = document.querySelector('.bully-quote2');
//     let bullyQuote3 = document.querySelector('.bully-quote3');


//     let observerPage2 = new IntersectionObserver((entries) => {
//         entries.forEach((entry, index) => {
//             if (entry.isIntersecting) {
//                 // The user has scrolled to the second page
//                 quotesContainer.style.opacity = '1';

//                 // Calculate animation delay based on the index
//                 let delay = index * 2; // Adjust the delay as needed

//                 bullyQuotes.forEach((bullyQuote, i) => {
//                     bullyQuote.style.opacity = '0';
//                     bullyQuote.style.animation = `fadeIn 1s forwards ${delay + i}s`;
//                 });
//             } else {
//                 // The user is not on the second page
//                 quotesContainer.style.opacity = '0';
//                 bullyQuotes.forEach(bullyQuote => {
//                     bullyQuote.style.opacity = '0';
//                     bullyQuote.style.animation = 'none';
//                 });
//             }
//         });
//     }, {
//         threshold: 0.5 // Adjust the threshold as needed
//     });

//     observerPage2.observe(page2);
// });
// bullyQuotes.forEach(bullyQuote => {
//     observer.observe(bullyQuote);
//  });
 


// /let btn2 = document.getElementById('btn2');
// let quotes = document.querySelectorAll('.quote-container h2');

// let isAnimationPaused = false;

// btn2.addEventListener('click', function() {
//    if (isAnimationPaused) {
//     // resume annimation
//     quotes.forEach(quote => {
//         quote,style.animatioPlaystate = 'running';
//     });
//     observer.observe(quote1);
//     observer.observe(quote2);
//     observer.observe(quote3);
// }else{
//     // pause aninmation and show all quotes with opacity 1
//     quotes.forEach(quote => {
//         quote.style.opacity = '1';
//         quote.style.animationPlayState = 'paused';
//     });
//     observer.disconnect();
// }  
// // toggle the animation state
// isAnimationPaused = !isAnimationPaused;
//    });