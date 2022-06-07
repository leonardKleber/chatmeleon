import random

from flask import Flask, render_template
from flask_socketio import SocketIO, emit


app = Flask(__name__)
app.config['SECRET_KEY'] = 'chat_prototype'

socketio = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html', user=random.randint(1000, 9999))


@socketio.on('initial_connection')
def handle_initial_connection(username):
    print('user' + username + ' has connected to the server')
    emit('initial_connection', username, broadcast=True)


@socketio.on('user_message')
def handle_user_message(data):
    print('user' + data['username'] + ': ' + data['message'])
    emit('user_message', data, broadcast=True)


if __name__ == '__main__':
    #socketio.run(app)
    app.run()
