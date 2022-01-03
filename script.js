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

// função anterior que só pinta mas não muda classe e pinta todos itens que clicar
// function itemCinza() {
//     taskList.addEventListener("click", function() {
//         event.target.classList.add("selected");
//     });
// };
// itemCinza();

// 9
taskList.addEventListener("dblclick", completed);

function completed(dblclick) {
    let completed = dblclick.target;

    if (completed.classList.contains("completed")) {
        completed.classList.remove("completed");
    } else {
        completed.classList.add("completed");
    };
};

/* // excluí a função pq não entendi como funciona o toggle
function completed(event) {
    let completed = event.target;
    completed.classList.toggle("completed"); 
    // !!!!! NÃO ENTENDI DIREITO COMO FUNCIONA O TOGGLE !!!!!! 
};
*/

// 10
let apagaTudo = document.getElementById("apaga-tudo");
apagaTudo.addEventListener("click", apagaLista);

function apagaLista() {
    taskList.innerHTML = "";
};

// 11
let removerFinalizados = document.getElementById("remover-finalizados");
removerFinalizados.addEventListener("click", apagaCompletos);

function apagaCompletos() {
    let completedTasks = document.querySelectorAll(".completed");
    
    // for para percorrer os itens completos, chamar o pai e excluir o filho (da vez na posição index)
    for (let index = 0; index < completedTasks.length; index += 1) {
        completedTasks[index].parentElement.removeChild(completedTasks[index]);
    };
};

//Bônus
// 12
// salva a tarefa no localStorage mas não carrega as info quando a página é recarregada
let salvarTarefas = document.getElementById("salvar-tarefas");
salvarTarefas.addEventListener("click", saveTasks);

function saveTasks() {
    localStorage.setItem("tarefas", taskList.innerHTML);
};

// 14
let removerSelecionado = document.getElementById("remover-selecionado");
removerSelecionado.addEventListener("click", removeSelected);

function removeSelected() {
    let selected = document.querySelectorAll(".selected");
    
    // for para percorrer os itens selecionados, chamar o pai e excluir o filho (no caso, o item selecionado em si)
    for (let index = 0; index < selected.length; index += 1) {
        selected[index].parentElement.removeChild(selected[index]);
    };
};