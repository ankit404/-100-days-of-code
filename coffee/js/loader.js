$(document).ready(function() {
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({
        fullwidth: true
    });
    $('.parallax').parallax();
    $('.carousel').carousel({
        numVisible: 7,
        shift: 5,
        padding: 55,
    });
});


function toggleModal() {
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}