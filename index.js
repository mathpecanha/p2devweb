function validateLogin() {
    var password = document.getElementById('password').value;

    if (password === '') {
        document.getElementById('erro').innerText = 'Preencha a senha.';
        return;
    }

    var hashedPassword = hex_md5(password);

    if (hashedPassword === '81dc9bdb52d04dc20036dbd8313ed055') { 
        alert('Login bem-sucedido!');
        window.location = '/card.html';
    } else {
        document.getElementById('erro').innerText = 'Senha incorreta.';
    }
}
