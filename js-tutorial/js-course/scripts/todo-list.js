const todoList = [
    {task: 'dinner',
    date: '2021-09-01'},
    {task: 'lunch',
    date: '2021-09-02'},
];
const task = document.querySelector('.todo-input').value;
const date = document.querySelector('.date-input').value;

// render the todo list
renderTodoList();
function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const {task, date} = todoObject;
        const html = `
                <div class="todo-list-item mb-16">
                <div class="mr-24">${task}</div>
                <div class="mr-24">${date}</div>
                <button class="delete-button" onclick="
                    todoList.splice(${i},1);
                    renderTodoList();"
                >Delete</button>
                </div>`;
        todoListHTML += html;
        // console.log(todoListHTML);
        document.querySelector('.todo-list').innerHTML = todoListHTML;
    }
}


function addTodo() {
    // get the task and date from the input fields
    const task = document.querySelector('.todo-input').value;
    const date = document.querySelector('.date-input').value;
    todoList.push([task, date]);

    // render the updated todo list
    renderTodoList();
}
