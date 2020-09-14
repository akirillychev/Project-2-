//$("h1").text("Chuck Norris")

$.get({
    url: "/api/joke"
}).then(function (data){
    console.log(data);
    data.map( function(joke){
        $("#jokes").append(`
    <div class="cell small-4">${joke.id}</div>
    <div class="cell small-4">${joke.rating}</div>
    <div class="cell small-4">${joke.joke}</div>
`)
    });
});
