const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0; // Tracks the current slide
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        const container = slider.querySelector(".slider-container");
        const prevButton = slider.querySelector(".prev");
        const nextButton = slider.querySelector(".next");
        const items = container.children;
        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight, 10);
        let currentIndex = 0;

        // Function to update slider position
        const updateSlider = () => {
            container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        };

        // Event listener for "prev" button
        prevButton.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        // Event listener for "next" button
        nextButton.addEventListener("click", () => {
            if (currentIndex < items.length - 1) {
                currentIndex++;
                updateSlider();
            }
        });

        // Optional: Adjust slider if window is resized
        window.addEventListener("resize", () => {
            const newWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight, 10);
            if (itemWidth !== newWidth) {
                container.style.transform = `translateX(-${currentIndex * newWidth}px)`;
            }
        });
    });
});


