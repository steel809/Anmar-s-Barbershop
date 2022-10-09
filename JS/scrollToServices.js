
var scrollToPricing = document.querySelector('.clickPricing');

function ScrollToElement(elementName) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(elementName).offset().top
    }, 2000);
}

if (scrollToPricing) {
    scrollToPricing.addEventListener('click', () => {
        ScrollToElement('.price-section');

    });
}



//! Scrolling to Services will be visible in the link
var jump = function (e) {
    if (e) {
        e.preventDefault();
        var target = $(this).attr("href");
    } else {
        var target = location.hash;
    }

    $('html,body').animate(
        console.log(location.hash),
        ScrollToElement(location.hash),
        function () {
            location.hash = target;
        });

}

$(document).ready(function () {
    $('a[href^=#]').bind("click", jump);

    if (location.hash) {
        setTimeout(function () {
            $('html, body').scrollTop(0).show();
            jump();
        }, 0);
    } else {
        $('html, body').show();
    }
});