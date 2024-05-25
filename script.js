let navbar = document.querySelector('.navbar');
let searchform = document.querySelector('.search-form');
let cartitem = document.querySelector('.cart-item-container');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
};

document.querySelector('#cart-btn').onclick = () => {
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
};

var typed = new Typed(".text", {
    strings: ["Storesupplies"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function imgslider(anything) {
    document.querySelector('.Storesupplies.Beads').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    if (circle) {
        circle.computedStyleMap.background = color;
    }
}



