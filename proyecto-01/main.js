// Constructor del objeto tarea
function Tarea(nombre, descripcion, prioridad, estado) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.prioridad = prioridad;
    this.estado = estado;
};

// Funcion que crea una nueva tarea y la agrega a la lista
function agregarTarea(nombre, descripcion, prioridad){
    const nuevaTarea = new Tarea(nombre, descripcion, prioridad, false);
    listaTareas.push(nuevaTarea);
};

// Se inicializan los arreglos con las tareas
let listaTareas = [];
let listaTareasCompletadas = [];

// Seccion que mostrara los resultados de las operaciones
const resultado = document.getElementById('resultado');

// Secciones del input para agregar un elemento
const inputNombre = document.getElementById('miNombre');
const inputDescripcion = document.getElementById('miDescripcion');
const inputPrioridad = document.getElementById('miPrioridad');
const inputEliminar = document.getElementById('indiceEliminar');

// Botones del HTML
const botonVer = document.getElementById('miBoton');
const botonAgregar = document.getElementById('agregar');
const botonEliminar = document.getElementById('eliminar');
const botonRealizadas = document.getElementById('realizadasBoton');

// Accion del boton para ver la lista de tareas
botonVer.addEventListener('click', () => {
    const texto = listaTareas.map((obj, index) => 
        `${index + 1}) <b>Nombre:</b> ${obj.nombre}, <b>Descripcion:</b> ${obj.descripcion}, <b>Prioridad:</b> ${obj.prioridad}, <b>Realizada:</b> ${obj.estado}`
    ).join('<br>');
    console.table(listaTareas);
    resultado.innerHTML = texto;
});

//Accion del boton para agregar tareas
botonAgregar.addEventListener('click', () => {
    const name = inputNombre.value;
    const description = inputDescripcion.value;
    const priority = Number(inputPrioridad.value);

    // Se verifica que la prioridad no sea negativa
    if (priority >= 0) {
        agregarTarea(name, description, priority);
        resultado.textContent = `Se ha agregado la tarera: ${name}`;
    } else if(!name.trim() || !description.trim()){
        resultado.textContent = `Los campos no pueden estar vacios`;
    } else{
        resultado.textContent = `Prioridad Invalida`;
    }

});   

//Accion del boton eliminar tarea
botonEliminar.addEventListener('click', () => {
    const indice = inputEliminar.value - 1;

    if((indice >= 0) && (indice < listaTareas.length)){
        listaTareas[indice].estado = true;
        listaTareasCompletadas.push(listaTareas[indice]);
        listaTareas.splice(indice, 1);
        resultado.textContent = `Elemento eliminado`;
    } else {
        resultado.textContent = `Indice invalido`;
    }

});

botonRealizadas.addEventListener('click', () => {
    const texto = listaTareasCompletadas.map((obj, index) => 
        `${index + 1}) <b>Nombre:</b> ${obj.nombre}, <b>Descripcion:</b> ${obj.descripcion}, <b>Prioridad:</b> ${obj.prioridad}, <b>Realizada:</b> ${obj.estado}`
    ).join('<br>');
    console.table(listaTareas);
    resultado.innerHTML = texto;
});



