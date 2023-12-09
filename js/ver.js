function ver() {
    console.log('Ver button clicked');
    const tableBody = document.getElementById("tableBody");

    db.collection("aprendices").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const newRow = tableBody.insertRow();

            // Agregar celdas a la fila
            newRow.insertCell().textContent = doc.data().Apellidos;
            newRow.insertCell().textContent = doc.data().Nombres;
            newRow.insertCell().textContent = doc.data().acudiente;
            newRow.insertCell().textContent = doc.data().barrio;
            newRow.insertCell().textContent = doc.data().colegio;
            newRow.insertCell().textContent = doc.data().correo;
            newRow.insertCell().textContent = doc.data().fechaNacimiento;
            newRow.insertCell().textContent = doc.data().jornada;
            newRow.insertCell().textContent = doc.data().localidad;
            newRow.insertCell().textContent = doc.data().municipio;
            newRow.insertCell().textContent = doc.data().numDocumento;
            newRow.insertCell().textContent = doc.data().programa;
            newRow.insertCell().textContent = doc.data().telefono;
            newRow.insertCell().textContent = doc.data().tipoAcudiente;
            newRow.insertCell().textContent = doc.data().tipoDocumento;
        });
    });
}

// Llama a la función después de que la página se haya cargado
document.addEventListener("DOMContentLoaded", function() {
    ver();
});
