let startTimer = document.getElementById("timer");
let timer = Number(startTimer.textContent);
let interval = setInterval(() => {timer--; 
    startTimer.textContent = timer;
    console.log(timer);
    if(timer === 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
    }
}, 1000);

