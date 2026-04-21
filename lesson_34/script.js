function palindrome(mystring){
    var input = mystring.replace(/[^a-zA-z0-9]/g, '').toLowerCase();
    var reversed = input.split('').reverse().join('');

    if (input === reversed){
        document.write ("<div>"+mystring+" is a palindrome</div>")
    }
    else{
        document.write ("<div>"+mystring+" is not a palindrome</div>")
    }
}
palindrome("madam")