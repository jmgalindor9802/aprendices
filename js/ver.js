function toggleTabla() {
    var tabla = document.getElementById('tablaAprendices');
    tabla.style.display = (tabla.style.display === 'none' || tabla.style.display === '') ? 'block' : 'none';
    event.preventDefault();
}


function ver() {
    console.log('Ver button clicked');
    const tableBody = document.getElementById("tableBody");
    event.preventDefault();
    // Limpiar la tabla antes de agregar nuevas filas
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    db.collection("aprendices").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const newRow = tableBody.insertRow();
            // Agregar celdas a la fila
            newRow.insertCell().textContent = doc.data().Nombres;
            newRow.insertCell().textContent = doc.data().Apellidos;
            newRow.insertCell().textContent = doc.data().tipoDocumento;
            newRow.insertCell().textContent = doc.data().numDocumento;
        });
        toggleTabla();
        event.preventDefault();
    });
}
// Llama a la función después de que la página se haya cargado
document.addEventListener("DOMContentLoaded", function() {
    // No necesitas llamar a ver() aquí si ya la estás llamando después de hacer clic en "Consultar"
});
