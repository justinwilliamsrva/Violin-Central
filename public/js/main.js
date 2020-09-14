// $(document).ready(() => {
//   //Javascript to handle search for exercises
//   $(function() {
//     $(".execsubmit").on("click", function(event) {
//       event.preventDefault();
//       console.log("clicked it!");

//       const searchParams = {
//         mainPosition: $("#mainpos").val(),
//         secondPosition: $("#pos2").val(),
//         mainBowing: $("#mainbow").val(),
//         secondBowing: $("#bow2").val(),
//         key: $("#key").val(),
//         difficulty: $("#difficulty").val(),
//         focus: $("#focus").val(),
//         type: $("#type").val()
//       };

//       if (searchParams.secondPosition === "N/A") {
//         searchParams.secondPosition = null;
//       }
//       if (searchParams.secondBowing === "N/A") {
//         searchParams.secondBowing = null;
//       }
//       if (searchParams.focus === "N/A") {
//         searchParams.focus = null;
//       }
//       console.log("Search Parameters", searchParams);

//       $.ajax("/api/exercises", {
//         method: "GET",
//         data: searchParams
//       }).then(function() {
//         console.log("Exercises Found");
//       });
//     });
//   });
// });
