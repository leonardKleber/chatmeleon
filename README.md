# CHATmeleon
A chat app built with Flask and Flask-SocketIO.

This app is a software project for CHAMÄLEON Stralsund e.V., Germany. 

Besides providing an internal communication service, it can also be used to play a game, including different roles with respective profile pictures 
and role descriptions. The purpose of the game is to teach teenagers about the possible dangers of chatting with strangers on the internet.

## Try out the project
You can try out the app here:

*links to the app when it is deployed*

## Set up the project on your local machine
### 1. Clone the project
Clone the project to your machine. Make sure Python3 and pip are already installed on your system.
### 2. Create a virtual environment
Install the virtual environment tool with the following command:
```
pip3 install virtualenv
```
Navigate into the project folder and create a virtual environment like the following:
```
virtualenv <name>
```
Activate the virtual environment with the following command:
```
. <name>/bin/activate
```
When you are done working, deactivate it like the following:
```
deactivate
```
### 3. Install requirements
Install all requirements with the following command:
```
pip3 install -r requirements.txt
```
### 4. Necessary code changes
Go to app.py and look for the following code block:
```
if __name__ == '__main__':
    #socketio.run(app)
    app.run()
```
If you just want to test the app on your computer, change it to:
```
if __name__ == '__main__':
    socketio.run(app)
    #app.run()
```
If you want to deploy the code, leave it as it is.
### 5. Run the app
Run the app like the following:
```
python3 app.py
```
