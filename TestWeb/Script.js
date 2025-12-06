// Carousel Configuration
let currentSlide = 0;

// Game data for each slide
const gameData = [
    {
        title: "Minecraft",
        rating: "9.5",
        description: "Build, explore, and survive in an infinite procedurally generated world. Craft tools, build shelters, and create anything you can imagine in this iconic sandbox adventure.",
        price: "$26.95",
        downloads: "300M+",
        genre: "Sandbox",
        playtime: "200+ hrs",
        trailer: "https://www.youtube.com/watch?v=MmB9b5njVbA",
        tags: ["Multiplayer", "Creative", "Survival", "Open World"]
    },
    {
        title: "The Witcher 3",
        rating: "9.8",
        description: "Embark on an epic open-world adventure as Geralt of Rivia. Hunt monsters, make impactful choices, and experience one of the most acclaimed RPGs of all time.",
        price: "$39.99",
        downloads: "50M+",
        genre: "RPG",
        playtime: "150+ hrs",
        trailer: "https://www.youtube.com/watch?v=c0i88t0Kacs",
        tags: ["Story Rich", "Open World", "Fantasy", "Action"]
    },
    {
        title: "Stardew Valley",
        rating: "9.3",
        description: "Escape to the countryside and build the farm of your dreams. Grow crops, raise animals, go fishing, mine for ores, and become part of the local community.",
        price: "$14.99",
        downloads: "20M+",
        genre: "Farming Sim",
        playtime: "120+ hrs",
        trailer: "https://www.youtube.com/watch?v=ot7uXNQskhs",
        tags: ["Farming", "Relaxing", "Indie", "Multiplayer"]
    },
    {
        title: "Cyberpunk 2077",
        rating: "8.5",
        description: "Experience the future in Night City, an open-world metropolis obsessed with power, glamour, and body modification. Become a cyberpunk and write your own story.",
        price: "$59.99",
        downloads: "25M+",
        genre: "Action RPG",
        playtime: "100+ hrs",
        trailer: "https://www.youtube.com/watch?v=8X2kIfS6fb8",
        tags: ["Cyberpunk", "Open World", "FPS", "Story Rich"]
    }
];

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
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
    
    // Update game content
    updateGameContent(currentSlide);
}

// Change slide (next/previous)
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Go to specific slide
function goToSlide(index) {
    showSlide(index);
}

// Update game content based on current slide
function updateGameContent(index) {
    const game = gameData[index];
    
    // Get all elements
    const title = document.getElementById('game-title');
    const rating = document.getElementById('rating');
    const description = document.getElementById('game-description');
    const price = document.getElementById('price');
    const downloads = document.getElementById('downloads');
    const genre = document.getElementById('genre');
    const playtime = document.getElementById('playtime');
    const trailerLink = document.getElementById('trailer-link');
    const tagsContainer = document.getElementById('game-tags');
    
    // Add fade-out effect
    const contentSection = document.querySelector('.content-section');
    contentSection.style.opacity = '0';
    
    // Update content after brief delay
    setTimeout(() => {
        title.textContent = game.title;
        rating.textContent = game.rating;
        description.textContent = game.description;
        price.textContent = game.price;
        downloads.textContent = game.downloads;
        genre.textContent = game.genre;
        playtime.textContent = game.playtime;
        trailerLink.href = game.trailer;
        
        // Update tags
        tagsContainer.innerHTML = '';
        game.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
        
        // Fade back in
        contentSection.style.opacity = '1';
    }, 300);
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