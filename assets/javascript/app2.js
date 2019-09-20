var topics = ["Dogs", "Cats", "Bears"];
//created buttons
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
//When the button is clicked
$(document).on("click", ".topics", function () {
    var topicClicked = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicClicked + "&api_key=9kQ9GZBwVwfnaxFBovjF05JRmaYvZpAi&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET",
    })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    var gifDiv = $("<div>");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var Image = $("<img>");
                    Image.attr("src", results[i].images.fixed_height.url);
                    Image.attr("data-still", results[i].images.fixed_height_still.url);
                    Image.attr("data-animate", results[i].images.fixed_height.url);
                    Image.attr("data-state", "still");
                    Image.addClass("gif");
                    //Adding info to HTML
                    gifDiv.append(Image);
                    gifDiv.append(p);
                    $("#gifs-appear-here").prepend(gifDiv);
                    //Adding the pausing functionality
                    $(".gif").on("click", function () {
                        var state = Image.attr("data-state");
                        if (state === "still") {
                            Image.attr("src", Image.attr("data-animate"));
                            Image.attr("data-state", "animate");
                        } else {
                            Image.attr("src", Image.attr("data-still"));
                            Image.attr("data-state", "still");
                        }

                    })

                }
            }
        })

});
//Adding new custom buttons
$("#add-animal").on("click", function (event) {
    event.preventDefault();
    var newBtn = $("#animal-input").val().trim();
    topics.push(newBtn);
    renderButtons();
});
renderButtons();