// shorten name for smaller screens //

$( window ).resize(function() {
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
