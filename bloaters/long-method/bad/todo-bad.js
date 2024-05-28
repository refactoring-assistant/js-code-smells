window.onload = function () {
  const todoForm = document.getElementById('todo-form');
  const todoList = document.getElementById('todo-list');
  const newTodoText = document.getElementById('new-todo-text');

  const todos = [];

  function handleTodoAction(event) {
    event.preventDefault();

    if (event.target === todoForm) {
      const newTodo = {
        text: newTodoText.value.trim(),
        completed: false,
      };
      todos.push(newTodo);
      newTodoText.value = '';
    }

    else if (event.target.tagName === 'BUTTON') {
      const index = event.target.dataset.index;
      const action = event.target.dataset.action;

      if (action === 'toggleComplete') {
        todos[index].completed = !todos[index].completed;
      } else if (action === 'delete') {
        todos.splice(index, 1);
      }
    }

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

  todoForm.addEventListener('submit', handleTodoAction);
  todoList.addEventListener('click', handleTodoAction);
};
