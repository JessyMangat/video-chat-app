# Video Chat App

Video chat app built with React and OpenTok. 

This a simple video chat app that allows users to communicate via video, audio, and screenshare. 

## Getting Started

For the sake of time this app is strictly front end with React. It uses a static token obtained directly from tokbox. All visitors of the site will be placed into the same chat room. 

The next step of development is to use express to generate tokens via the tokbok API. This give site visitors the option to create a room, or join an existing one. 

Once that has been implemented, features like text chat and whiteboard would be added. 

This entire app is a work in progress so feel free to check back periodically. 

### Additional Info

To get started create an account at: https://tokbox.com/account/user/signup

Once your account is made, create a project and obtain the following:

    Api Key
    Session Id
    Token

Create a file called .env.local with the same format as example.env

Fill in the variable with the info you obtained above. 

Run npm install to install dependencies. 

Use npm start to run the app in your local host. 