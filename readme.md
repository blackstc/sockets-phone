# Connecting Your Phone to Your App

## Background
In this tutorial we will be covering the basics of how to connect your phone to an application.  This tutorial is meant to used as a "code-along", so here is a link to the github repository we will be using.

## Setup
Fork and clone the repository linked above, this will be the starting point for creating our application. I've created a new branch for each section as we move along the course if you get lost.

After you have cloned this repository, run:
```
npm i
```

## Step 1
To get started, if we run:

```sh
$ npm start
```
In the console we should see "Express server listening on port 3000", and then if we visit localhost:3000, we'll see "Fun with Sockets".

Now that we have our project structure setup, lets start creating our socket connections.  First, let's start with the server side implementation.

#### App.js
At the bottom of app.js, let's initialize an instance of socket.io with the following code:
```javascript
var io = require('socket.io')(server);
```

Now let's create a connection between our html and our server:
```javascript
io.on('connection', function(socket){
  console.log('a user connected');
});
```

#### Main.js
Next, let's add the socket on the client side in our main.js:
```javascript
var socket = io();
```

Finally, let's restart our server and when we visit localhost:3000, we should see:
```sh
Express server listening on port 3000
a user connected
```

And if you try refreshing the page or visiting localhost:3000 on multiple tabs, you'll notice the server will log that "a user connecter" for each new connection.


## Step 2
Let's create a controller html that will be used specifically for our phones.  Start by adding and "controller.html" file to the client directory and a "controller.js" file to the "js" directory.  All we really need in the controller.html, besides the standard boilerplate, is a button to test the connection.  Our controller.html should look like this:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Phone Socket</title>
    </head>
    <body>
        <button type="button" name="button">Check Socket</button>
    </body>
    <script type="text/javascript" src="./js/controller.js"></script>
</html>
```
