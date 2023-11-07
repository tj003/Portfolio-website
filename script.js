  // Smooth scrolling for anchor links and navbar links
  document.addEventListener('DOMContentLoaded', function () {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    var navbarLinks = document.querySelectorAll('.navbar-links a');
    var scrollToAboutButton = document.getElementById('scrollToAbout');

    function scrollToSection(target) {
        var targetElement = document.querySelector(target);
        var targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    }

    function attachScrollListener(link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var target = this.getAttribute('href');
            scrollToSection(target);
        });
    }

    for (var i = 0; i < anchorLinks.length; i++) {
        attachScrollListener(anchorLinks[i]);
    }

    for (var j = 0; j < navbarLinks.length; j++) {
        attachScrollListener(navbarLinks[j]);
    }

    scrollToAboutButton.addEventListener('click', function (e) {
        e.preventDefault();
        var target = '#about';
        scrollToSection(target);
    });
});
function toggleMenu() {
    var navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.classList.toggle("active");
}
