function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('.mobile-menu-icon');

    // Toggle the active class on the navbar
    navbar.classList.toggle('active');

    // Update the menu icon classes
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        const menuIcon = document.querySelector('.mobile-menu-icon');
        
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    });
});
