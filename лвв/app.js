document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const startButton = document.getElementById('start-button');
    const gameBoard = document.getElementById('game-board');
    const scoreNotebook = document.getElementById('score-notebook');
    const scoreElement = scoreNotebook.querySelector('p');
    let score = 0;
    let level = 1;
    const butterflies = [];

    function startGame() {
        startScreen.classList.add('hidden');
        gameBoard.classList.remove('hidden');
        scoreNotebook.style.display = 'block';
    }

    startButton.addEventListener('click', startGame);

    function updateScoreNotebook() {
        scoreElement.textContent = `Score: ${score}`;
        scoreNotebook.scrollTop = scoreNotebook.scrollHeight;
    }

    function createButterfly() {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        butterfly.style.left = Math.random() * (gameBoard.offsetWidth - 50) + 'px';
        butterfly.style.top = Math.random() * (gameBoard.offsetHeight - 50) + 'px';
        butterfly.addEventListener('click', () => {
            catchButterfly(butterfly);
        });
        gameBoard.appendChild(butterfly);
        butterflies.push(butterfly);
    }

    const removeButterfly = (butterfly) => {
        butterfly.removeEventListener('click', () => {
            catchButterfly(butterfly);
        });
        gameBoard.removeChild(butterfly);
        const index = butterflies.indexOf(butterfly);
        if (index > -1) {
            butterflies.splice(index, 1);
        }
    };

    function catchButterfly(butterfly) {
        removeButterfly(butterfly);
        score += 1;
        updateScoreNotebook();
    }

    const setLevel = () => {
        const interval = 1500 - (level - 1) * 200;
        setInterval(() => {
            if (butterflies.length < level) {
                createButterfly();
            }
        }, interval);
    };

    const initGame = () => {
        score = 0;
        level = 1;
        updateScoreNotebook();
        setLevel();
    };

    startScreen.classList.remove('hidden');
    gameBoard.classList.add('hidden');
    scoreNotebook.style.display = 'none';

    initGame();
});
