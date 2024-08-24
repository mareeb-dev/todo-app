var input = document.querySelector("#task")
var list = document.querySelector("#list")
var todo = [];

function renderTodo() {
    list.innerHTML = ""
    for (var i = 0; i < todo.length; i++) {
        list.innerHTML +=
            `<li>${todo[i]}</li>
        <button onclick="editTodo(${i})" class="button1">Edit</button>
        <button onclick="deleteTodo(${i})" class="button1">Delete</button>`

    }
}
function addTodo() {
    todo.push(input.value);
    console.log(todo);

    renderTodo()
    input.value = ""
}

function deleteTodo(i) {
    console.log("Todo deleted", i);
    todo.splice(i, 1);
    console.log(todo);

    renderTodo()
}

function editTodo(i) {
    var updatedTodo = prompt("Edit your Todo");
    // console.log(updatedTodo)
    todo.splice(i, 1, updatedTodo)

    renderTodo()
}