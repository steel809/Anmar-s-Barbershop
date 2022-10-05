var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var picture = document.querySelector('.east-side img');
var servicePictures = document.querySelectorAll('.element');


// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', async function() {
    
    let positionY = 70 - window.scrollY / 4;

    picture.setAttribute("style", `transform: translateY(${positionY}px);`)
    
    
})

window.addEventListener('scroll', function() {

    if ($(window).scrollTop()  < $(window).height() / 1.2) {
        let positionX = 200 - window.scrollY / 4;

        servicePictures.forEach((attribute) => {
            attribute.setAttribute("style", `transform: translateX(${positionX}px);`)
        });
    } 
    
})