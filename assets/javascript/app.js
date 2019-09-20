//Link to API with query URL 

//Use ajax (url: queryURL, method: "GET")

//create array of strings
var topics = ["Dogs", "Cats", "Bears"];

//Use for loop to append a button for each string in an array 
function renderButtons() {
    $("#button").empty();
    for (i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.attr("id", "button");
        a.addClass("topics")
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#button").append(a);
        console.log(topics[i]);
    }
}
//When the button is clicked,
$(document).on("click", ".topics", function () {
    //page gets 10 static gif's from the api and puts it on the page
    //Link to API with query URL 
    var topicClicked = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=9kQ9GZBwVwfnaxFBovjF05JRmaYvZpAi&limit=10&offset=0&rating=G&lang=en&tag=animals&tag=" + topicClicked;
    var otherQueryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicClicked + "api_key=9kQ9GZBwVwfnaxFBovjF05JRmaYvZpAi&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET",
    })
        // .then(function (response) {
        //     console.log(queryURL);
        //     console.log(response);
        //     var results = response.data;
        //     for (var i=0; i < results.length; i++){
        //         var fixedimageUrl = results[i].image_original_url;
        //         console.log(fixedimageUrl);
        //         var imageDiv = $("<img>");
        //         imageDiv.attr("src", fixedimageUrl);
        //         imageDiv.attr("alt", "animal image");
        //         imageDiv.addClass("gif");
        //         $("#images").prepend(imageDiv);
        //     }
        // })
        .then(function (response) {
            // Saving the image_original_url property
            console.log(response);
            var imageUrl = response.data.image_original_url;
            console.log(imageUrl);
            // Creating and storing an image tag
            var animalImage = $("<img>");
            // Setting the catImage src attribute to imageUrl
            animalImage.attr("src", imageUrl);
            animalImage.attr("alt", "animal image");
            animalImage.addClass("gif");
            // Prepending the animalImage to the images div
            $("#images").prepend(animalImage);
            // $("#rating").append("<p>" + "response.data[0].rating" + "</p>");
            console.log(response.data.rating);
            imageDiv.attr("data-still", results[i].fixed_height_still.url);
        })

})


//When the user clicks the gif, it animates. Clicked again, becomes static
$("gif").on("click", function () {
    var state = $("<img>").attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("animate"));
        $(this).attr("data-state", "animiate");
    } else {
        $(this).attr("src", $(this).attr("still"));
        $(this).attr("data-state", "still");
    }
});
//Display ratings under gifs

//Add form that takes a value from a user input box and adds it to the topics array 
function newSubmit() {
    $(document).ready(function () {
        $("#add-topic").on("click", function () {
            var newAnimal = $("#exampleFormControlTextarea1").val().trim();
            topics.push(newAnimal);
            renderButtons();
        })
    })
}
renderButtons();