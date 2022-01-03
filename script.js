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

// 7 e 8
taskList.addEventListener("click", selected);

function selected() {
    let selected = document.querySelector(".selected");
    let novaSelecao = event.target;
    
    if (selected) {
        selected.classList.remove("selected");
    };
    novaSelecao.classList.add("selected");
};

/*
// função anterior que só pinta mas não muda classe e pinta quantos itens clicar
function itemCinza() {
    taskList.addEventListener("click", function() {
        event.target.classList.add("selected");
    });
};
itemCinza();
*/

// 9
taskList.addEventListener("dblclick", completed);

function completed(event) {
    let completed = event.target;
    completed.classList.toggle("completed"); 
    // !!!!! NÃO ENTENDI DIREITO COMO FUNCIONA O TOGGLE !!!!!! 
};

// !!!!! NÃO ENTENDI TB PQ ESSA FUNÇÃO SÓ PERMITE MARCAR UMA POR VEZ !!!!!!

// function completed() {
//     let completed = document.querySelector(".completed");
//     let dblclick = event.target;

//     if (completed) {
//         completed.classList.remove("completed");
//     } else {
//     dblclick.classList.add("completed");
//     };
// };


// 10
let apagaTudo = document.getElementById("apaga-tudo");
apagaTudo.addEventListener("click", apagaLista);

function apagaLista() {
    taskList.innerHTML = "";
};


