document.addEventListener('DOMContentLoaded', () => {
    // Generador de Rifa Ganadora
    const minRifaInput = document.getElementById('minRifa');
    const maxRifaInput = document.getElementById('maxRifa');
    const generateRifaBtn = document.getElementById('generateRifa');
    const resultRifaSpan = document.getElementById('resultRifa');

    generateRifaBtn.addEventListener('click', () => {
        const min = parseInt(minRifaInput.value);
        const max = parseInt(maxRifaInput.value);

        if (isNaN(min) || isNaN(max) || min > max) {
            alert('Por favor, ingresa un rango de números válido para la Rifa.');
            return;
        }

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resultRifaSpan.textContent = randomNumber;
        resetSelectionMessage();
    });

    // Generador de Número Ganador
    const minNumeroInput = document.getElementById('minNumero');
    const maxNumeroInput = document.getElementById('maxNumero');
    const generateNumeroBtn = document.getElementById('generateNumero');
    const resultNumeroSpan = document.getElementById('resultNumero');

    generateNumeroBtn.addEventListener('click', () => {
        const min = parseInt(minNumeroInput.value);
        const max = parseInt(maxNumeroInput.value);

        if (isNaN(min) || isNaN(max) || min > max) {
            alert('Por favor, ingresa un rango de números válido para el Número.');
            return;
        }

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resultNumeroSpan.textContent = randomNumber;
        resetSelectionMessage();
    });

    // Selección de Ganador/Al agua
    const markWinnerBtn = document.getElementById('markWinner');
    const markLoserBtn = document.getElementById('markLoser');
    const selectionMessage = document.getElementById('selectionMessage');

    markWinnerBtn.addEventListener('click', () => {
        const rifa = resultRifaSpan.textContent;
        const numero = resultNumeroSpan.textContent;

        if (rifa === '--' || numero === '--') {
            selectionMessage.textContent = 'Por favor, genera una Rifa y un Número primero.';
            selectionMessage.style.color = 'orange';
            return;
        }
        selectionMessage.textContent = `¡Felicidades! La Rifa ${rifa} con el Número ${numero} es el GANADOR.`;
        selectionMessage.style.color = 'var(--green-winner)';
    });

    markLoserBtn.addEventListener('click', () => {
        const rifa = resultRifaSpan.textContent;
        const numero = resultNumeroSpan.textContent;

        if (rifa === '--' || numero === '--') {
            selectionMessage.textContent = 'Por favor, genera una Rifa y un Número primero.';
            selectionMessage.style.color = 'orange';
            return;
        }
        selectionMessage.textContent = `Lo sentimos, la Rifa ${rifa} con el Número ${numero} fue "Al agua".`;
        selectionMessage.style.color = 'var(--red-loser)';
    });

    function resetSelectionMessage() {
        selectionMessage.textContent = '';
        selectionMessage.style.color = '';
    }
});
