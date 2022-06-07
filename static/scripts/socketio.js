var socket = io();

socket.on('connect', function() {
    socket.emit('initial_connection', this_username);
});

socket.on('initial_connection', function(username) {
    console.log('user' + username + ' has connected to the server');

    var msg_div = document.createElement('div');
    msg_div.innerHTML = `<b>${username} </b> has connected to the server`;
    document.getElementById('messages').append(msg_div);
});

socket.on('user_message', function(data) {
    console.log('user' + data.username + ': ' + data.message);

    var msg_div = document.createElement('div');
    msg_div.innerHTML = `<b>${data.username}:</b> ${data.message}`;
    document.getElementById('messages').append(msg_div);
});

function send_message() {
    var msg = document.getElementById('input_msg').value;
    document.getElementById('input_msg').value = '';
    socket.emit('user_message', {'username': this_username, 'message': msg});
}
