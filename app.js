$(document).ready(function(){
  //sets variable for ease of reference when appending
  $el = $('#container').children().last();

  //appends 4 buttons each with a diferent color, id and color data
  $('#container').append('<div class="red"></div>');
  $el.append('<button id="red"></button>');
  $('#container > .red').data('color', 'red');

  $('#container').append('<div class="yellow"></div>');
  $el.append('<button id="yellow"></button>');
  $('#container > .yellow').data('color', 'yellow');

  $('#container').append('<div class="blue"></div>');
  $el.append('<button id="blue"></button>');
  $('#container > .blue').data('color', 'blue');

  $('#container').append('<div class="green"></div>');
  $el.append('<button id="green"></button>');
  $('#container > .green').data('color', 'green');

  //sets the first random color and appends it to the dom so the user
  //can see what color to click
  var initialColor = pickColor();
  $('#color-namer').append('<p>Please click on '+ initialColor + '.</p>');

    //red button
    $('#container').on('click', '.red', function(){
      //checks to see if this button was the one that the game is
      //asking to be clicked
      if (initialColor == $(this).data('color') ){
        //if it was the button to be clicked, randomly finds another
        //button and replaces the change in the dom
        initialColor = pickColor();
        $('#color-namer > p').replaceWith('<p>The new color to click is ' +
        initialColor + '.</p>');
      } else {
        //corrects the user on a misclick
        $('#color-namer > p').replaceWith('<p>Nope! Click ' +
        initialColor + '.</p>');
      }
    });

    //yellow button
    $('#container').on('click', '.yellow', function(){
      if (initialColor == $(this).data('color') ){
        initialColor = pickColor();
        $('#color-namer > p').replaceWith('<p>The new color to click is ' + initialColor + '.</p>');
      } else {
        $('#color-namer > p').replaceWith('<p>Nope! Click ' +
        initialColor + '.</p>');
      }
    });

    //green button
    $('#container').on('click', '.green', function(){
      if (initialColor == $(this).data('color') ){
        initialColor = pickColor();
        $('#color-namer > p').replaceWith('<p>The new color to click is ' + initialColor + '.</p>');
      } else {
        $('#color-namer > p').replaceWith('<p>Nope! Click ' +
        initialColor + '.</p>');
      }
    });

    //blue buton
    $('#container').on('click', '.blue', function(){
      if (initialColor == $(this).data('color') ){
        initialColor = pickColor();
        $('#color-namer > p').replaceWith('<p>The new color to click is ' + initialColor + '.</p>');
      } else {
        $('#color-namer > p').replaceWith('<p>Nope! Click ' +
        initialColor + '.</p>');
      }
    });

  //chooses random number between 1 and 4
  function randomNum(){
    return Math.floor(Math.random() * (1 + 4 - 1) + 1);
  }

  //uses the random number to choose the next color
  function pickColor(){
    var newNum = randomNum();
    switch(newNum){
      case 1:
      var color = "yellow";
      break;
      case 2:
      var color = "green";
      break;
      case 3:
      var color = "red";
      break;
      case 4:
      var color = "blue";
      break;
    }
    console.log("the pickColor choice is " + color);
    return color;
  }

});
