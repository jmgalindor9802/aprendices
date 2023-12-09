function ver() {
    console.log('Ver button clicked');
    const tableBody = document.getElementById("tableBody");

    db.collection("aprendices").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const newRow = tableBody.insertRow();
            // Agregar celdas a la fila
            newRow.insertCell().textContent = doc.data().Nombres;
            newRow.insertCell().textContent = doc.data().Apellidos;
            newRow.insertCell().textContent = doc.data().tipoDocumento;
            newRow.insertCell().textContent = doc.data().numDocumento;
        });
    });
}

// Llama a la función después de que la página se haya cargado
document.addEventListener("DOMContentLoaded", function() {
    ver();
});
