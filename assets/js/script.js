document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario-contato');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (validarFormulario(nome, email, mensagem)) {
            console.log('Formulário enviado:', { nome, email, mensagem });
            form.reset();
            alert('Mensagem enviada com sucesso!');
        }
    });
    
    function validarFormulario(nome, email, mensagem) {
        if (nome.trim() === '') {
            alert('Por favor, preencha o campo Nome.');
            return false;
        }
        
        if (email.trim() === '') {
            alert('Por favor, preencha o campo E-mail.');
            return false;
        }
        
        if (!validarEmail(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return false;
        }
        
        if (mensagem.trim() === '') {
            alert('Por favor, preencha o campo Mensagem.');
            return false;
        }
        
        return true;
    }
    
    function validarEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});