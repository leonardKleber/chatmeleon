# CHATmeleon
A chat app built with Flask and Flask-SocketIO.

This app is a software project for CHAMÄLEON Stralsund e.V., Germany. 

Besides providing an internal communication service, it can also be used to play a game, including different roles with respective profile pictures 
and role descriptions. The purpose of the game is to teach teenagers about the possible dangers of chatting with strangers on the internet.

<p align="center">
<img src="/static/images/logo.png" width="350">
</p>

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
### 4. Run the app
Run the app like the following:
```
python3 app.py
```
## Deploy the app to Heroku
### 1. Set up Heroku
Go to https://www.heroku.com/ and create a free account.

Create a new app and give it a unique name. Copy the name and paste it into a new text document.
### 2. Install Heroku CLI
Now you need to install the Heroku CLI. In Ubuntu, you do it with the following command:
```
sudo snap install --classic heroku
```
For other operating systems, follow the instructions on this page:

https://devcenter.heroku.com/articles/heroku-cli
### 3. Necessary code changes
Go to app.py and look for the following code block:
```
if __name__ == '__main__':
    socketio.run(app)
    #app.run()
```
For deployment, change it to:
```
if __name__ == '__main__':
    #socketio.run(app)
    app.run()
```
### 4. Upload the repository to Heroku
Navigate to the project directory and login to Heroku with the following command:
```
heroku login
```
Now run this command to create a remote Heroku repository:
```
heroku git:remote -a <name>
```
Replace <name> with the name of your app that you have created on Heroku before.

Now we need to push the files to Heroku with the following command:
```
git push heroku main
```
### 5. Run the app
To test if the deployment was successful, just run the link of your application. You either get it from the console after deployment or from the Heroku page for your app.
