const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoListUl = document.getElementById("list");

let todoArray = [];
const TODOARRAY = "todoArray";

function saveTodo(event) {
	localStorage.setItem(TODOARRAY, JSON.stringify(todoArray));
}

function deleteTodo(event) {
	const deleteList = event.target.parentElement;
	deleteList.remove();
	todoArray = todoArray.filter((item) => item.id !== parseInt(deleteList.id));
	saveTodo();
}

function paintTodo(todoValue) {
	const list = document.createElement("li");
	list.id = todoValue.id;

	const span = document.createElement("span");

	span.innerText = `${todoValue.todo} `;

	const button = document.createElement("button");

	button.innerText = "❌";
	button.addEventListener("click", deleteTodo);

	list.className = "list_css";
	list.appendChild(span);
	list.appendChild(button);
	todoListUl.appendChild(list);
}

function todoAction(event) {
	event.preventDefault();

	const todoValue = todoInput.value;
	todoInput.value = "";

	const todoObj = {
		id: Date.now(),
		todo: todoValue,
	};

	todoArray.push(todoObj);
	paintTodo(todoObj);
	saveTodo();
}

todoForm.addEventListener("submit", todoAction);

const savedTodo = localStorage.getItem(TODOARRAY);

if (savedTodo !== null) {
	const parsedTodo = JSON.parse(savedTodo);
	todoArray = parsedTodo;
	parsedTodo.forEach(paintTodo);
}
