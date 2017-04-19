const timeNodes = Array.from(document.querySelectorAll("[data-time]"), 
							(time) => {
								var splitTime = time.dataset.time.split(':').map(parseFloat);
								return (splitTime[0] * 60) + splitTime[1];
							});

const totalSeconds = timeNodes.reduce((total, seconds) => total + seconds);

let secondsLeft = totalSeconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;  

console.log(hours, mins, secondsLeft);