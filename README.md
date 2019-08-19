# Colleen Treks EBC
Capstone project for WATS 4030

# 2019-07-22
Decided on a bootstrap blog theme and populated the pages with links on the nav bar to be able to move around the page.
Need to add JS to the image gallery as well as my own personal images. (use mouseover/click template from Day at Beach final project)
Need to work on API call in the blog entry so that it reflects the city and/or country in which the entry takes place. (Seattle, Vancouver, Kathmandu, Guangzhou, etc.) - See weather data project from 4010
Figure out how to add Google Map API to blog entries
Add currency API

# 2019-07-23
Received feedback from Becky on the project as well as some useful links on how to incorporate Vue & Bootstrap. Currently trying to figure out how to create a Vue app within a div element on a blog page. Also, want to explore how to use a map as my navigation. Might have to use static images and show my route there as the preview image. May consider removing preview images from blog home page. Not 100% sold on Bootstrap theme. Possible I may change and use a better template. Not sure if I have time to create from base on up. Though this project will be a continuing process as I do need to get these pictures & entries up for sharing with family & friends! 

# 2019-07-24
0804h 
Trying to push images to GitHub. Some were too big. Deleted movies out of folder & re-pushed. Waiting to see if this will work. Researched old projects (refactoring & caching) to see how to use lists & weather app. Lists for the gear page. Weather for all the pages. 

# 2019-07-28
1432h 
Got a little ahead of myself and decided to pretty much destroy the original Bootstrap setup & go with a Vue.js situation as I wanted to be able to get the weather data involved. I also found a way to create a map of my trek with Google Maps and will just need to get that imbedded into the page once I have the basics set up. Fingers crossed I know what I'm doing here ... 

# 2019-08-03
0833h
STARTING OVER. Oy vey ... It was a disaster and I am starting over. Thank you Becky for your guidance. Seriously, if it wasn't for her, I doubt I would've been able to progress past CSS. 

So now I've created a new Vue app and managed to get a few things going. I've been reviewing our materials from last quarter as a refresher and it's helped. The challenge for me is that I'm trying to do all the things and not focusing on the important parts of what's required to pass. For those of you in the future reading this: JUST FOCUS ON THE REQUIREMENTS. WORRY ABOUT THE PRETTY LATER. Translation: DON'T DO WHAT I'VE DONE.  

1038h
I have managed to get a picture up & put two independent vue pages on there. I've made progress for the layout. But now comes the hard part. Populating the blog entries & getting the API linked up with the cities so a reader doesn't have to enter in all the information. Also want to add the map of my trek and need Google Analytics. Other than that, not bad progress for the last few hours. (oh and the jackhammering outside was no help ...)

1624h
I think I need to quit for the day. Things are getting a bit out of control. What I need to do:
-Set up blog template to include text and weather
-Figure out how to have the weather API call out to the cities named in the blog entry
-Organize all the components
-Create a JSON file with all the text & weather info

Things I did:
-Create a blog template of sorts
-Find all the individual city IDs for the cities on the trek
-Copied the JSON data from Postman to text files for reference when creating weather data calls from the API
-Added an API.js
-Discovered I don't know how to do router links
-Made good enough progress to walk away today

# 2019-08-04
1042h
I was awake at 0300h thinking about how to do the API call in my blog posts. So I decided to research how this would be possible. Fortunately for me, most of the cities I want to use for my call outs are very individualized so I could create an ID for each one. And as I would be repeating them in some of the posts it would be easier to have them in one spot. So I researched the city IDs, got them, created a text file of them, and got to work on making the router links work. They were not working. Then I discovered I had some kind of caching problem. Which then took me about 1.5hrs to troubleshoot but I got it to work. It looks like I was missing an install command of sorts with `npm`. Once I got that to load, I was able to drop in some Bootstrap templates & format the 3 pages I wanted. The images and blog entries still have placeholders - I want to create a blog post template of sorts so that I can quickly populate the API call & show the weather in the cities of the corresponding trek days. That will be my next major thing to do. Hopefully I can create a plan of attack with Becky's guidance on T-uesday if I can't figure something out today or tomorrow.

Things I did - 
-Debug and figure out what I did wrong on the caching side of things
-Did not destroy this project & start over as I briefly considered
-Managed to work through the construction noise outside
-Dropped in Bootstrap and made it look very pretty for now

Things I need to: 
-Create individual API calls for my blog posts
-Create a template blog post for continued population
-Decide on what images to use for my gallery
-Format the images for web view

Optional:
-Edit the videos I took on my camera and load to a YouTube channel
    *There is a lot of me woohooing on these videos as well as wind noise

# 2019-08-06
01959h
Spent all lab working on coding out & getting some progress made on the blog and how to hand off the data. Can't seem to find a way to make the buttons click & take me to the next section. Becky helped with getting the props set up but still have a ways to go. 

#2019-08-15
1822h
Took some time off and well, I think I'm paying for it. Becky was kind enough to help review some of my code & see what we needed to do. This has helped alleviate some of the anxiety. Now the hard part is drafting the blog entries and getting the buttons to work as well as the weather call outs. 

#2019-08-18
1833h
API is not working and it's probably because I am not calling it out properly. I am doing a review of props & components as Becky suggested that I make the weather part of this as a component. I think this will work. One thing that I'm thinking I might do as a last resort is create a weather component that allows the reader to type in the name of the city and crib the code from a previous assignment. This might be a good thing as it would engage the reader a little more with the blog post. I'm going to explore this further and see if this would be a viable option. Given that I have only two weeks to make this work, I want to be able to have some kind of deliverable that fulfills all the requirements. 

Also, I added Google Analytics to my website so that I can start tracking that information. And as for accessability, I don't want to get too fancy with the colors and such as I want it to be easy to read and simple. I like the font I'm using but still need to run some tests to see if it works well or if I should consider using Arial or maybe even a serif font like Times New Roman. That will need to be done this week. 
    
 
