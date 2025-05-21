javascript:(function() {
    const desiredText = 'Cancelar solicitud';
    // Asegúrate de que estas clases sean correctas para los botones actuales de Facebook
    const classes = 'x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft';
    const clickIntervalMs = 750; // Intervalo de 750 milisegundos (0.75 segundos) entre cada intento de clic

    let clickerInterval; // Variable para almacenar la referencia al intervalo

    function findAndClickButton() {
        const classSelector = classes.split(' ').map(cls => `.${cls}`).join('');

        // Busca el primer span que tenga todas las clases especificadas Y el texto "Cancelar solicitud"
        const targetSpan = Array.from(document.querySelectorAll(`span${classSelector}`))
                               .find(span => span.textContent.trim() === desiredText);

        if (targetSpan) {
            // Si se encuentra el botón, haz clic en él
            targetSpan.click();
            console.log(`Clicked 'Cancelar solicitud' button. Remaining elements might update.`);
        } else {
            // Si no se encuentra ningún botón, asumimos que hemos terminado
            clearInterval(clickerInterval); // Detiene el intervalo
            console.log("No more 'Cancelar solicitud' buttons found. Stopping automation.");
            alert("Proceso de cancelación de solicitudes finalizado o no se encontraron más botones.");
        }
    }

    // Inicia el proceso de búsqueda y clic repetidamente
    console.log("Starting automation for 'Cancelar solicitud' buttons. This will run until no more are found.");
    console.log("To stop manually, type 'clearInterval(clickerInterval)' in the console and press Enter.");
    clickerInterval = setInterval(findAndClickButton, clickIntervalMs);

})();
