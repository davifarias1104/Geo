// Carousel Configuration
let currentSlide = 0;
let autoPlayInterval;
const AUTO_PLAY_DELAY = 5000; // 5 seconds

// Content data for each slide
const slideContent = [
    {
        heading: "Discover Amazing Adventures",
        description: "Explore breathtaking landscapes and embark on unforgettable journeys around the world"
    },
    {
        heading: "Modern Innovation & Design",
        description: "Experience cutting-edge architecture and contemporary design that shapes our future"
    },
    {
        heading: "Nature's Tranquil Beauty",
        description: "Find peace and serenity in the unspoiled wonders of the natural world"
    },
    {
        heading: "Urban Energy & Culture",
        description: "Immerse yourself in the vibrant pulse and dynamic spirit of city life"
    }
];

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
    startAutoPlay();
});

// Show specific slide
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle wrap around
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Add active class to current slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Update content
    updateContent(currentSlide);
}

// Change slide (next/previous)
function changeSlide(direction) {
    showSlide(currentSlide + direction);
    resetAutoPlay();
}

// Go to specific slide
function goToSlide(index) {
    showSlide(index);
    resetAutoPlay();
}

// Update content based on current slide
function updateContent(index) {
    const heading = document.getElementById('main-heading');
    const description = document.getElementById('main-description');
    const content = slideContent[index];
    
    // Add fade-in animation class
    heading.classList.remove('fade-in');
    description.classList.remove('fade-in');
    
    // Force reflow to restart animation
    void heading.offsetWidth;
    
    // Update text content
    heading.textContent = content.heading;
    description.textContent = content.description;
    
    // Add animation class
    heading.classList.add('fade-in');
    description.classList.add('fade-in');
}

// Auto play functionality
function startAutoPlay() {
    autoPlayInterval = setInterval(function() {
        showSlide(currentSlide + 1);
    }, AUTO_PLAY_DELAY);
}

// Reset auto play (when user manually navigates)
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Pause auto play on hover
const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', function() {
        clearInterval(autoPlayInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', function() {
        startAutoPlay();
    });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carouselContainer.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - go to next slide
            changeSlide(1);
        } else {
            // Swipe right - go to previous slide
            changeSlide(-1);
        }
    }
}
