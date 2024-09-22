document.addEventListener('DOMContentLoaded', function() {
    const wishButton = document.getElementById('wishButton');
    const wishes = document.getElementById('wishes');
    const giftButton = document.getElementById('giftButton');
    const darkModeToggle = document.getElementById('darkModeToggle');

    wishButton.addEventListener('click', function() {
        wishes.classList.toggle('hidden');
        if (wishes.classList.contains('hidden')) {
            wishButton.textContent = 'Make a Wish!';
        } else {
            wishButton.textContent = 'Hide Wishes';
        }
    });

    giftButton.addEventListener('click', function() {
        window.open('https://sama-husien.github.io/Protofolio/', '_blank');
    });

    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️';
        } else {
            darkModeToggle.textContent = '🌙';
        }
    });
});