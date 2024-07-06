window.onload = function () {
  const todoForm = document.getElementById('todo-form');
  const todoList = document.getElementById('todo-list');
  const newTodoText = document.getElementById('new-todo-text');

  const todos = [];

  function addTodo(text) {
    const newTodo = {
      text: text.trim(),
      completed: false,
    };
    todos.push(newTodo);
    renderTodos();
  }

  function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
  }

  function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.classList.toggle('completed', todo.completed);
      li.innerHTML = `
        <span>${todo.text}</span>
        <div>
          <button data-index="${index}" data-action="toggleComplete">${
        todo.completed ? 'Undo' : 'Complete'
      }</button>
          <button data-index="${index}" data-action="delete">Delete</button>
        </div>
      `;
      todoList.appendChild(li);
    });
  }

  todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo(newTodoText.value);
    newTodoText.value = '';
  });

  todoList.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      const index = event.target.dataset.index;
      const action = event.target.dataset.action;

      if (action === 'toggleComplete') {
        toggleComplete(index);
      } else if (action === 'delete') {
        deleteTodo(index);
      }
    }
  });

  renderTodos();
};
