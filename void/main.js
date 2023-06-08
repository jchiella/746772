inputElement = document.querySelector('input');
messageElement = document.querySelector('.message');

inputElement.addEventListener('keydown', (event) => {
    if (event.code == 'Enter' && !messageElement.classList.contains('leaving')) {
        messageElement.textContent = inputElement.value;
        inputElement.value = '';
        messageElement.classList.add('leaving');
        setTimeout(() => {
            messageElement.textContent = '';
            messageElement.classList.remove('leaving');
        }, 3000);
    }
});