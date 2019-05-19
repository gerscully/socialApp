# Assignment 2 - ReactJS App & API.

Name: Ger Scully

## Overview.
Hook my Social App from assignment 1 to Mongodb and apply full API functionality - GET, PUSH, POST and DELETE.


 . . . . . List of user features (excluding user registration and authentication) . . . . 
 
 + API functionality - GET, PUSH, POST and DELETE.
 + Parameterised API URLs


## Installation requirements.

Use git to clone https://github.com/gerscully/socialApp.git to your file system
Open the terminal window in the socialapp folder. 
Split the terminal window and in the second window, change directory to the api folder in social app. 
Type 'npm start' in both terminal windows to start the database (api folder) and the React app (socialapp folder).
A browser window will open and the app will load at URL http://localhost:3000/

## Data Model Design.

![][model]

## App Component Design.

![][Storybook]


## UI Design.

![][Screenshot_Welcome]
![][Screenshot_Upcoming]
![][Screenshot_Past]

## Routing.
 
+ /upcoming - filters the event array by evtStatus and displays only the upcoming events. Includes a form to add new events.
+ /past - filters the event array by evtStatus and displays only the past events.
+ / - the 'home' screen (app component)


# Web API Endpoint Reference
The web API contains a list of Sports & Social events with title, description, type and status

## Web API Install and Operation

The script below starts the Node server: 
"start": "nodemon --ignore socialApp/* --exec babel-node index.js"

## API Design

![][API_Routing]

| http://localhost:8080/api/events |
| -- | -- |
| **GET** /api/events |return a list of events |
| **POST** /api/events |add a new event |
| **PUT** /api/events/{id} | update an event |
| **DELETE** /api/contacts/{id} | delete an event |

## API Configuration
~~~bash
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb://localhost:27017/events_db
seedDb=true
~~~

## Security and Authentication
None

## Testing
All testing was done using Postman and troubleshooting done using network references in Developer Tools

## Extra features

Currently, the only 'features' are the filtering of the array to split the events into upcoming and past views, the use of toggle and card for a better display and similarly, only showing the edit form in the card-body once the edit button has been pressed.

## Independent learning.

Researched some of the functions of lodash in order for the filter to work. 
I also researched (and had working) how to get the array from the API in the Index(App) and pass it to the children (Upcoming and Past) as 'render props' rather than component in the routing. In the end, I didn't need it, so I commented it out, but felt it was a worthwhile lesson as I can see future uses for passing props through the routes. Other items researched were for styling - Bootstrap and CSS.



[model]: ./data.jpg
[image3]: ./screen.png
[stories]: ./storybook.png
[image4]: ./testing.png
[API_Routing}: ./API_Routing.png