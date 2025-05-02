document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-fale-conosco');
    if (form) {
        form.addEventListener('submit', function (event) {
            // event.preventDefault(); 
            alert('Enviado com sucesso...');
        });
    }
});
