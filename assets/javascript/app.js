//Initialize Firebase//
var config = {
    apiKey: "AIzaSyCuK7u-J2nUqHet6KF3kM18HhE87ac82v8",
    authDomain: "train-scheduler-31e1c.firebaseapp.com",
    databaseURL: "https://train-scheduler-31e1c.firebaseio.com",
    storageBucket: "train-scheduler-31e1c.appspot.com",
    messagingSenderId: "48492718627"
};
firebase.initializeApp(config);

//Created a variable to access database//
var database = firebase.database();
//Link to firebase//
var trainData = "https://train-scheduler-31e1c.firebaseio.com/"

//Button to add trains
$("#addTrainbtn").on("click", function() {

    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();
    var nextArrival = $("#nextArrivalInput").val().trim();
    var minAway = $("#minAwayInput").val().trim();

    //Holds train data//
    var newTrain = {
        name: trainName,
        destination: destination,
        frequency: frequency,
        nextArrival: nextArrival,
        minAway: minAway
    }

    //Upload train data to database//
    trainData.push(newTrain);

    //Log into console//
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.frequency);
    console.log(newTrain.nextArrival);
    console.log(newTrain.minAway);

    //Alert//
    alert("All aboard");

    //Clears text boxes//
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#frequencyInput").val("");
    $("#nextArrivalInput").val("");
    $("#minAwayInput").val("");
});

trainData.on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    //stores everything in variables//
    var tName = childSnapshot.val().name;
    var tDestination = childSnapshot.val().destination;
    var tFrequency = childSnapshot.val().frequency;
    var tNextArrival = childSnapshot.val().nextArrival;
    var tMinAway = childSnapshot.val().minAway;

    //Calculate arrival time//
    var tNextArrival = moment().add(tminutes, "m")


    //Add train data to table//
    $("#trainTable" > "tbody").append("<tr><td>" + tName + "<tr><td>" + tDestination + "<tr><td>" + tNextArrival + "<tr><td>" + tFrequency)
});
