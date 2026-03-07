const button = document.getElementById("hamburger");
const menu = document.getElementById("sidemenu");
const overlay = document.getElementById("overlay");



console.log(button);
console.log(menu);


button.addEventListener('click', () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('open');

})

overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
})
