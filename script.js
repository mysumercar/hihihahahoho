function checkText() {
    var inputText = document.getElementById('textInput').value;
    
    // Перевірка, чи введений текст відповідає заданому
    if (inputText === 'Даша') {
        window.location.href = 'u_Best/success.html'; // Перенаправлення на іншу сторінку
    } else {
        alert('Неправильний код-доступа до gfkgrekgkjrfdnjrn'); // Повідомлення про неправильний текст
    }
}
