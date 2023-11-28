function submitForm() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (!/^\+\d{11}$/.test(phoneNumber)) {
        alert('Номер телефона должен начинаться с + и содержать 12 цифр.');
        return false;
    }
    
    alert('Заявка отправлена.');

    window.location.href = 'main.html';
    return false; 
}