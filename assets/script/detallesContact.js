const $submit = document.getElementById("submit");
const $button = document.getElementById("mandarpag");


document.addEventListener("click", (e) => {
    if (e.target === $submit) {

        var contactos = [
            { nombre: "Pedro Lopez", numero: "4545-9870" , residencia: "Guatemala" },
            { nombre: "Pedro Medina", numero: "4546-5025" , residencia: "Japon" },
            { nombre: "Davi Areválo", numero: "9875-6021" , residencia: "China" },
            { nombre: "Usuario Random", numero: "8754-9650" , residencia: "Guatemala"},
            { nombre: "Usuario Randomx3", numero: "4404-4040" , residencia: "Usa" },
        ];

        var tabla = document.getElementById("contactosTable");

        for (var i = 0; i < contactos.length; i++) {
            // Crear una nueva fila
            var fila = tabla.insertRow();

            // Insertar celdas con los datos
            var celdaNombre = fila.insertCell(0);
            var celdaNumero = fila.insertCell(1);
            var celdaResi = fila.insertCell(2);

            // Asignar valores a las celdas
            celdaNombre.innerHTML = '<a class="sin-decoration">' + contactos[i].nombre + '</a>';
            celdaNumero.innerHTML = '<a class="sin-decoration">' + contactos[i].numero + '</a>';
            celdaResi.innerHTML = '<a class="sin-decoration">' + contactos[i].residencia + '</a>';
        }
    }
})

