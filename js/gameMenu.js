import { startGame } from "./startGame.js";

export const createGameMenu = () => {
    const title = document.createElement('h2');
    const gameSection = document.querySelector('.game-section__container');

    gameSection.innerHTML = '';
    title.textContent = 'Difficulty';
    title.classList.add('game-menu__title');
    document.querySelector('.confetti').innerHTML = '';

    const createDifficultButton = (difficult) => {
        const button = document.createElement('button');

        button.classList.add('game-menu__difficult-btn');
        button.textContent = `${difficult} cards`;

        button.addEventListener('click', () => startGame(difficult));

        return button;
    };

    gameSection.append(
        title,
        createDifficultButton(10),
        createDifficultButton(12),
        createDifficultButton(14),
        createDifficultButton(16),
    );
};

// Функція для виграшу
export const onWin = () => {
    const confettiContainer = document.querySelector('.confetti');
    
    // Очищаємо контейнер перед запуском нової анімації
    confettiContainer.innerHTML = ''; 
    
    // Викликаємо анімацію конфеті
    confettiContainer.classList.add('confetti-animation'); 

    confettiContainer.appendChild(winMessage);
    // Створюємо елемент тексту для виграшу
    const winMessage = document.createElement('h2');
    winMessage.textContent = 'Congratulations! You won!';
    winMessage.classList.add('win-message');
    
    // Додаємо текст через 1 секунду після початку анімації

 // Час затримки для тексту (після початку конфеті)
};