//Link to API with query URL 

//Use ajax (url: queryURL, method: "GET")

//create array of strings
var topics = ["dogs", "cats", "bears"];

//create function to create buttons in html, and give id of "button"
// function buttons(){
//     $("<button>").html(topics).attr("id", "button");
    
}
//Use for loop to append a button for each string in an array 
for (i = 0; i < topics.length; i++){
    var a = $("<button>");
    a.addClass("button");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $(".button").append(a);
    console.log(topics);
}
//When the button is clicked,
$("#button").on("click", function(){
    //page gets 10 static gif's from the api and puts it on the page
    //Link to API with query URL 
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=9kQ9GZBwVwfnaxFBovjF05JRmaYvZpAi&tag=" + topics;
    $.ajax ({
        url: queryURL,
        method: "GET",
    })
    .then(function(response){
         // Saving the image_original_url property
         var imageUrl = response.data.image_original_url;

         // Creating and storing an image tag
         var animalImage = $("<img>");
          // Setting the catImage src attribute to imageUrl
          animalImage.attr("src", imageUrl);
          animalImage.attr("alt", "animal image");
           // Prepending the animalImage to the images div
           $("#images").prepend(animalImage);
    })

})


//When the user clicks the gif, it animates. Clicked again, becomes static

//Display ratings under gifs

//Add form that takes a value from a user input box and adds it to the topics array 
function newSubmit() {
    $(document).ready(function($){
        $("#theform").on("click", function (){
            topics.push("#submit id")
        })
    })
    buttons();
}