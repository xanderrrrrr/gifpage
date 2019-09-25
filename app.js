var topics = ["michael jordan","lionel messi", "cristiano ronaldo", "lebron james"]

function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("athlete");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", topics[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(topics[i]);
      // Adding the button to the HTML
      $("#buttons").append(a);
    }
  }

  renderButtons();