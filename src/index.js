import "./styles.css"
import initialLoad from "./loadPage";
import menuPage from "./menutab";
import contactForm from "./contact";
import clearDiv from "./clear";



initialLoad();

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    clearDiv();
    initialLoad();
})

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
    clearDiv();
    menuPage();
});

const contactButton = document.querySelector('#contact');
contactButton.addEventListener('click', () => {
    clearDiv();
    contactForm();
})
