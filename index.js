// turn on stop function 
function turnOnStopLight() {
  $(this).css('background-color', 'red')
  
    // change background color of stop light to red
    $('#stopButton').on('click', turnOnStopLight)
function turnOnStopLight() {
 
  $('#stopLight').css('background-color','red');
 
    

    // changes background color of green and yellow to black
    $('#slowLight').css('background-color','black');
    $('#goLight').css('background-color','black');
  }
}    

// turn on slow function
 
  
function turnOnSlowLight() {
 $('#stopLight').css('background-color','black');
 
 
  // change background color of slow light to yellow
  $('#slowLight').css('background-color','yellow');
  // changes background color of red and green to black
  $('#goLight').css('background-color','black');
}

// turn on go function

function turnOnGoLight() {

    // change background color of go light to green
  
 $('#goLight').css('background-color','green');
    // changes background color of red and yellow to black
    $('#stopLight').css('background-color','black');
 $('#slowLight').css('background-color','black');
}

// set stop light click event
$('#stopButton').on('click','turnOnStopLight')
// set slow light click event
$('#slowButton').on('click', turnOnSlowLight)

// set go light click event
$('#goButton').on('click', turnOnGoLight)

