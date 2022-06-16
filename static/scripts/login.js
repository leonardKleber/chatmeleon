var form = document.getElementById('form');

form.onsubmit = function() {
    password = document.getElementById('password').value;

    document.getElementById('password').value = caesar_cipher(password, 1);

    form.submit();
};

function caesar_cipher(str, num) {
    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
        
    return result;
}