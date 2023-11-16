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
