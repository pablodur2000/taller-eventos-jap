
document.addEventListener("DOMContentLoaded", function() {

    const div = document.getElementsByTagName("div");

    div[0].addEventListener('click', () => {
        alert("Hola! Soy un div");
    });

});