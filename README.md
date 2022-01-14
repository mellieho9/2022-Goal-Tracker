# 2022-Goal-Tracker
A web application that displays and tracks your goals, which are collected using a Discord API
# Background
This web application is a project I am developing while following the Web Development track of Major Hacking League's Local Hack Day: Build. This website connects to your Discord account to display messages you and your friends tagged as "goals" in your server.
# Intended Features
1. A search bar to filter out goals set to you, a certain date, or for a particular purpose
2. Connection to Discord to collect goals and display only the goals specific to you or the people inside one server you are in
3. Real-time update of your goal progress
# Prototype
![Main page](https://user-images.githubusercontent.com/85920674/148872061-15d74686-8cbf-42d2-90cd-c9e668485662.png)
# Progress
- Created Google Sheet containing data to be displayed on the website
- Connected that Google Sheet with 'api.js' file
- Created a bot using Discord Developer portal and added two functions: '!add-goal' and '!my-goals' to add and show user's goals, respectively. 
- Created a html file and connected the file with the api file by creating a new function 'populateGoal' and fetch API
<img width="262" alt="Screen Shot 2022-01-14 at 13 52 49" src="https://user-images.githubusercontent.com/85920674/149569920-b7b878c2-b1a2-4627-9a15-795a1036836d.png">
# License
[MIT](https://choosealicense.com/licenses/MIT/)
