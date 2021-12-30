let campoInput = document.getElementById("texto-tarefa");
let inputButton = document.getElementById("criar-tarefa");
let taskList = document.getElementById("lista-tarefas");


function addTarefa() {
    
    inputButton.addEventListener("click", function() {
        if (campoInput.value.length > 0) {
            let newLi = document.createElement("li");
            newLi.innerText = campoInput.value;

            taskList.appendChild(newLi);
            campoInput.value = "";
        }
    });

    campoInput.addEventListener("keyup", function() {
        if (event.key === "Enter" && campoInput.value.length > 0) {
            let newLi = document.createElement("li");
            newLi.innerText = campoInput.value;

            taskList.appendChild(newLi);
            campoInput.value = "";
        }
    });
};
addTarefa();


