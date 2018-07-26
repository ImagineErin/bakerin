# bakerin
Description
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











Requirements:
The below items are the requirements for your personal project for Code Louisville. Projects are graded on a pass/fail system, thus every required bullet must be met in order for your project to pass. You should discuss your project/plan with mentors in advance to verify that it will meet the requirements, but also to make sure you don't try and tackle too large of a project for this class. The requirements are:

Your project is responsive to different devices and/or browser sizes and improves the user experience in some way based on what type of device the project is viewed from
Your project includes at least 3 custom CSS class and/or ID selectors which are applied to your HTML elements
Your project includes custom JavaScript including at least one JavaScript function
Your code has some comments noting major portions of your code
Your project code is on your GitHub account in its own repository
It must include a README file located at the top level directory of your project that includes a description of your project and - if necessary - any special instructions to run/view your project
You are highly encouraged to include a front-end framework such as AJAX, jQuery, or Angular in your project as a demonstration of your ability to utilize these. However, this is not a requirement of a passing project.
You are also highly encouraged to add some form of user interactivity to your project where something responds to an action the user performs. However, this is also not a requirement of passing.
Have fun! Your project should be something you're proud of and that adequately demonstrates your base knowledge in the concepts you've learned.
Clarifications and Commonly Asked Questions on the Above Requirements
Responsive Design

Your site/app should improve user experience with its responsive design, such as making the page easier to view or read, rearranging content, changing the size of content, etc. Swapping the color of your font or changing a background image is not demonstrating an improved experience and will not count.
The two most common (but not the only) methods of accomplishing responsive design are:
CSS media/device queries that will change elements on your page above or below certain screen sizes
Using a framework (such as Bootstrap) to implement responsive design
You do not have to account for all possible devices and browser sizes, just demonstrate some responsive layout principles
Adding 100% width to an image or content area will not be enough to qualify for this requirement for Code Louisville
Custom CSS

These selectors MUST be located in a separate .css file you created. It cannot be 'inline' CSS found only within your HTML elements
Using ONLY Bootstrap for your customization does not fulfill this requirement
You are highly encouraged to use a variety of CSS styles to enrich your site, 3 is just a bare minimum. Most sites will have dozens or more
Custom JavaScript

You must include some form of JavaScript written by you, and must be included in a separate .js file in your project (no inline JavaScript)
It must include at minimum 1 working JavaScript function
Using a JavaScript framework such as AJAX, Angular, or jQuery can certainly meet this requirement
Just importing/linking Bootstrap (or other frameworks) does not meet this requirement
Comments

Every line doesn’t need a comment, but major sections of your CSS, HTML, and/or JavaScript files should have some helpful comments so a reviewer can know what the major parts of your code do and more easily read it
GitHub

If you choose to host your application on a live URL, GREAT! You can share that for demonstration purposes or ease of running - and this is encouraged! But your code must still be available on GitHub for review.
Check out GitHub pages (https://pages.github.com/) for a quick way to host your site
README File

Your readme should help the reviewer understand what your project is going to be about so they know what to expect
If you require any special setup, installation, configuration, or other steps to view your project, you must include those steps in your README
