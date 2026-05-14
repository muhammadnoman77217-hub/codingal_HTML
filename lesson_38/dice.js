var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
var stopped = true;
var t;
var diceElement;
var statusText;

function change() {
    var random = Math.floor(Math.random() * 6);
    diceElement.innerHTML = dices[random];
}

function startStop() {
    if (stopped) {
        stopped = false;
        t = setInterval(change, 100);
        diceElement.classList.add('rolling');
        statusText.innerText = "Rolling...";
    } else {
        clearInterval(t);
        stopped = true;
        diceElement.classList.remove()
    }
}