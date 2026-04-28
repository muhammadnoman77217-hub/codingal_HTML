var myForm = document.getElementById("myform");
var myInput = document.getElementById("task");
var myItem = document.getElementById("myitem");

myForm.addEventLister("submit", function (event) {
    event.preventDefault();
});

function createItem(inputItem) {
    var items = '<li>' + inputItems + ' <button onclick="deleteElement(this)">Delete</button></li>';
    myItem.insertAdjacentHTML("beforeend", items);
    myInput.value = ""
    myInput.focus()