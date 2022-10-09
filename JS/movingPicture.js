var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var picture = document.querySelector('.TeamPicture');

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', async function() {
    
    let positionY = 60 - window.scrollY / 7;

    picture.setAttribute("style", `transform: translateY(${positionY}px);`)
    
    
})
