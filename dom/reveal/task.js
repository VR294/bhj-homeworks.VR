const revealBlocks = document.querySelectorAll('.reveal');

function checkVisibility() {
    for (const block of revealBlocks) {
        const rect = block.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            block.classList.add('reveal_active');
        } else {
            block.classList.remove('reveal_active');
        }
    }
}

window.addEventListener('scroll', checkVisibility);
