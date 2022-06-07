from flask import Flask, render_template, request, redirect, url_for
from flask_socketio import SocketIO, emit


APP_PASSWORD = 'chat1223'


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

    if password != APP_PASSWORD:
        return redirect(url_for('index'))

    if username and password:
        return render_template('chat.html', user=username)
    else:
        return redirect(url_for('index'))


@socketio.on('initial_connection')
def handle_initial_connection(username):
    print('user' + username + ' has connected to the server')
    emit('initial_connection', username, broadcast=True)


@socketio.on('user_message')
def handle_user_message(data):
    print('user' + data['username'] + ': ' + data['message'])
    emit('user_message', data, broadcast=True)


if __name__ == '__main__':
    socketio.run(app)
    #app.run()
