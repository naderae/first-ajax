document.addEventListener("DOMContentLoaded", function() {


  var button1 = document.getElementById('button1');
  var button2 = document.getElementById('button2');
  var button3 = document.getElementById('button3');

  button1.addEventListener('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com',
    method: 'GET',
    data: '{}',
    dataType: 'text'
    });
  })


  button2.addEventListener('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    dataType: 'text'
    }).done(function (responseData) {
      console.log('Success!');
      console.log(responseData);
      var responseString = document.createElement('p');
      responseString.innerHTML = responseData;
      document.querySelector('#step3456').append(responseString);
    }).fail(function () {
      console.log('fail!');
      var niceMessage = document.createElement('p');
      niceMessage.innerHTML = "Whoops! Something wrong has occured. Please Try Again!";
      document.querySelector('#step3456').append(niceMessage);
    }).always(function () {
      console.log("Hey the request finished!");
    });
  });

  button3.addEventListener('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET',
    dataType: 'text'
  });



});
});
