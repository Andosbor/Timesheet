var config = {
   apiKey: "AIzaSyCm1Qw1WYVc6LXXgM31_U1de0kQHoCiamA",
   authDomain: "my-project-7282c.firebaseapp.com",
   databaseURL: "https://my-project-7282c.firebaseio.com",
   projectId: "my-project-7282c",
   storageBucket: "my-project-7282c.appspot.com",
   messagingSenderId: "889688106764"
 };
 firebase.initializeApp(config);

var database = firebase.database();

$("#add-employee-btn").on("click", function(e){
      e.preventDefault();
      var empName = $("#employee-name-input").val().trim();
      var empRole = $("#role-input").val().trim();
      var empStart = $("#start-input").val().trim();
      var empRate = $("#rate-input").val().trim();

      database.ref().push({
        name: empName,
        role: empRole,
        start: empStart,
        rate: empRate
      })

      $("#employee-name-input").val("");
      $("#role-input").val("");
      $("#start-input").val("");
      $("#rate-input").val("");
    })

// on child Added

database.ref().on("child_added", function (snapshot) {
  var sv = snapshot.val();

$("tbody").html("<tr>").text(sv.name);
$("tbody").html("<tr>").text(sv.role);
$("tbody").html("<tr>").text(sv.start);
$("tbody").html("<tr>").text(sv.rate);

}
