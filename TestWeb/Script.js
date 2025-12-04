let currentSlide = 0;

const slideContent = [
    {
        heading: "Cidade Verde",
        description: "Esse jogo possui 4 modos (transporte saudável, poupando energia, reciclando em casa e poupando água), cada um com uma jogabilidade diferente envolvendo movimentação pelo teclado, cliques do mouse e microações variadas. Cada modo apresenta uma demonstração antes de começar para explicar o objetivo que deve ser realizado dentro de um limite de tempo.",
        environmental: "O tema é explorado por meio de ações individuais como economia de água e energia, mostrando como pequenos hábitos ajudam a reduzir impactos ambientais. Ao final de cada modo, o jogo apresenta uma explicação sobre como aquela ação beneficia o meio ambiente.",
        link: "https://www.atividadeseducativas.com.br/index.php?id=5361"
    },
    {
        heading: "Imagine Earth",
        description: "Uma simulação de planeta em tempo real onde o jogador atua como gerente de colônias espaciais. É necessário explorar e povoar planetas distantes, equilibrando metas de lucro com preservação ambiental e condições de vida.",
        environmental: "O jogo demonstra os desafios de um desenvolvimento econômico sustentável e evidencia as vantagens de seguir esse caminho. Faz bom uso das mecânicas para ensinar sobre equilíbrio ecológico e gestão responsável."
    },
    {
        heading: "Alba: A Wildlife Adventure",
        description: "A personagem Alba tenta preservar o ecossistema de uma ilha mediterrânea, ajudando animais e reunindo voluntários. O jogador explora um ambiente 3D para solucionar problemas ambientais e transformar o local em um paraíso ecológico.",
        environmental: "O jogo valoriza o meio ambiente pela sua beleza e transmite a mensagem de que qualquer pessoa pode fazer a diferença. Ele reforça que mudar hábitos e ajudar a comunidade são atitudes poderosas."
    },
    {
        heading: "Terra Nil",
        description: "Um jogo de estratégia sobre transformar terras inférteis em ecossistemas equilibrados. O jogador deve purificar o solo, restaurar nascentes e depois remover qualquer vestígio de intervenção humana. A geração procedural cria paisagens únicas a cada partida.",
        environmental: "O foco é completamente voltado à restauração ambiental, mostrando a importância da revitalização de rios, resurgimento de nascentes e recuperação de solos."
    },
    {
        heading: ""
    }
];

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
    
    // Update content
    updateContent(currentSlide);
}

// Change slide (next/previous)
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Go to specific slide
function goToSlide(index) {
    showSlide(index);
}

// Update content based on current slide
function updateContent(index) {
    const heading = document.getElementById('main-heading');
    const description = document.getElementById('main-description');
    const gameTitle = document.getElementById('game-title');
    const gameDesc = document.getElementById('game-description');
    const gameEnv = document.getElementById('game-environmental');
    const content = slideContent[index];
    
    // Add fade-in animation class
    heading.classList.remove('fade-in');
    description.classList.remove('fade-in');
    if (gameTitle) gameTitle.classList.remove('fade-in');
    if (gameDesc) gameDesc.classList.remove('fade-in');
    if (gameEnv) gameEnv.classList.remove('fade-in');
    
    // Force reflow to restart animation
    void heading.offsetWidth;
    
    // Update text content
    heading.textContent = content.heading;
    description.textContent = "Explore esse jogo Ambiental";
    
    if (gameTitle) gameTitle.textContent = content.heading;
    if (gameDesc) gameDesc.textContent = content.description;
    if (gameEnv) gameEnv.textContent = content.environmental;
    
    // Add animation class
    heading.classList.add('fade-in');
    description.classList.add('fade-in');
    if (gameTitle) gameTitle.classList.add('fade-in');
    if (gameDesc) gameDesc.classList.add('fade-in');
    if (gameEnv) gameEnv.classList.add('fade-in');
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
