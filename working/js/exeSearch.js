$(function() {
  $(".exesubmit").on("click", function(event) {
    event.preventDefault();

    const searchParams = {
      mainPosition: $("#mainpos"),
      secondPosition: $("#pos2"),
      mainBowing: $("#mainbow"),
      secondBowing: $("#bow2"),
      key: $("#key"),
      difficulty: $("#difficulty"),
      focus: $("#focus"),
      type: $("#type")
    };

    $ajax("/api/exercises", {
      type: "GET",
      data: searchParams
    }).then(function() {
      location.reload();
    });
  });
});
