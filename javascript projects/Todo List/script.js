const tdInput = document.querySelector('#input-todo');
const addBtn = document.querySelector('#addBtn');
const tdList = document.querySelector('#todo-list');

addBtn.addEventListener("click", addTodo);
tdList.addEventListener("click", removeItem);

function addTodo(){
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo-list')

    const newToDo = document.createElement('li');
    newToDo.innerText = tdInput.value;
    newToDo.classList.add('todo-item');
    toDoDiv.appendChild(newToDo);

    const trshBtn = document.createElement('button');
    trshBtn.innerText = 'Trash';
    trshBtn.classList.add('trashBtn');
    toDoDiv.appendChild(trshBtn);

    tdList.appendChild(toDoDiv);
}

function removeItem(e) {
    console.log(e.target);
    const item = e.target;

    if(item.classList[0] === "trashBtn") {
        const todo = item.parentElement;
        todo.remove();
    }
}

