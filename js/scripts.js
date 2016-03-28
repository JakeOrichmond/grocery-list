$(document).ready (function(){


  $('#blanks form').submit(function(event) {

    var blanks = ['item1','item2','item3','item4','item5','item6'];
    var userInputs = [];

    blanks.forEach(function(blank){
      userInputs.push($('#' + blank).val().toUpperCase());
      userInputs.sort();
      console.log(userInputs)
    });

    userInputs.forEach(function(userInput){
      $('#output').append('<li>' + userInput + '</li>')
    });


    event.preventDefault();
  });

});
