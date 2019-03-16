$(function () {
    // Add a new burger.
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var createBurger = {
            burger_name: $("#createBurger").val().trim(),
            devoured: 0
        };
console.log(createBurger)       
            // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: createBurger
        }).then(function () {
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            // location.reload();
        });
    });

    $(".eatBurger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".devourBurger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})