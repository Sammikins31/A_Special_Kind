let logoText = document.getElementById('logo-text');
let bubbles = document.getElementById('bubbles');
let rockLeft = document.getElementById('rock-left');
let coral = document.getElementById('coral');
let bully1 = document.querySelector('.bully1');
let bully3 = document.querySelector('.bully3');
let herman = document.querySelector('.herman');
let underwater = document.querySelector('.underwater');


const horizontals = document.querySelectorAll('.section--horizontal');

// Throttle function from lodash
const throttle = (func, limit) => {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

// <!-- ==================== PARALLAX SCROLL =================================== -->
window.addEventListener('scroll', throttle(() => {
    let value = window.scrollY;
// window.addEventListener('scroll', ()=> {
//     let value = window.scrollY;

    // logo scroll behind
    logoText.style.transform = `translateY(${value * 1.5}px)`;
    // bubbles move to top when scrolled
    bubbles.style.transform = `translateY(${value * -1.5}px)`;
    rockLeft.style.transform = `translateX(${value * -1}px)`;
    coral.style.transform = `translateY(${value * 0.2}px)`;
}, 16)); 



window.addEventListener('scroll', throttle(() => {
    let scrollPosition = window.scrollY;
   bully1.style.left = scrollPosition * 0.10 + 'px';
   bully3.style.left = scrollPosition * -0.1 + 'px';
   herman.style.left = scrollPosition * 0.1 + 'px';
   underwater.style.transform = `translateY(${value * -0.5}px)`;

}, 16));
 

// <!-- ==================== HORIZONTAL & VERTICAL SCROLLS =================================== -->

// const horizontals = document.querySelectorAll('.section--horizontal');

const setTranslateX = (element, progression) => {
  if (progression > 1) {
    progression = 1;
  } else if (progression < 0) {
    progression = 0;
  }

  const toMove = element.offsetWidth - window.innerWidth;
  const transform = -1 * toMove * progression + 'px';
  
  element.style.transform = `translateX(${transform})`;
};

window.addEventListener('scroll', throttle(() => {
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
}, 16));

// <!-- ==================== PG1 QUOTES- INTERSECTION OBSERVER =================================== -->
// creating an intersection observer for page 1 
// So everytime scrolls into page 1 the quote animation will start and appear
let quote1 = document.querySelector('.quote1');
let quote2 = document.querySelector('.quote2');
let quote3 = document.querySelector('.quote3');
let quote4 = document.querySelector('.quote4');
let quote5 = document.querySelector('.quote5');
let quote6 = document.querySelector('.quote6');

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.requestAnimationFrame(() => {
                // Adding the fade in out animation from css rules
                entry.target.style.animation = 'fadeInOut 8s';

                if (entry.target === quote2) {
                    entry.target.style.setProperty('animation-delay', '6s');
                } else if (entry.target === quote3) {
                    entry.target.style.setProperty('animation-delay', '10s');
                } else if (entry.target === quote4) {
                    entry.target.style.setProperty('animation-delay', '16s');
                } else if (entry.target === quote5) {
                    entry.target.style.setProperty('animation-delay', '23s');
                } else if (entry.target === quote6) {
                    entry.target.style.setProperty('animation-delay', '24s');
                }
            });
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
observer.observe(quote4);
observer.observe(quote5);
observer.observe(quote6);


  

// <!-- ==================== BUTTON 2 =================================== -->
// When clicking on button 2 it will stop quote animation entirely and all quote texts appear
let btn2 = document.getElementById('btn2');
let quotes = document.querySelectorAll('.quote-container h2');

btn2.addEventListener('click', function() {
    quotes.forEach(quote => {
        quote.style.animation = 'none';
        quote.style.opacity = '1';
    });
    observer.disconnect();
 });
 
// <!-- ==================== MAGNIFIER =================================== -->
// Making the magnifier a draggable object


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

    
    // Magnifier glass
   
 




    
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