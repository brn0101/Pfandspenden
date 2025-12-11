const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentlyOpen = document.querySelector('.faq-answer.show');

        // Schließe das vorherige, falls offen und nicht dasselbe
        if (currentlyOpen && currentlyOpen !== button.nextElementSibling) {
            currentlyOpen.classList.remove('show');
            currentlyOpen.previousElementSibling.querySelector('.arrow').style.transform = 'rotate(0deg)';
            currentlyOpen.style.display = 'none';
        }

        const answer = button.nextElementSibling;
        const arrow = button.querySelector('.arrow');

        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
            answer.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            answer.classList.add('show');
            answer.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)'; // Pfeil nach oben
        }
    });
});