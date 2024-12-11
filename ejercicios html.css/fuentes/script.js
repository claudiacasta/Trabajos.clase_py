const tareanueva = document.querySelector('.agregar-tarea input');
const Listadetareas = document.querySelector('.Lista-de-tareas ul');
const errorcontainer = document.querySelector('.error-container');
let tareas = [];

function Agregartarea() {
    const tarea = tareanueva.value;
    if (tarea === '') {
        mostrarerror('Por favor, agregue una tarea'); return
    }


    const objetotareas = {
        tarea,
        id: Date.now()
    };
    tareas = [...tareas, objetotareas];
    agregarHTML();

    tareanueva.value = '';
}

function mostrarerror(error) {
    const mensajeerror = document.createElement('p');
    mensajeerror.textContent = error;
    mensajeerror.classList.add('mensaje-error');
    errorcontainer.appendChild(mensajeerror);
}

function agregarHTML() {

    limpiarHTML();

    if (tareas.length > 0) {
        tareas.forEach(tarea => {
            const li = document.createElement('li');
            li.innerHTML = `${tarea.tarea} <i tarea-id="${tarea.id}" class="fa-solid fa-trash"></i>`;

            Listadetareas.appendChild(li);
        });
    }

    guardarstorage();
}

function limpiarHTML() {
    Listadetareas.innerHTML = '';
}

function guardarstorage() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}
function eliminartarea() {
    Listadetareas.addEventListener('click', borrartarea);
}

function borrartarea(e) {
    if (e.target.tagName === 'I') {
        const borrarId = parseInt(e.target.getAttribute('tarea-id'));
        tareas = tareas.filter(tarea => tarea.id !== borrarId);
        agregarHTML();
    }

}

function eliminartodo(){
    tareas=[];
    agregarHTML();
}

recuperarStorage();

function recuperarStorage(){
    tareas = JSON.parse(localStorage.getItem('tareas')) || [];
  agregarHTML();
}

eliminartarea();

