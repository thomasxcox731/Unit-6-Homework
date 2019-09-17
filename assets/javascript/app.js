//create array of strings
var topics = ["dogs", "cats", "bears"];

//create function to create buttons in html, and give id of "button"
function buttons(){
    $("<button>").html(topics).attr("id", "button");
    
}
//Use for loop to append a button for each string in an array 
for (i = 0; i < topics.length; i++){
    $("#button").append(topics); //add specific object to topics
    console.log(topics);
}
//When the button is clicked,
$("#button").on("click", function(){
    //page gets 10 static gif's from the api and puts it on the page
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
}