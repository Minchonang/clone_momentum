const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const helloUsername = document.getElementById("helloUsername");
const logoutForm = document.getElementById("logout-form");
const logoutButton = document.getElementById("logout-button");
const todoList = document.getElementById("todoList");

const HIDDEN = "hidden";
const SUBMIT = "submit";
const CLICK = "click";

function loginName(event) {
	event.preventDefault();

	const username = loginInput.value;

	loginForm.classList.add(HIDDEN);

	localStorage.setItem("account", username);

	helloUser(username);
	showTodo();
}

function helloUser(username) {
	const date = new Date();
	let hour = date.getHours();

	helloUsername.classList.remove(HIDDEN);
	helloUsername.classList.add("hello");

	if (hour > 7 && hour < 12) {
		helloUsername.innerText = `Good morning! @${username}!`;
		logout();
	} else {
		helloUsername.innerText = `Good afternoon! @${username}!`;
		logout();
	}
}

function showTodo(event) {
	todoList.classList.remove(HIDDEN);
}

function logout() {
	logoutForm.classList.remove(HIDDEN);
	logoutButton.classList.remove(HIDDEN);
	logoutButton.classList.add("logout-button_css");
}

function logoutAction(event) {
	localStorage.removeItem("account");
	todoList.classList.add(HIDDEN);
	window.location.reload();
}

const keyUser = localStorage.getItem("account");

loginForm.addEventListener(SUBMIT, loginName);
logoutButton.addEventListener(CLICK, logoutAction);

if (keyUser === null) {
	loginForm.classList.remove(HIDDEN);
	loginForm.addEventListener(SUBMIT, loginName);
	logoutButton.addEventListener(CLICK, logoutAction);
} else {
	helloUser(keyUser);
	showTodo();
	loginForm.classList.add(HIDDEN);
	logoutButton.addEventListener(CLICK, logoutAction);
}
