let currentSlide = 0;

const gameData = [
    {
    "title": "Cidade Verde",
    "rating": "4/10",
    "description": "Esse jogo possui 4 modos (transporte saudável, poupando energia, reciclando em casa e poupando água), cada um com uma jogabilidade diferente envolvendo movimentação pelo teclado, cliques do mouse e microações variadas. Cada modo apresenta uma demonstração antes de começar para explicar o objetivo que deve ser realizado dentro de um limite de tempo.",
    "environmental": "O tema é explorado por meio de ações individuais como economia de água e energia, mostrando como pequenos hábitos ajudam a reduzir impactos ambientais. Ao final de cada modo, o jogo apresenta uma explicação sobre como aquela ação beneficia o meio ambiente.",
    "price": "Grátis",
    "downloads": "Menos de 100 mil",
    "genre": "Educação Ambiental",
    "playtime": "30 Min",
    "trailer": "A",
    "game": "https://www.atividadeseducativas.com.br/index.php?id=5361",
    "tags": ["Educação", "Sustentabilidade", "Interativo", "Ambiental"]
},
{
    "title": "Imagine Earth",
    "rating": "7/10",
    "description": "Uma simulação de planeta em tempo real onde o jogador atua como gerente de colônias espaciais. É necessário explorar e povoar planetas distantes, equilibrando metas de lucro com preservação ambiental e condições de vida.",
    "environmental": "O jogo demonstra os desafios de um desenvolvimento econômico sustentável e evidencia as vantagens de seguir esse caminho. Faz bom uso das mecânicas para ensinar sobre equilíbrio ecológico e gestão responsável.",
    "price": "R$73,99",
    "downloads": "28 mil a 190 mil",
    "genre": "Estratégia",
    "playtime": "12 a 15 horas",
    "trailer": "https://www.youtube.com/watch?v=Ub7x4-seH7k",
    "game": "https://store.steampowered.com/app/280720/Imagine_Earth/",
    "tags": ["Nature", "Top-Down", "Lore-Rich", "RTS"]
},
{
    "title": "Alba: A Wildlife Adventure",
    "rating": "8/10",
    "description": "A personagem Alba tenta preservar o ecossistema de uma ilha mediterrânea, ajudando animais e reunindo voluntários. O jogador explora um ambiente 3D para solucionar problemas ambientais e transformar o local em um paraíso ecológico.",
    "environmental": "O jogo valoriza o meio ambiente pela sua beleza e transmite a mensagem de que qualquer pessoa pode fazer a diferença. Ele reforça que mudar hábitos e ajudar a comunidade são atitudes poderosas.",
    "price": "R$49,99",
    "downloads": "100 mil a 500 mil",
    "genre": "Aventura",
    "playtime": "5 a 7 horas",
    "trailer": "https://www.youtube.com/watch?v=a-Eu9WE3grA",
    "game": "https://store.steampowered.com/app/1337010/Alba_A_Wildlife_Adventure/",
    "tags": ["Aventura", "Ecológico", "Exploração", "Single-player"]
},
{
    "title": "Terra Nil",
    "rating": "9/10",
    "description": "Um jogo de estratégia sobre transformar terras inférteis em ecossistemas equilibrados. O jogador deve purificar o solo, restaurar nascentes e depois remover qualquer vestígio de intervenção humana. A geração procedural cria paisagens únicas a cada partida.",
    "environmental": "O foco é completamente voltado à restauração ambiental, mostrando a importância da revitalização de rios, resurgimento de nascentes e recuperação de solos.",
    "price": "R$89,99",
    "downloads": "10 mil a 50 mil",
    "genre": "Estratégia",
    "playtime": "5 a 10 horas",
    "trailer": "https://www.youtube.com/watch?v=F8eYqNNxICE",
    "game": "https://store.steampowered.com/app/1593030/Terra_Nil/",
    "tags": ["Estratégia", "Ecológico", "Construção", "Single-player"]
},
{
    "title": "Beecarbonize",
    "rating": "9/10",
    "description": "Um jogo de simulação por cartas onde o inimigo são as emissões de carbono. O jogador desenvolve tecnologias, aprova políticas, protege ecossistemas e moderniza a indústria usando recursos representados por moedas: capital, pessoas e ciência.",
    "environmental": "O jogo trabalha gestão de recursos e tomada de decisões para evitar crises como fome, aquecimento dos oceanos e desinformação ambiental, além de ensinar conceitos presentes nas cartas.",
    "price": "Grátis",
    "downloads": "mais de 50 mil",
    "genre": "Cartas",
    "playtime": "1 a 8 horas",
    "trailer": "https://www.youtube.com/watch?v=c0ZK7_ptKp4",
    "game": "https://store.steampowered.com/app/2486750/Beecarbonize/",
    "tags": ["Estratégia", "Ecológico", "Gestão de Recursos", "Roguelike"]
}
];

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
});

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    updateGameContent(currentSlide);
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function goToSlide(index) {
    showSlide(index);
}

function updateGameContent(index) {
    const game = gameData[index];
    
    const title = document.getElementById('game-title');
    const rating = document.getElementById('rating');
    const description = document.getElementById('game-description');
    const environmental = document.getElementById('game-environmental');
    const price = document.getElementById('price');
    const downloads = document.getElementById('downloads');
    const genre = document.getElementById('genre');
    const playtime = document.getElementById('playtime');
    const trailerLink = document.getElementById('trailer-link');
    const gamelink = document.getElementById('game-link');
    const tagsContainer = document.getElementById('game-tags');
    
    const contentSection = document.querySelector('.content-section');
    contentSection.style.opacity = '0';
    
    setTimeout(() => {
        title.textContent = game.title;
        rating.textContent = game.rating;
        description.textContent = game.description;
        environmental.textContent = game.environmental;
        price.textContent = game.price;
        downloads.textContent = game.downloads;
        genre.textContent = game.genre;
        playtime.textContent = game.playtime;
        trailerLink.href = game.trailer;
        gamelink.href = game.game;
        
        tagsContainer.innerHTML = '';
        game.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
        
        contentSection.style.opacity = '1';
    }, 300);
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});
