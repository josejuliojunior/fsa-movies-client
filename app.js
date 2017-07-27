var codeAPI = "";
var name = "";
var rate;
var type = "";
var description = "";
var duration;


$(document).ready(function(){

// const baseURL = "https://morning-brook-36057.herokuapp.com/movies";
// $.get(baseURL, makeUL);


  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://morning-brook-36057.herokuapp.com/movies",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "b64a5877-22f5-cbba-9eae-e775d35d2eba"
    }
  };

    $.ajax(settings).done(function (response) {
      codeAPI = response;
      console.log(codeAPI);
      console.log(codeAPI[0].name);

    for (var i = 0; i < codeAPI.length; i++) {
      console.log(codeAPI[i].id);
      $('#movies-list').append(
        `<div class="row">
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">${codeAPI[i].name}</span>
                    <p>${codeAPI[i].description}</p>
                    <br>
                    <p>Type: ${codeAPI[i].type}</p>
                  </div>
                  <div class="card-action">
                    <a href="#">Rate: ${codeAPI[i].rate}</a>
                    <a href="#">Duration: ${codeAPI[i].duration} minutes</a>
                    <a class="btn-floating btn-large waves-effect waves-light red"><i onclick="location.href = './edit.html?id=${codeAPI[i].id}';"  class="material-icons">mode_edit</i></a>
                  </div>
                </div>
              </div>
            </div>`
      );
    }


  });

console.log(window.location.search);

$('#submit-button').click(function(event){
  event.preventDefault();
  var pageIDstring = window.location.search;
  var equalIndex = pageIDstring.lastIndexOf("=");
  var pageID = pageIDstring.substring(equalIndex + 1);
  console.log(pageID);

  data = {
    name: $('#textarea1').val()===""?undefined:$('#textarea1').val(),
    rate: $('#textarea2').val()===""?undefined:$('#textarea2').val(),
    description: $('#textarea3').val()===""?undefined:$('#textarea3').val(),
    type: $('#textarea4').val()===""?undefined:$('#textarea4').val(),
    duration: $('#textarea5').val()===""?undefined:$('#textarea5').val()
  };

console.log(data);



var settings = {
  "url": `https://morning-brook-36057.herokuapp.com/movies/${pageID}`,
  "method": "PUT",
  "data":data
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

});




});
