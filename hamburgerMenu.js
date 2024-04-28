document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', function() {
            hamburgerButton.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
});
