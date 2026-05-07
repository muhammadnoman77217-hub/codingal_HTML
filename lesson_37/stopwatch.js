window.onload = function () {
    let seconds = 0;
    let milliseconds = 0;
    let interval;

    const appendMilliseconds = document.getElementById("milliseconds");
    const appendSeconds = document.getElementById("seconds");
    const buttonStart = document.getElementById("button-start");
    const buttonStop = document.getElementById("button-stop");
    const buttonReset = document.getElementById("button-reset");

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick = function() {
        clearInterval(interval);
    };

    buttonReset.onclick = function() {
        clearInterval(interval);
        milliseconds = 0;
        seconds = 0;
        appendMilliseconds.innerHTML = "00";
        appendSeconds.innerHTML = "00";
    };

    function startTimer() {
        milliseconds++;

        if (milliseconds <= 9) {
            appendMilliseconds.innerHTML = "0" + milliseconds;
        } else if (milliseconds <= 99) {
            appendMilliseconds.innerHTML = milliseconds;
        } else {
            seconds++;
            appendSeconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;
            milliseconds = 0;
            appendMilliseconds.innerHTML = "00";
        }
    }
}