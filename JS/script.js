let logoText = document.getElementById('logo-text');
let bubbles = document.getElementById('bubbles');
let rockLeft = document.getElementById('rock-left');
let coral = document.getElementById('coral');
let bully1 = document.querySelector('.bully1');
let bully3 = document.querySelector('.bully3');
let herman = document.querySelector('.herman');
let underwater = document.querySelector('.underwater');
let wSwimming = document.querySelector('wswimming');


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
    logoText.style.transform = `translateY(${value * 1.3}px)`;
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

 
let wSwimming = document.querySelector('.w-swimming');
wSwimming.style.left = scrollPosition * 0.10 + 'px';

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
   
    // const sparkleTooltipTrigger = document.getElementById('sparkleTooltipTrigger');
    // const jsquidTooltip = document.querySelector('.tooltip-jsquid .text');
    
    // sparkleTooltipTrigger.addEventListener('mouseover', () => {
    //     jsquidTooltip.style.opacity = '1';
    // });
    
    // sparkleTooltipTrigger.addEventListener('mouseout', () => {
    //     jsquidTooltip.style.opacity = '0';
    // });

// Pop Up Content
function toggleMOWPopup() {
  var popup = document.getElementById("popupContent-MOW");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}
function closeMOWPopup() {
  var popup = document.getElementById("popupContent-MOW");
  popup.style.display = "none";
}
 
function toggleSeaSheepPopup() {
  var popup = document.getElementById("popupContent-Seasheep");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}
function closeSeaSheepPopup() {
  var popup = document.getElementById("popupContent-Seasheep");
  popup.style.display = "none";
}
 
function toggleSeaBunnyPopUp() {
  var popup = document.getElementById("popupContent-Seabunny");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}
function closeSeaBunnyPopup() {
  var popup = document.getElementById("popupContent-Seabunny");
  popup.style.display = "none";
}
 
function toggleFGurnardPopUp() {
  var popup = document.getElementById("popupContent-FGurnard");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}
function closeFGurnardPopup() {
  var popup = document.getElementById("popupContent-FGurnard");
  popup.style.display = "none";
}
function toggleCSquidPopUp() {
  var popup = document.getElementById("popupContent-cSquid");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}
function closeCSquidPopup() {
  var popup = document.getElementById("popupContent-cSquid");
  popup.style.display = "none";
}
function toggleOreoPopUp() {
  var popup = document.getElementById("popupContent-Oreo");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}
function closeOreoPopup() {
  var popup = document.getElementById("popupContent-Oreo");
  popup.style.display = "none";
}
function toggleSeaAngelPopUp() {
  var popup = document.getElementById("popupContent-SeaAngel");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}
function closeSeaAngelPopup() {
  var popup = document.getElementById("popupContent-SeaAngel");
  popup.style.display = "none";
}
function toggleSnipeEelPopUp() {
  var popup = document.getElementById("popupContent-SnipeEel");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}
function closeSnipeEelPopup() {
  var popup = document.getElementById("popupContent-SnipeEel");
  popup.style.display = "none";
}
function toggleCoelacanthPopUp() {
  var popup = document.getElementById("popupContent-Coelacanth");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}
function closeCoelacanthPopup() {
  var popup = document.getElementById("popupContent-Coelacanth");
  popup.style.display = "none";
}
function toggleOstracodPopUp() {
  var popup = document.getElementById("popupContent-Ostracod");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}
function closeOstracodPopup() {
  var popup = document.getElementById("popupContent-Ostracod");
  popup.style.display = "none";
}
function toggleOstracodPopUp() {
  var popup = document.getElementById("popupContent-Ostracod");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}
function closeOstracodPopup() {
  var popup = document.getElementById("popupContent-Ostracod");
  popup.style.display = "none";
}
function toggleJSquidPopUp() {
  var popup = document.getElementById("popupContent-JSquid");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}

function closeJSquidPopup() {
  var popup = document.getElementById("popupContent-JSquid");
  popup.style.display = "none";
}
function toggleSiphonPopUp() {
  var popup = document.getElementById("popupContent-Siphon");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}
function closeSiphonPopup() {
  var popup = document.getElementById("popupContent-Siphon");
  popup.style.display = "none";
}

const sparkleTooltipTrigger = document.getElementById('sparkleTooltipTrigger');
const jsquidTooltip = document.querySelector('.tooltip-jsquid .text');

sparkleTooltipTrigger.addEventListener('mouseover', () => {
  jsquidTooltip.style.opacity = '1';
});
sparkleTooltipTrigger.addEventListener('click', toggleJSquidPopUp);

sparkleTooltipTrigger.addEventListener('mouseout', () => {
  jsquidTooltip.style.opacity = '0';
});

// Tap icon
document.addEventListener('DOMContentLoaded', function () {
  let timeoutId;
 
  // Select all images
  const tapImgs = document.querySelectorAll('#tap-mow img, #tap-seasheep img, #tap-instructions-text');

 
  function startAnimation() {
      tapImgs.forEach(tapImg => {
          tapImg.classList.remove('fade-in');
          setTimeout(() => tapImg.classList.add('fade-in'), 10);
      });
  }
 
  function resetAnimation() {
      tapImgs.forEach(tapImg => {
          tapImg.classList.remove('fade-in');
      });
  }
 
  function handleMouseMove() {
      resetAnimation();
      clearTimeout(timeoutId);
      timeoutId = setTimeout(startAnimation, 3000); // 3000 milliseconds = 3 seconds
  }
 
  // Listen for mousemove events
  document.addEventListener('mousemove', handleMouseMove);
 
  // Initial animation start after a delay
  setTimeout(startAnimation, 1000); // Delayed start to allow the animation to be visible initially
 });
 


