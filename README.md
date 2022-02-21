# HW5-Day-Planner
Welcome to my Day Planner!

My Objectives:
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

I started with coping over the provided code. Then added a few time blocks to the HTML which I used to test my JS. Moment.js had already been linked so I created an assets folder with my CSS and JS. Then I added my clock display to the JS using the jQuery format on their home page.

![]( )

After reading about the columns for jQuery I decided to use two of the twelve columns for my hour display and my save button, using the other 10 for the description. I used fontAwesome to add the save Icon to my save button. I set each time block ID to the military hour corresponding to the hour of day showing up in my hour display.

![]( )

I used the ‘click’ option on jQuery to set up my save button to grab my description input in each time block section and save it to local storage. Next, I created a section in JS to individually grab my items and set them up to be looped in a function. This made it so that the info saved in my local storage would display even when I refreshed the page.

![]( )

From there I created the currentTime function to grab the present time of the user using moment.js. Because moment.js uses military time I could us the military time values to create an “if, else if” function that used my past, present, and future classes already in CSS from bootstrap. I used ‘each’ from jQuery to iterate over my objects, executing a function for each matched element. This got the colors showing up on my schedule block corresponding to the past, present, and future classes.

![]( )

Once my JS was working, I added the rest of my time blocks in and added more ID/objects for them in JS. 

[DeployedDayPlannerApplication](https://taylor25et.github.io/HW4-Code-Quiz/)
[DeployedDayPlannerApplication](https://taylor25et.github.io/HW4-Code-Quiz/)
