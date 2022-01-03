let campoInput = document.getElementById("texto-tarefa");
let inputButton = document.getElementById("criar-tarefa");
let taskList = document.getElementById("lista-tarefas");

// 5 e 6
function addTarefa() {
    
    inputButton.addEventListener("click", function() {
        if (campoInput.value.length > 0) {
            let newLi = document.createElement("li");
            newLi.innerText = campoInput.value;

            taskList.appendChild(newLi);
            campoInput.value = "";
        }
    });

    // essa parte não precisava, mas add a função no enter
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

// 7
function itemCinza() {
    taskList.addEventListener("click", function() {
        event.target.style.backgroundColor = "rgb(128, 128, 128)";
    });
};
itemCinza();

// 8
// só pode selecionar um elemento por vez


// 9
// clicar duas vezes no item faz com que ele seja riscado



// 10
let apagaTudo = document.getElementById("apaga-tudo");
apagaTudo.addEventListener("click", apagaLista);

function apagaLista() {
    taskList.innerHTML = "";
};


