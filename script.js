document.addEventListener("DOMContentLoaded", function () {
    function scrollToSection(sectionId) {
        const sectionLink = document.querySelector(`a[href="#${sectionId}"]`);

        if (sectionLink) {
            sectionLink.addEventListener('click', function (event) {
                event.preventDefault();

                const targetElement = document.getElementById(sectionId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
    }
    scrollToSection('about-section');
    scrollToSection('menu-section');
    scrollToSection('contact-section');
    scrollToSection('location-section');
});
