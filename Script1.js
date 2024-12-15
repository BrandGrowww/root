


const dynamicTexts = ["Advance Automation", "Data Analytics", "Performance Marketing", "Algorithmic Training", "Up-to-date Technology"];
const dynamicTextElement = document.getElementById("dynamic-text-container");
let index = 0;
function changeDynamicText() {

    const text = dynamicTexts[index];
    dynamicTextElement.innerHTML = '';

    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'dynamic-text-letter expertise';
        span.style.setProperty('--animation-delay', `${i * 0.2}s`);
        span.textContent = char === ' ' ? '\u00A0' : char;

        dynamicTextElement.appendChild(span);
    });
    index = (index + 1) % dynamicTexts.length;
}
setInterval(changeDynamicText, 5000);
changeDynamicText();
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stats__count');

    
    const speeds = [200, 30000, 1000, 2500];

    counters.forEach((counter, index) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speeds[index];

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 50);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});

