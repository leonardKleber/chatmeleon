from flask import Flask, render_template, request, redirect, url_for
from flask_socketio import SocketIO, emit


APP_PASSWORD = 'chat1223'
USER_LIST = []


app = Flask(__name__)
app.config['SECRET_KEY'] = 'chat_prototype'

socketio = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/chat')
def chat():
    username = request.args.get('username')
    password = request.args.get('password')

    if username and password == APP_PASSWORD:
        if username != 'spectator':
            USER_LIST.append(username)

        return render_template('chat.html', user=username, user_list=USER_LIST[:-1], role=username.lower())
    
    return redirect(url_for('index'))


@socketio.on('initial_connection')
def handle_initial_connection(username):
    print(username + ' has connected to the server')
    emit('initial_connection', username, broadcast=True)


@socketio.on('user_disconnection')
def handle_user_disconnection(username):
    print(username + ' has disconnected from the server')

    global USER_LIST
    new_user_list = []

    for i in USER_LIST:
        if i != username:
            new_user_list.append(i)

    USER_LIST = new_user_list

    emit('user_disconnection', {'userlist': USER_LIST, 'user': username}, broadcast=True)


@socketio.on('user_message')
def handle_user_message(data):
    print(data['username'] + ': ' + data['message'])
    emit('user_message', data, broadcast=True)


@socketio.on('clear_chat')
def handle_clear_chat(username):
    USER_LIST.clear()
    print(username + ' has cleared the chat')
    emit('clear_chat', username, broadcast=True)


if __name__ == '__main__':
    socketio.run(app)
    #app.run()
