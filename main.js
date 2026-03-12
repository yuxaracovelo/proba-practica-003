document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-cita');

    if (formulario) {
        formulario.addEventListener('submit', function (evento) {
            evento.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const telefono = document.getElementById('telefono').value.trim();

            if (!nome || !telefono) {
                alert('Por favor, completa todos os campos obrigatorios.');
                return;
            }

            if (!/^[0-9]{9}$/.test(telefono)) {
                alert('O teléfono debe ter 9 díxitos.');
                return;
            }

            alert('Solicitude enviada. Chamarémosche pronto!');
            formulario.reset();
        });
    }
});