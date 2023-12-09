
console.log("Guardando.js cargado");
function guardar(){
    db.collection("aprendices").add({
      Nombres: document.getElementById("nombres").value,
      Apellidos: document.getElementById("apellidos").value,
      tipoDocumento: document.getElementById("tipoDocumento").value,
      numDocumento: document.getElementById("numDocumento").value,
      fechaNacimiento: document.getElementById("fechaNacimiento").value,
      telefono: document.getElementById("telefono").value,
      correo: document.getElementById("correo").value,
      municipio: document.getElementById("municipio").value,
      localidad: document.getElementById("localidad").value,
      barrio: document.getElementById("barrio").value,
      acudiente: document.getElementById("acudiente").value,
      tipoAcudiente: document.getElementById("tipoAcudiente").value,
      colegio: document.getElementById("colegio").value,
      programa: document.getElementById("programa").value,
      jornada: document.getElementById("jornada").value,
  })
  .then((docRef) => {
      // console.log("Document written with ID: ", docRef.id);
      alert("Registro de Usuarios EXITOSO!")
  })
  .catch((error) => {
    //  console.error("Error adding document: ", error);
      alert("Error en el registro de Usuarios")
  });
  event.preventDefault();
  }

  function limpiarFormulario() {
    console.log("Limpiando el formulario");
    document.getElementById('nombres').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('tipoDocumento').value = '';
    document.getElementById('numDocumento').value = '';
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('municipio').value = '';
    document.getElementById('localidad').value = '';
    document.getElementById('barrio').value = '';
    document.getElementById('acudiente').value = '';
    document.getElementById('tipoAcudiente').value = '';
    document.getElementById('colegio').value = '';
    document.getElementById('programa').value = '';
    document.getElementById('jornada').value = '';

    event.preventDefault();
}