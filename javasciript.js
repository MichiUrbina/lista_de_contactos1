//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres//

let listContactos = [
    {nombre: "Michel Urbina"},
    {nombre: "Doris Zavala"},
    {nombre: "Miguel Urbina"},
    {nombre: "Tulio Urbina"},
    {nombre: "Zulema Urbina"},
    {nombre: "Andres Urbina"},
];

//Crea una función para añadir un nuevo contacto a una lista//

function guardarContacto(newContacto){
    listContactos.push(newContacto);
};

guardarContacto({nombre: "Andre Cruz"});

console.log(listContactos);

//Crea una función para borrar un contacto existente de la lista//

const deleteContacto = 1;
listContactos.splice(deleteContacto, 1);

console.log(listContactos);


