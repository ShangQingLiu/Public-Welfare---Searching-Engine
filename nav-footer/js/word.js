let id = window.location.href.split('?');
if(id.length > 1) {
    id = id[1].split('&')[0];
    if (id.split('=')[0] !== "id") id = "";

    if(document.getElementById("userid"))
        document.getElementById("userid").innerText = 'User:' + window.location.href.split('?')[1].split('=')[1];
}



document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {});
});
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
});

function gotoUser(){
    window.location.href='account.html?' + id;
}
function logOut(){
    window.location.href='../Login/welcome.html';
}
