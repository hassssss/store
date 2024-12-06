document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.btn-theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Search Modal
    const searchBtn = document.querySelector('.btn-search');
    const searchModal = document.getElementById('search-modal');
    const closeSearchModal = searchModal.querySelector('.close-modal');

    searchBtn.addEventListener('click', () => {
        searchModal.style.display = 'block';
    });

    closeSearchModal.addEventListener('click', () => {
        searchModal.style.display = 'none';
    });

    // Close modals when clicking outside
    window.addEventListener('click', (event) => {
          // Continue from previous code...
            if (event.target === searchModal) {
                searchModal.style.display = 'none';
            }

        const cartModal = document.getElementById('cart-modal');
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});