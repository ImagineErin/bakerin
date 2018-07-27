# bakerin
Description
To run my project, clone or download and open a browser on index.html

Bakerin Kitchen is only in its very beginning stages right now. It is going to be a company page for a baking and catering company. The complete version will have products available to order online, a functioning contact page, and will be hosted at bakerin.com. Overall, once complete, this will be the hub for showcasing products, ordering online, and contacting about catering. I look forward to making many improvements to this site in the future!

Custom CSS Classes
The classes I created are:

1. "nav" sets the width and height, ".navbar-brand" sets the font size and the margin, and ".navbar-nav a" spaces the navigation options apart with padding, increases the font size and changes the color to white.
2. ".carousel" is the class I used to style the photo carousel. I only have "auto" in there now, but plan to set it at size that will allow the content below to show without scrolling. Definitely more styling to be done here, but the class is here and ready at least.
3. "form" and ".contact-form" are used to style the contact form on the contact.html page. I currently have it setting the margins, text alignment and display...there is more to be added later, for sure.

Custom JavaScript Functions
The javascript function I created is:

1. $( window ).resize(function() {
  var brand = document.getElementById("brand-name")
  if ($(window).width() <= 800){
    brand.innerHTML = "Bakerin";
    console.log("I have resized to 800 or below");
	}
  if ($(window).width() >= 801){
    brand.innerHTML = "Bakerin Kitchen";
    console.log("I have resized to 801 or above")
	}
})

This function will shorten the name to "Bakerin" in screens 800 pixels or less, but show the full name "Bakerin Kitchen" on screens 801 pixels or larger. It will also log "I have resized to 800 or below" to the console whenever a screen 800 pixels or below views the site, and same for 801 and above.

I used Bootstrap to make the site work in many different screen sizes and devices.
