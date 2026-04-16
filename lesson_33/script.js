var choice = prompt("Welcome to area Calculator. \n Please Enter Your choice. \n1.Area of rectangle. \n2.Area of Triangle \n3.Area of Circle. \n4.Area of Parallelogram");

if (choice == '1'){
    var l = prompt('Enter the Length')
    var b = prompt('Enter the breadth')
    var result = Number(l) * Number(b)
    alert('The Area is ' + result)
}
if (choice == '2'){
    var h = prompt('Enter the height')
    var b = prompt('Enter the base')
    var result = Number(h) * Number(b) / 2
    alert('The Area is' + result)
}
if (choice == '3'){
    var r = prompt('Enter the Radius')
    var result = 3.14 * Number(r) * Number(r)
    alert('The Area is' + result)
}
if (choice =='4'){
    var h = prompt('Enter the height')
    var cb = prompt('Enter the corresponding base')
    var result = Number(h) * Number(cb)
    alert('The Area is + result')
}