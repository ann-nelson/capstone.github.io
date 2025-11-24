document.addEventListener("DOMContentLoaded", () => {
    function setupCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        const track = carousel.querySelector(".carousel-track");
        const slides = Array.from(track.children);
        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");
        const counter = carousel.querySelector(".counter");

        let currentIndex = 0;
        const totalSlides = slides.length;

        // Update slide + counter
        function updateCarousel() {
            const offset = -currentIndex * 100;
            track.style.transform = `translateX(${offset}%)`;

            counter.textContent = `${currentIndex + 1}/${totalSlides}`;
        }

        // Button listeners
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });

        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        });

        updateCarousel();
    }

    // Initialize both carousels
    setupCarousel("prototype-carousel");
    setupCarousel("final-carousel");
});


