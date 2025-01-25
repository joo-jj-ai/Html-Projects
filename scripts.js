// You can add interactivity or animations using JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Example: Simple scroll-to-top button
    const scrollBtn = document.createElement('button');
    scrollBtn.textContent = '↑';
    scrollBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Optional: You can implement carousel or slider for testimonials
});
