const clock = document.getElementById("clock");
let hour, hours, afterHour, minute, minutes;

function time(event) {
	const date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let afterHour = String(hour - 12).padStart(2, "0");
	let hours = String(hour).padStart(2, "0");
	let minutes = String(minute).padStart(2, "0");

	if (hour > 12) {
		clock.innerText = `PM ${afterHour} : ${minutes}`;
	} else if (hour < 12) {
		clock.innerText = `AM ${hours} : ${minutes}`;
	} else if ((hour = 12)) {
		clock.innerText = `PM ${hours} : ${minutes}`;
	}
}

time();
setInterval(time, 500);
