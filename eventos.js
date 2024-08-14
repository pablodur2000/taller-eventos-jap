
document.addEventListener("DOMContentLoaded", function() {

    const div = document.getElementsByTagName("div");
    const button = document.getElementsByTagName("button");

    button[0].addEventListener('click', (event) => {
        alert('Hola!');
        event.stopPropagation();
    });

    div[0].addEventListener('click', () => {
        alert("Hola! Soy un div");
    });

});