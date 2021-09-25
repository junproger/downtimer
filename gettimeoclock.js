'use strict'
// Парсинг времени в нужный формат
let timerId;
let gotoDate;
let futureDate = 0;
let currentDate = 0;
let timeinterval = 0;
let countcontrol = 0;
const setupcountdate = '2021-09-26T21:20:32'; // Дата отсчета
timerId = setInterval(() => downcountdate(), 1000);
// Более простая функция
	function downcountdate() {
		currentDate = Date.now();
		futureDate = Date.parse(setupcountdate);
		timeinterval = futureDate - currentDate;
		gotoDate = new Date(timeinterval);
		// console.log(countcontrol + ' : ' + timeinterval);
		countcontrol += 1; // Счетчик для контроля отсчета времени
			// Условие для остановки
				if (timeinterval < 1000) { // Для работы 1000мс
					clearInterval(timerId);
					console.log(countcontrol + ' : ' + timeinterval);
					console.log(gotoDate);
					console.log('The end of count.');
					sitetimer.innerText = "It's time now!";
				}
			// Эффект мигания разделителей
				let doteslist = timeoclock.querySelectorAll('span#twodots');
				for (let i = 0; i < doteslist.length; i++) {
						 if (countcontrol % 2 !== 0) {
						 doteslist[i].style.color = "darkblue";
						 } else {
						 doteslist[i].style.color = "lightgrey";
						 }
					} 
		// Вывод времени в нужном формате
		todays.innerText = ('0' + gotoDate.getDate()).slice(-2);
		tohours.innerText = ('0' + gotoDate.getHours()).slice(-2);
		tominutes.innerText = ('0' + gotoDate.getMinutes()).slice(-2);
		toseconds.innerText = ('0' + gotoDate.getSeconds()).slice(-2);
	}