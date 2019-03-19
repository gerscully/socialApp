# Assignment 1 - ReactJS app.

Name: Ger Scully

## Overview.
A Sports & Social website for our company. The idea is to be able to add details of upcoming events and hold information of past events.


 . . . . . List of user features (excluding user registration and authentication) . . . . 
 
 + Add upcoming events
 + Delete events
 + Edit events (edit form only appears in edit mode)
 + Expand/Collapse event information for cleaner UI


## Installation requirements.

Use git to clone https://github.com/gerscully/socialApp.git to your file system and run the application from the socialApp root folder using 'npm start' in command prompt window

## Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][model]

## App Component Design.

A screenshot showing the component stories from Storybook  

![][Storybook]



## UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (user regeneration and login views, if implemented, can be omitted) . . . . . . . 

![][Screenshot_Welcome.JPG]
![][Screenshot_Upcoming.JPG]
![][Screenshot_Past.JPG]

## Routing.
. . . . List each route supported and state the associated view . . . . . 

+ /upcoming - filters the event array by evtStatus and displays only the upcoming events. Includes a form to add new events.
+ /past - filters the event array by evtStatus and displays only the past events.
+ / - the 'home' screen (app component)

None are protected...yet!

## Extra features

Currently, the only 'features' are the filtering of the array to split the events into upcoming and past views, the use of toggle and card for a better display and similarly, only showing the edit form in the card-body once the edit button has been pressed.

## Independent learning.

Researched some of the functions of lodash in order for the filter to work. I also researched (and had working) how to get the array from the API in the Index(App) and pass it to the children (Upcoming and Past) as 'render props' rather than component in the routing. In the end, I didn't need it, so I commented it out, but felt it was a worthwhile lesson as I can see future uses for passing props through the routes. Other items researched were for styling - Bootstrap and CSS.



[model]: ./Model.jpg
[Screenshot_Welcome]: ./Screenshot_Welcome.JPG
[Screenshot_Upcoming]: ./Screenshot_Upcoming.JPG
[Screenshot_Past]: ./Screenshot_Past.JPG
[Storybook]: ./Storybook.jpg