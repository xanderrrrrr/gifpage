var topics = ["michael jordan", "lionel messi", "cristiano ronaldo", "lebron james"]

// setting the on-click listener for loading the api
// $(".athlete").on("click", function () {
function displayStuff() {
    // Deleting the buttons prior to adding new  buttons
    $("#images-go-here").empty();
    // Grabbing and storing the data-animal property value from the button
    var athlete = $(this).attr("data-name");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        athlete + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(queryURL);

            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

                // Creating and storing a div tag
                var athleteDiv = $("<div>");

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);

                // Creating and storing an image tag
                var athleteImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                athleteImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and image tag to the athleteDiv
                athleteDiv.append(p);
                athleteDiv.append(athleteImage);

                // Prependng the athleteDiv to the HTML page in the "#images-go-here" div
                $("#images-go-here").prepend(athleteDiv);
            }
        });
};

// this should render our buttons
function renderButtons() {

    // Deleting the buttons prior to adding new  buttons
    $("#buttons").empty();

    // Looping through the array of athletes
    for (var i = 0; i < topics.length; i++) {

        // Then dynamicaly generating buttons for each item in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("athlete");
        // Adding a data-attribute with a value of the athlete at index i
        a.attr("data-name", topics[i]);
        // Providing the button's text with a value of the athlete at index i
        a.text(topics[i]);
        // Adding the button to the HTML
        $("#buttons").append(a);
    }
}

// This function handles events where an athlete is added via submit button
$("#add-athlete").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var athlete = $("#user-input").val().trim();

    // Adding movie from the textbox to our array
    topics.push(athlete);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
    console.log(topics);
});



// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".athlete", displayStuff);

// rendering our buttons
renderButtons();
