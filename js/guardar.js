
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
  }