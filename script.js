const campoInput = document.getElementById('texto-tarefa');
const inputButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

// 5 e 6
function addTarefa() {
  inputButton.addEventListener('click', () => {
    if (campoInput.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = campoInput.value;

      taskList.appendChild(newLi);
      campoInput.value = '';
    }
  });
}
addTarefa();

// essa parte não precisava, mas add a função no enter
function addTarefaEnter() {
  campoInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && campoInput.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = campoInput.value;
      taskList.appendChild(newLi);
      campoInput.value = '';
    }
  });
}
addTarefaEnter();

// 7 e 8
function selected(event) {
  const selected = document.querySelector('.selected');
  const novaSelecao = event.target;

  if (selected) {
    selected.classList.remove('selected');
  }
  novaSelecao.classList.add('selected');
}

taskList.addEventListener('click', selected);

// função anterior que só pinta mas não muda classe e pinta todos itens que clicar
// function itemCinza() {
//     taskList.addEventListener("click", function() {
//         event.target.classList.add("selected");
//     });
// };
// itemCinza();

// 9
function completed(dblclick) {
  const completed = dblclick.target;

  if (completed.classList.contains('completed')) {
    completed.classList.remove('completed');
  } else {
    completed.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', completed);
/* // excluí a função pq não entendi como funciona o toggle
function completed(event) {
    let completed = event.target;
    completed.classList.toggle("completed");
    // !!!!! NÃO ENTENDI DIREITO COMO FUNCIONA O TOGGLE !!!!!!
};
*/

// 10
const apagaTudo = document.getElementById('apaga-tudo');

function apagaLista() {
  taskList.innerHTML = '';
}

apagaTudo.addEventListener('click', apagaLista);

// 11
const removerFinalizados = document.getElementById('remover-finalizados');

function apagaCompletos() {
  const completedTasks = document.querySelectorAll('.completed');

  // for para percorrer os itens completos, chamar o pai e excluir o filho (da vez na posição index)
  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].parentElement.removeChild(completedTasks[index]);
  }
}

removerFinalizados.addEventListener('click', apagaCompletos);

// Bônus
// 12
const salvarTarefas = document.getElementById('salvar-tarefas');

function saveTasks() {
  localStorage.setItem('tarefas', taskList.innerHTML);
}

salvarTarefas.addEventListener('click', saveTasks);

// chama a função no onload da pagina
function loadTasks() {
  const savedTasks = localStorage.getItem('tarefas');
  taskList.innerHTML = savedTasks;
}

window.onload = loadTasks;

// 14
const removerSelecionado = document.getElementById('remover-selecionado');
removerSelecionado.addEventListener('click', removeSelected);

function removeSelected() {
  const selected = document.querySelectorAll('.selected');

  // for para percorrer os itens selecionados, chamar o pai e excluir o filho (no caso, o item selecionado em si)
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].parentElement.removeChild(selected[index]);
  }
}
