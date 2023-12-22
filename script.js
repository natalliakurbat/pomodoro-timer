const timer = document.getElementById('pomodoro-time');
const button = document.getElementById('start');
let timerText = timer.textContent; //достаем из его текст
let time = timerText.split(":"); //разделяем строку при помощи разделителя ":"
let min = time[0]; //задаем минут из массива
let sec = time[1]; //задаем секунды из массива
let timerId = 0;

button.addEventListener('click', getClick); //добавляем обработчик клик по кнопке миши

function getClick() {
    if (button.textContent == "stop") { // когда на кнопке будет стоп 
        clearInterval(timerId); //приостанавливаем таймер 
        button.textContent = "start"; //меняем текст кнопки "stop"на "start"

    } else { // начало таймера 
        sec = 60; //счет секунд начинаем с 60
        min = min - 1; //минуту уменьшаем на один 
        timerId = setInterval(() => { // повторяем действие уменьшения сикунд от 60 до 0
            sec--;

            if (sec == '00') { // при достижении секунды нуля 
                sec = 60; //секунды возращаем на старт отсчета
                min--; // еще уменьшаем минуту на один 
                if (min < 10) {
                    min = '0' + min;
                }
            }
            if (sec < 10) {
                sec = '0' + sec;
            }
            if (min <= 0) { //когда минуты дойдут до нуля возращаем на старт отсчета 25:00
                clearInterval(timerId);
                min = 25;
                sec = '00';
                button.textContent = 'start'; //текст меняется на 'start'
            }

            let timerElements = `${min}:${sec}`; //собараем в минуты и секунда в новую переменную
            timer.innerHTML = timerElements; // изменяем timer на timerElements
        }, 25); // скорость уменьшения секунд
        if (min < 10) { //в случае повторного возобновления таймера и если мин < 10 добавлялся нолик впереде мин
            min = '0' + min;
        }
        button.textContent = 'stop'; //когда начали на старт текст поменяли на стоп 
    }
};