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

    function openCookie() {
        if (!isOpen) {
            isOpen = true;
            fortuneCookie.classList.add('opened');
            fortuneText.textContent = getRandomFortune();
            
            // Show fortune and button with slight delay for animation
            setTimeout(() => {
                fortunePaper.classList.remove('hidden');
                newFortuneButton.classList.remove('hidden');
            }, 500);
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