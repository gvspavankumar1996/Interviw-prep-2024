document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit = document.querySelector(".todo-submit");
  const todoList = document.querySelector(".todo-list");
  let editMode = false;
  let editItem = null;

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //   console.log(event,"hello");
    const todoText = todoInput.value.trim();
    // console.log(todoText)
    if (todoText !== "") {
      if (editMode) {
        editItem.firstChild.innerHTML = todoText;
        editItem = null;
        editMode = false;
        todoSubmit.innerText = "Add Todo";
      } else {
        addTodoItem(todoText);
      }
      todoInput.value = "";
    } else {
      alert("please enter valid input");
    }
  });

  todoList.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "BUTTON") {
      console.log(target?.innerText);
      const todoItem = target.parentNode;
      if (target.innerText === `🗑️`) {
        todoItem.remove();
      } else if ("✏️") {
        editItem = todoItem;
        editMode = true;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoItem.firstChild.innerHTML;
        todoInput.focus();
      }
    }
  });

  function addTodoItem(text) {
    const todoItem = document.createElement("li");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    todoItem.innerHTML = `<span>${text}</span>`;
    editButton.innerText = ` ✏️ `;
    deleteButton.innerText = `🗑️ `;

    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
  }
});
