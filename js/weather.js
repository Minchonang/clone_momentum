const API_KEY = "e622abf35a7624bec331543b89007a01";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const city = document.querySelector("#weather span:first-child");
			const weather = document.querySelector("#weather span:last-child");
			

			city.innerText = `${data.name},`;
			weather.innerText = `현재 기온: ${Math.round(data.main.temp)}℃, 날씨: ${
				data.weather[0].main
			},`;
		});
}

function onGeoErr() {
	alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
