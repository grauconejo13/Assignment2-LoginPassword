//IIFE
(function() {

    function Start() {
        console.log("App Started!");
    }

    window.addEventListener('load', Start);
})();

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});