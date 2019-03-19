# Assignment 1 - ReactJS app.

Name: Ger Scully

## Overview.
A Sports & Social website for our company. The idea is to be able to add details of upcoming events and hold information of past events.


 . . . . . List of user features (excluding user registration and authentication) . . . . 
 
 + Add upcoming events
 + Delete events
 + Edit events
 + Expand/Collapse event information for cleaner UI


## Installation requirements.

Use git to clone https://github.com/gerscully/socialApp.git to your file system and run the application from the socialApp root folder using 'npm start' in command prompt window

## Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][Model.jpg]

## App Component Design.

A screenshot showing the component stories from Storybook  

![][Storybook.jpg]



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

. . . . . Briefly explain any non-standard features, functional or non-functional, developed for the app. This would include user registeration and authentication, improved re-rendering policies, etc . . . . . .  

## Independent learning.

. . . . . State the non-standard aspects of React (or other related technologies) that you researched and applied in this assignment . . . . .  



[model]: ./data.jpg
[image3]: ./screen.png
[stories]: ./storybook.png