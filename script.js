// Toggle hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Toggle dropdown on mobile
const dropdownItems = document.querySelectorAll('.dropdown');

dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.toggle('active');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
function toggleDataSiswa(event) {
    event.preventDefault(); // Mencegah link berpindah halaman
    var section = document.getElementById("dataSiswaSection");

    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        setTimeout(() => section.classList.add("show"), 10);

        // Scroll ke bagian Data Siswa dengan offset agar tidak tertutup gambar/header
        window.scrollTo({
            top: section.offsetTop - 100, // Sesuaikan nilai offset agar tabel terlihat jelas
            behavior: "smooth"
        });
    } else {
        section.classList.remove("show");
        setTimeout(() => section.style.display = "none", 500); // Animasi hide lebih smooth
    }
}

function scrollToTop(event) {
    event.preventDefault(); // Mencegah link default
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
