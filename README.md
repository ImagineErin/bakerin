# bakerin
Description
To run my project, clone or download and open a browser on index.html

Bakerin is only in its beginning stages right now. It is going to be a company page for a baking and catering company. The complete version will have products available to order online, a functioning contact page, and will be hosted. bakerin.com will be the name attached to this project. Overall, once complete, this will be the hub for showcasing products, ordering online, and contacting about catering.

Custom CSS Classes
The class(es) I created are:

1. "nav" sets the width and height, ".navbar-brand" sets the font size and the margin, and ".navbar-nav a" spaces the navigation options apart with padding, increases the font size and changes the color to white.
2. ".carousel" is the class I used to style the photo carousel. I only have "auto" in there now, but plan to find a pixel size that will allow the content below to show without scrolling.
3. "form" and ".contact-form" are used to style the contact form on the contact.html page.

Custom JavaScript Functions
The javascript function I created is:

1. $( window ).resize(function() {
  if ($(window).width() <= 800){
    console.log("I have resized to 800 or below")
	}
})
This function will log "I have resized to 800 or below" to the console whenever a screen 800 pixels or below views the site.

I used Bootstrap to make the site work in many different screen sizes and devices.
