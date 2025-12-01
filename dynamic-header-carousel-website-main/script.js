// Carousel Configuration
const slides = [
    {
        id: 1,
        title: "Discover Amazing Adventures",
        description: "Embark on unforgettable journeys to breathtaking destinations around the world. Experience cultures, landscapes, and memories that will last a lifetime."
    },
    {
        id: 2,
        title: "Modern Innovation & Design",
        description: "Explore cutting-edge technology and sleek design that pushes boundaries. Where creativity meets functionality in perfect harmony."
    },
    {
        id: 3,
        title: "Nature's Tranquil Beauty",
        description: "Find peace and serenity in the natural world. Reconnect with the earth and discover the simple joys of outdoor exploration."
    },
    {
        id: 4,
        title: "Urban Energy & Culture",
        description: "Immerse yourself in the vibrant pulse of city life. Where architecture, art, and diverse communities create an electric atmosphere."
    }
];

class Carousel {
    constructor() {
        this.currentSlide = 0;
        this.isAutoPlaying = true;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000;

        this.initElements();
        this.setupEventListeners();
        this.startAutoPlay();
    }

    initElements() {
        this.slideElements = document.querySelectorAll('.carousel-slide');
        this.dotElements = document.querySelectorAll('.dot');
        this.prevButton = document.querySelector('.prev-button');
        this.nextButton = document.querySelector('.next-button');
        this.titleElement = document.querySelector('.slide-title');
        this.descriptionElement = document.querySelector('.slide-description');
        this.contentContainer = document.querySelector('.content-container');
    }

    setupEventListeners() {
        // Arrow buttons
        this.prevButton.addEventListener('click', () => this.prevSlide());
        this.nextButton.addEventListener('click', () => this.nextSlide());

        // Dots
        this.dotElements.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Stop auto-play on manual interaction
        this.prevButton.addEventListener('click', () => this.stopAutoPlay());
        this.nextButton.addEventListener('click', () => this.stopAutoPlay());
        this.dotElements.forEach(dot => {
            dot.addEventListener('click', () => this.stopAutoPlay());
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
                this.stopAutoPlay();
            }
            if (e.key === 'ArrowRight') {
                this.nextSlide();
                this.stopAutoPlay();
            }
        });

        // Mouse events for pause/resume
        this.slideElements.forEach(slide => {
            slide.addEventListener('mouseenter', () => {
                if (this.isAutoPlaying) {
                    this.pauseAutoPlay();
                }
            });
            slide.addEventListener('mouseleave', () => {
                if (this.isAutoPlaying) {
                    this.resumeAutoPlay();
                }
            });
        });
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % slides.length;
        this.updateCarousel();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + slides.length) % slides.length;
        this.updateCarousel();
    }

    updateCarousel() {
        // Update slide visibility
        this.slideElements.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });

        // Update dots
        this.dotElements.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });

        // Update content with animation
        this.contentContainer.style.animation = 'none';
        setTimeout(() => {
            const currentSlideData = slides[this.currentSlide];
            this.titleElement.textContent = currentSlideData.title;
            this.descriptionElement.textContent = currentSlideData.description;
            this.contentContainer.style.animation = '';
        }, 10);
    }

    startAutoPlay() {
        if (!this.isAutoPlaying) {
            this.isAutoPlaying = true;
        }
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        this.isAutoPlaying = false;
        this.pauseAutoPlay();
    }

    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    resumeAutoPlay() {
        this.pauseAutoPlay();
        this.startAutoPlay();
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});

// Log initialization
console.log('Carousel initialized successfully');
