const $submit = document.getElementById("submit");
const $button = document.getElementById("mandarpag");


document.addEventListener("click", (e) => {
    if (e.target === $submit) {

        var contactos = [
            { nombre: "Pedro Lopez", numero: "4545-9870" },
            { nombre: "Pedro Medina", numero: "4546-5025" },
            { nombre: "Davi Areválo", numero: "9875-6021" },
            { nombre: "Usuario Random", numero: "8754-9650" },
        ];

        var tabla = document.getElementById("contactosTable");

        for (var i = 0; i < contactos.length; i++) {
            // Crear una nueva fila
            var fila = tabla.insertRow();

            // Insertar celdas con los datos
            var celdaNombre = fila.insertCell(0);
            var celdaNumero = fila.insertCell(1);

            // Asignar valores a las celdas
            celdaNombre.innerHTML = contactos[i].nombre;
            celdaNumero.innerHTML = contactos[i].numero;
        }
    }
})

function redirect(){
    window.location.href = "otra_pagina.html";
}


/*function mostrar_datos(){
    var contactos = [
        {nombre: "Pedro Lopez", numero: "4545-9870"},
        {nombre: "Pedro Medina", numero: "4546-5025"},
        {nombre: "Davi Areválo", numero: "9875-6021"},
        {nombre: "Usuario Random", numero: "8754-9650"},
    ];

    var resultado = "<h2>Contactos</h2>";

    for(var i=0; i<contactos.length; i++){
        resultado += "<div>-----</div>";
        resultado += "<div>Nombre: " + contactos[i].nombre + "</div>";
        resultado += "<div>Número: " + contactos[i].numero + "</div>";
    }

    document.body.innerHTML = resultado;
}*/

