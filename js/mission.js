// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.mission-title');
    const text = title.getAttribute('data-text');
    
    // Разбиваем текст на буквы
    title.innerHTML = text.split('').map((char, index) => 
        `<span style="--x: ${Math.random() * 2 - 1}; --y: ${Math.random() * 2 - 1}; 
        animation-delay: ${index * 0.1}s">${char}</span>`
    ).join('');
    
    // Запуск анимации черной дыры
    const hole = document.querySelector('.black-hole');
    hole.style.opacity = 1;
});