const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE2 = document.querySelector('.circle2');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;




function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;
   
    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
  }

function theFunction(e) {
    var c = CIRCLE2.getBoundingClientRect();
    var iks = Math.round(e.clientX);                                
    var ygrik = Math.round(e.clientY);
    let circleX = Math.round(c.left + 26);
    let circleY = Math.round(c.top + 26);

    let hypotenuse = Math.round(Math.sqrt(Math.abs(circleX - iks)**2 + Math.abs(circleY - ygrik)**2))


console.log("гипотенуза = " + hypotenuse + "\n")

    if (hypotenuse <= 40) {
        if (circleX > iks) {
            var newCenterX = circleX + 1;
            var newCenterY = Math.round( ((newCenterX - circleX)* (ygrik-circleY) / (iks - circleX))  + circleY);
            var newX = newCenterX - 26;
            var newY = newCenterY - 26;
            } else {
                var newCenterX = circleX - 1;
                var newCenterY = Math.round( ((newCenterX - circleX)* (ygrik-circleY) / (iks - circleX))  + circleY);
                var newX = newCenterX - 26;
                var newY = newCenterY - 26;
            }

            console.log("newX = " + newX + "\n" + "newY = " + newY + "\n\n")
       
        CIRCLE2.style.top = newY + 'px';
        CIRCLE2.style.left = newX + 'px';
   
    }

    
}


function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

// When the mouse moves,run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);
AREA.addEventListener('mousemove', theFunction, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
