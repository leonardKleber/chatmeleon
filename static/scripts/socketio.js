var socket = io();

var message_counter = 0;
var scroll_counter = 0;

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

    var new_user = document.createElement('div');
    new_user.innerHTML = build_member_div(username);
    document.getElementById('member_list').appendChild(new_user);

    message_counter = message_counter + 1;
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

    message_counter = message_counter + 1;
});

function build_member_div(username) {
    if (username.toLowerCase() == "küken") {
        return `<div class="member"><img class="member_picture" src="/static/images/kueken.png" alt=""><div class="member_name"><div>${username}</div></div></div>`;
    }

    if (username.toLowerCase() == "einhorn") {
        return `<div class="member"><img class="member_picture" src="/static/images/einhorn.png" alt=""><div class="member_name"><div>${username}</div></div></div>`;
    }

    if (username.toLowerCase() == "faultier") {
        return `<div class="member"><img class="member_picture" src="/static/images/faultier.png" alt=""><div class="member_name"><div>${username}</div></div></div>`;
    }

    if (username.toLowerCase() == "känguru") {
        return `<div class="member"><img class="member_picture" src="/static/images/kaenguru.png" alt=""><div class="member_name"><div>${username}</div></div></div>`;
    }

    if (username.toLowerCase() == "krokodil") {
        return `<div class="member"><img class="member_picture" src="/static/images/krokodil.png" alt=""><div class="member_name"><div>${username}</div></div></div>`;
    }

    if (username.toLowerCase() == "schaf") {
        return `<div class="member"><img class="member_picture" src="/static/images/schaf.png" alt=""><div class="member_name"><div>${username}</div></div></div>`;
    }

    if (username.toLowerCase() == "wiesel") {
        return `<div class="member"><img class="member_picture" src="/static/images/wiesel.png" alt=""><div class="member_name"><div>${username}</div></div></div>`;
    }
    
    if (username.toLowerCase() == "zebra") {
        return `<div class="member"><img class="member_picture" src="/static/images/zebra.png" alt=""><div class="member_name"><div>${username}</div></div></div>`;
    }

    return `<div class="member"><img class="member_picture" src="/static/images/profile.png" alt=""><div class="member_name"><div>${username}</div></div></div>`;
}

function check_for_scrolling() {
    setTimeout(function() {
        if (message_counter != scroll_counter) {
            var msg_div = document.getElementById("messages");
            msg_div.scrollTop = msg_div.scrollHeight;
            scroll_counter = scroll_counter + 1;
        }
        check_for_scrolling();
    }, 1)
}

check_for_scrolling();