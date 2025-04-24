document.addEventListener('DOMContentLoaded', () => {
    const fortuneCookie = document.getElementById('fortune-cookie');
    const fortunePaper = document.getElementById('fortune-paper');
    const fortuneText = document.getElementById('fortune-text');
    const newFortuneButton = document.getElementById('new-fortune');
    let isOpen = false;

    function getRandomFortune() {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        return fortunes[randomIndex];
    }

    function generateLuckyNumbers() {
        const numbers = [];
        while (numbers.length < 5) {
            const num = Math.floor(Math.random() * 99) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        return numbers.sort((a, b) => a - b).join(', ');
    }

    function openCookie() {
        if (!isOpen) {
            isOpen = true;
            fortuneCookie.classList.add('opened');
            const fortune = getRandomFortune();
            const luckyNumbers = generateLuckyNumbers();
            fortuneText.innerHTML = `${fortune}<br><span class="lucky-numbers">Lucky Numbers: ${luckyNumbers}</span>`;
            
            // Show fortune and button with shorter delay for animation
            setTimeout(() => {
                fortunePaper.classList.remove('hidden');
                newFortuneButton.classList.remove('hidden');
            }, 200);
        }
    }

    function resetCookie() {
        isOpen = false;
        fortuneCookie.classList.remove('opened');
        fortunePaper.classList.add('hidden');
        newFortuneButton.classList.add('hidden');
    }

    // Event listeners
    fortuneCookie.addEventListener('click', openCookie);
    newFortuneButton.addEventListener('click', resetCookie);
});