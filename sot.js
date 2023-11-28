const overlay = document.getElementById('overlay');
const druzko = document.querySelector('.employee.druzko');

druzko.addEventListener('mouseover', () => {
    overlay.style.display = 'block';
});

druzko.addEventListener('mouseout', () => {
    overlay.style.display = 'none';
});