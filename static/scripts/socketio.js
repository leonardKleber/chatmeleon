var socket = io();

socket.on('connect', function() {
    socket.emit('initial_connection', this_username);

    document.getElementById('message_input_form').onsubmit = function (e) {
        e.preventDefault();

        var message_input = document.getElementById('message_input');
        var msg = message_input.value;

        if (msg != '') {
            socket.emit('user_message', {'username': this_username, 'message': msg});

            message_input.value = '';
            message_input.focus();
        }
    }
});

socket.on('initial_connection', function(username) {
    console.log('user' + username + ' has connected to the server');

    var msg_div = document.createElement('div');
    msg_div.innerHTML = `<div class="join_announcement"><b>${username}</b> has joined the room</div>`;
    document.getElementById('messages').append(msg_div);

    var new_user = document.createElement('div')
    new_user.innerHTML = `<div class="member"><div class="member_name"><div>${username}</div></div></div>`
    document.getElementById('member_list').appendChild(new_user);
});

socket.on('user_message', function(data) {
    console.log('user' + data.username + ': ' + data.message);

    var msg_div = document.createElement('div');

    if (data.username == this_username) {
        msg_div.innerHTML = `<div class="own_message"><div><b>${data.username}</b></div><div>${data.message}</div></div>`;
    } else {
        msg_div.innerHTML = `<div class="other_message"><div><b>${data.username}</b></div><div>${data.message}</div></div>`;
    }

    document.getElementById('messages').append(msg_div);
});
