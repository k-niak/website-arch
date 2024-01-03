const phrases = ["I like dogs", "I like cats"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const typewriter = document.getElementById('typewriter');

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
        currentLetterIndex--;
    } else {
        currentLetterIndex++;
    }

    typewriter.textContent = currentPhrase.slice(0, currentLetterIndex);

    if (!isDeleting && currentLetterIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Delay before start deleting
    } else if (isDeleting && currentLetterIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, 500); // Delay before start typing next phrase
    } else {
        const delay = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, delay);
    }
}

type();
