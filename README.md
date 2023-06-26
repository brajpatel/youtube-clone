# YouTube Clone
![preview-img1](https://github.com/brajpatel/youtube-clone/blob/main/src/preview/preview-img1.jpg)
![preview-img2](https://github.com/brajpatel/youtube-clone/blob/main/src/preview/preview-img2.jpg)
![preview-img3](https://github.com/brajpatel/youtube-clone/blob/main/src/preview/preview-img3.jpg)
![preview-img4](https://github.com/brajpatel/youtube-clone/blob/main/src/preview/preview-img4.jpg)
## Summary
This app was created using React and Firebase for The Odin Project's [JavaScript Final Project](https://www.theodinproject.com/lessons/node-path-javascript-javascript-final-project) with the aim being to replicate our favourite website as much as possible. This was quite a large project so I benefited a huge amount from planning aspects like how I would structure the user interface and which functionality I would implement and am overall very pleased with the appearance and the functionality I was able to include in the project.
## About
When the page first loads, you are met with the homepage that features a variety of videos including those that are currently popular. The sidebar can be toggled to expand and shrink by clicking the hamburger to show additional details like the different genres that can be explored on YouTube etc. While signed out, the subscriptions, library and history pages display a message to encourage the user to sign in if they want to use that feature. Clicking a sign in button will load a prompt that will allow the user to sign in with Google and renders a slighly different UI that is displayed when the user is signed in (implemented using Firebase Authentication). You can also search for videos using the search bar which will display a list of the most relevant videos according to the search input. I used the 'React Infinite Scroll Component' in the homepage and search results to show more videos when the user scrolls down to the bottom of the page. Selecting a video on either the homepage or search results will display the video along with its description, comments and other videos (this is where I would have had loaded 'related videos', however the parameter 'relatedToVideoId' is no longer going to be supported from 7th August 2023).
<br/><br/>
These are some of the challenges I faced while making this project:
- Working with 'React Router' and YouTube API to retrieve and pass video information from one page to another
- Managing state globally using 'useContext' for aspects such as the sign in functionality and displaying the user's name and profile picture
## View Project
You can check the YouTube Clone out by clicking [here](https://clone-389617.firebaseapp.com/).
