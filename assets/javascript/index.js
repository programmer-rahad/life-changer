// Vanilla Javascript
!function () {
    var menuIcon = document.querySelector('header#header .menu-icon');
    menuIcon.addEventListener('click', function () {
        const nav = this.nextElementSibling;
        this.classList.toggle('menu-open');
        nav.style.height = !nav.offsetHeight ? nav.children[0].offsetHeight + 'px' : 0;
    })
}();

// jQuery
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        margin: 25,
        nav: true,
        navText: ['<img src="assets/images/icons/arrow-left.png" />','<img src="assets/images/icons/arrow-left.png" />'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    // Video Popup
      // Magnific Popup
      $('a.video-play-button').magnificPopup(
        { type: 'iframe' }
    );
});