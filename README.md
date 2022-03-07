
# HERMES
A React app to set visual countdowns for your next big event.

 ![Login Screen](/client/src/images/screenshot.png)

### live site (https://flamboyant-carson-d9c178.netlify.app/)

# Table of Contents
1. [About](#whatitdoes)
2. [Tools, API's, and more](#tools)
3. [Setup](#setup)
4. [How it works](#howit)
5. [What I learned](#learned)
6. [What's to come?](#whattocome)

## About <a name="whatitdoes"></a>
Up until the point of making this app, I had been working on long projects that demanded large amounts learning and time. I wanted to make something simple but new for me.
While making this, I found a lot of the bigger projects I've worked on to have improved my knowledge on React, Sass, and other ideas. This kind of project was once trivial to do
but I found it to be fairly simple this time around.

## Tools, API's, and more <a name="tools"></a>
Nothing to fancy. Mainly just SASS and React. A big part of the app was using the Javascript Date API but I'll get into that later.

## Setup <a name="setup"></a>
If you want to run the project yourself, clone the repository, go into client folder and run 
<code>npm install</code> and then <code>npm start</code>


## How it works <a name="howit"></a>
THe main goal of the app is to take an entered date and time and begin to visually countdown. 

*App.js*
This class component holds the countdown dates to be displayed and holds the addCountdown function which is passed to its child component AddCountdown for inputing dates.

*AddCountdown.js*
This functional component is responsible for displaying the input form when clicked, reading data entered, and passing up state to App.js for a countdown to be displayed.

*CountdownBox.js
Each box is a component responsible for displaying a certain unit of time. A calculation is done to see what value it should display and then sets it's render accordingly.

Dates are entered with the datetime input type. This was new for me and digging through the Date API documentation helped to parse each entered date to ensure it wasn't an
already past date or a simply empty input field. Both cases result in a countdown not being displayed.

## What I learned <a name="learned"></a>
- JavaScript Date API
- Better file structure
- Using componens more effectively in React

## What's to come <a name="whattocome"></a>
- Making the countdownBoxes come from the same component to save on state changes and variable population.
- Deleting countdowns
- Options to display only certain units of time
- Event for when clock hits 0
