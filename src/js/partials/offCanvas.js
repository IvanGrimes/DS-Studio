$(".main").css('transition', 'margin .5s');

function openNav() {
    $(".offcanvas__menu").css('width', '320px');
    $('.offcanvas__open').attr('onclick', 'closeNav()');
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    $(".offcanvas__menu").css('width', '0');
    $('.offcanvas__open').attr('onclick', 'openNav()');
}
