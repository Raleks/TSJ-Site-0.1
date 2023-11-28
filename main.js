document.querySelector('#calculate').addEventListener('click', function() {
    const electricity = parseFloat(document.getElementById('electricity').value);
    const coldWater = parseFloat(document.getElementById('coldWater').value);
    const hotWater = parseFloat(document.getElementById('hotWater').value);

    const tariff = 50.0;

    const totalCost = electricity * tariff + coldWater * tariff + hotWater * tariff;

    document.getElementById('result').textContent = `Сумма платежа: ${totalCost.toFixed(2)} тг`;

    const overlay = document.querySelector('.overlay');
    const calculatorForm = document.querySelector('.calculator');

    calculatorForm.style.zIndex = 2;
    overlay.style.display = 'block';
        document.getElementById('result').addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});

const params = new URLSearchParams(window.location.search);
const userName = params.get('name');
alert(`Добро пожаловать, ${userName}!`);

const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message');

messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const messageText = messageInput.value;
        if (messageText) {
            const messageElement = document.createElement('div');
            const usernameElement = document.createElement('span');
            usernameElement.id = 'username';
            usernameElement.textContent = userName + ': ';
            messageElement.appendChild(usernameElement);
            messageElement.appendChild(document.createTextNode(messageText));
            chatMessages.appendChild(messageElement);
            messageInput.value = '';
        }
    }
});
new Typed('#animated-text', {
    strings: ["Всё для вас"],
    typeSpeed: 50,
    loop: true
});
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.opacity = idx === index ? "1" : "0";
        });
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000); // 
});
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    document.querySelector('.next-slide-arrow').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? 'block' : 'none';
        });
    });
});
