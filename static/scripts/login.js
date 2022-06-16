var form = document.getElementById('form');

form.onsubmit = function() {
    password = document.getElementById('password').value;

    document.getElementById('password').value = caesar_cipher(password, 1);

    form.submit();
};

function caesar_cipher(string, shift) {
    var result = '';
    var charcode = 0;

    for (var i = 0; i < string.length; i++) {
        charcode = (string[i].charCodeAt()) + shift;
        result += String.fromCharCode(charcode);
    }
        
    return result;
}