// $("h1").text("Chuck Norris")

// const { sequelize } = require("../../models");

// var Joke = '/api/joke'

// $.get({
//     url: '/api/joke'
// }).then(function (data){
//     console.log(data);
//     data.map( function(joke){
//         $("#jokes").append(`
//     <div class="cell small-4">${joke.id}</div>
//     <div class="cell small-4">${joke.rating}</div>
//     <div class="cell small-4">${joke.joke}</div>
// `)
//     });
// });

$(document).ready(function() {
    $("#getJoke").on('click', function(){
        $.get("/api/joke/G", function(data, status){
          const jokesData = data;
          let random = Math.floor(Math.random() * jokesData.length);
          $(".jokes-container").text(jokesData[random].joke)
        return jokesData[random];
        });
      });
        $("#getJoke2").on('click', function(){
            $.get("/api/joke/PG-13", function(data, status){
              const jokesData = data;
              let random = Math.floor(Math.random() * jokesData.length);
              $(".jokes-container").text(jokesData[random].joke)
            return jokesData[random];
            });
          });
          $("#getJoke3").on('click', function(){
            $.get("/api/joke/R", function(data, status){
              const jokesData = data;
              let random = Math.floor(Math.random() * jokesData.length);
              $(".jokes-container").text(jokesData[random].joke)
            return jokesData[random];
            });
          });


    // $("#getJoke").on("click", function () {
    //     pickedJoke = pickJoke();
    //     jokeDisplay.textContent = pickedJoke;

    // });

    // function pickJoke() {
    //     var random = Math.floor(Math.random() * jokesDB.length);
    //     return jokesDB[random];
    
    
    // }

    // var jokesDB = "/api/joke";
    // $.getJSON(jokesDB, {

    // })
    //     .done(function (json) {
    //         var obj = JSON.stringify(json);
    //         var data = JSON.parse(obj);
    //         var jokesDB = [];
    //         var jokeDisplay = document.getElementById("getOtherJoke");
    //         // for (var i = 0; i < data.value.length; i++) {
    //         //   jokesDB.push(data.value[i].joke);
    //         // }



    //         $("#getOtherJoke").append(pickJoke);


    //     })
});


