// Smooth Scroll

let buttons = document.querySelectorAll('a');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.currentTarget.getAttribute('href');

        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Código jQuery (Tooltip)
type="text/javascript">
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
}); 