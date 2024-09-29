const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container"); // Almacenar las tareas como elementos de lista

//* Agregar Tarea
function addTask() {
    if(inputBox.value === '') {
        alert("Debes escribir algo"); // Valida que no este vacio
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Crea una "x" para eliminar la tarea
        li.appendChild(span); // Añade el botón de eliminar a cada tarea
    }
    inputBox.value =  ""; // Limpia el campo de entrada después de agregar la tarea
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); //Tacha el texto de la tarea se marca como completa
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); //Elimina la tarea
    }
}, false);