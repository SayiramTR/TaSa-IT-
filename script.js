const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => observer.observe(item));
}

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
    const toggleBackToTop = () => {
        const shouldShow = window.scrollY > 320;
        backToTopButton.classList.toggle("is-visible", shouldShow);
    };

    window.addEventListener("scroll", toggleBackToTop);
    toggleBackToTop();

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
