// Carousel Configuration
let currentSlide = 0;

// Game data for each slide
const gameData = [
    {
        title: "Cidade Verde",
        rating: "Test",
        description: "Esse jogo possui 4 modos (transporte saudável, poupando energia, reciclando em casa e poupando água), cada um com uma jogabilidade diferente envolvendo movimentação pelo teclado, cliques do mouse e microações variadas. Cada modo apresenta uma demonstração antes de começar para explicar o objetivo que deve ser realizado dentro de um limite de tempo.",
        environmental: "O tema é explorado por meio de ações individuais como economia de água e energia, mostrando como pequenos hábitos ajudam a reduzir impactos ambientais. Ao final de cada modo, o jogo apresenta uma explicação sobre como aquela ação beneficia o meio ambiente.",
        price: "Test",
        downloads: "Test",
        genre: "Test",
        playtime: "Test",
        trailer: "https://www.youtube.com/watch?v=MmB9b5njVbA",
        game: "https://www.atividadeseducativas.com.br/index.php?id=5361",
        tags: ["Test", "Test", "Test", "Test"]
    },
    {
        title: "Imagine Earth",
        rating: "Test",
        description: "Uma simulação de planeta em tempo real onde o jogador atua como gerente de colônias espaciais. É necessário explorar e povoar planetas distantes, equilibrando metas de lucro com preservação ambiental e condições de vida.",
        environmental: "O jogo demonstra os desafios de um desenvolvimento econômico sustentável e evidencia as vantagens de seguir esse caminho. Faz bom uso das mecânicas para ensinar sobre equilíbrio ecológico e gestão responsável.",
        price: "Test",
        downloads: "Test",
        genre: "Test",
        playtime: "Test",
        trailer: "https://www.youtube.com/watch?v=MmB9b5njVbA",
        game: "https://www.atividadeseducativas.com.br/index.php?id=5361",
        tags: ["Test", "Test", "Test", "Test"]
    },
    {
        title: "Alba: A Wildlife Adventure",
        rating: "Test",
        description: "A personagem Alba tenta preservar o ecossistema de uma ilha mediterrânea, ajudando animais e reunindo voluntários. O jogador explora um ambiente 3D para solucionar problemas ambientais e transformar o local em um paraíso ecológico.",
        environmental: "O jogo valoriza o meio ambiente pela sua beleza e transmite a mensagem de que qualquer pessoa pode fazer a diferença. Ele reforça que mudar hábitos e ajudar a comunidade são atitudes poderosas.",
        price: "Test",
        downloads: "Test",
        genre: "Test",
        playtime: "Test",
        trailer: "https://www.youtube.com/watch?v=MmB9b5njVbA",
        game: "https://www.atividadeseducativas.com.br/index.php?id=5361",
        tags: ["Test", "Test", "Test", "Test"]
    },
    {
        title: "Terra Nil",
        rating: "Test",
        description: "Um jogo de estratégia sobre transformar terras inférteis em ecossistemas equilibrados. O jogador deve purificar o solo, restaurar nascentes e depois remover qualquer vestígio de intervenção humana. A geração procedural cria paisagens únicas a cada partida.",
        environmental: "O foco é completamente voltado à restauração ambiental, mostrando a importância da revitalização de rios, resurgimento de nascentes e recuperação de solos.",
        trailer: "https://www.youtube.com/watch?v=F8eYqNNxICE",
        price: "Test",
        downloads: "Test",
        genre: "Test",
        playtime: "Test",
        trailer: "https://www.youtube.com/watch?v=MmB9b5njVbA",
        game: "https://store.steampowered.com/app/1593030/Terra_Nil/",
        tags: ["Test", "Test", "Test", "Test"]
    },
    {
        title: "Cidade Verde",
        rating: "Test",
        description: "Esse jogo possui 4 modos (transporte saudável, poupando energia, reciclando em casa e poupando água), cada um com uma jogabilidade diferente envolvendo movimentação pelo teclado, cliques do mouse e microações variadas. Cada modo apresenta uma demonstração antes de começar para explicar o objetivo que deve ser realizado dentro de um limite de tempo.",
        environmental: "O tema é explorado por meio de ações individuais como economia de água e energia, mostrando como pequenos hábitos ajudam a reduzir impactos ambientais. Ao final de cada modo, o jogo apresenta uma explicação sobre como aquela ação beneficia o meio ambiente.",
        price: "Test",
        downloads: "Test",
        genre: "Test",
        playtime: "Test",
        trailer: "https://www.youtube.com/watch?v=MmB9b5njVbA",
        game: "https://www.atividadeseducativas.com.br/index.php?id=5361",
        tags: ["Test", "Test", "Test", "Test"]
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