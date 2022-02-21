# HW5-Day-Planner
Welcome to my Day Planner!

My Objectives:
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

I started with coping over the provided code then adding four time blocks to the HTML so that I could work on adding the JS. Moment.js had already been linked so I created an assets folder with my CSS and JS and added my clock display to the JS using the jQuery format.

After reading about the columns for jQuery I decided to use two of the twelve columns for my hour display and my save button, using the other 10 for the description. I set each time block ID to the military hour corresponding to the hour of day showing up in my hour display.

I used the ‘click’ option on jQuery to set up my save button to grab my description input in each time block section and save it to local storage. Next, I created a section in JS to individually grab my items and set them up to be looped in a function. This made it so that the info saved in my local storage would display even when I refreshed the page.

From there I created the currentTime function to grab the present time of the user using moment.js. Because moment.js uses military time I could us the military time values to create an “if, else if” function that used my past, present, and future classes already in CSS from bootstrap.
