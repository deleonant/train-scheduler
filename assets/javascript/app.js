//VARIABLES
//===============

//train counter varaiable
var trainCounter = 0;
var trainCountArray =[];
var nextTrain;
var minutesAway;
// moment.js

// FUNCTIONS
// ===============

// function to calculate time
// var calc = function(startTime, freq) {
//
//     var moment = moment();
//     //put first train time in to military time
//     var firstTrainTime = moment(startTime, "HH:MM");
//     console.log(firstTrainTime);
//
// }

// MAIN PROCESSES
//===============

// Function for submit button on the form
$("#addButton").on("click", function(){

      // form variables, stored as what is entered and whitespace is trimmed
      var name = $("#name").val().trim();
      var dest = $("#dest").val().trim();
      var freq = $("#freq").val().trim();
      var first = $("#first").val().trim();


  //moment.js and variables
      // current time
      var now = moment().format("HH:mm");
      console.log(now);

      // frequency converted into minutes
      freq = parseInt(freq);
      var cvFreq = moment(freq, "mm");
      console.log(cvFreq);

      // first train time converted to military time
      var cvFirst = moment(first, "HH:mm");
      console.log(cvFirst);

      // calculate how many minutes away
      // take the difference of now and what the user put in
      var difference = moment(cvFirst).diff(moment(), "minutes");
      console.log("Difference In Time:")
      console.log(difference);

      // calculate next arrival time in minuntes
      // this is the difference in time compared to the frequency given
      // frequency minus the difference
      var remaining = freq - (Math.abs(difference));
      console.log("Next Train:")
      console.log(remaining);

      // figure out the next arrival time as time clock
      var nextArrival;

          // if (difference > 0) {
          //   nextArrival = moment(cvFirst).format('hh:mm A');
          // }



      //push the input into the table
          //table attributes
          var row = $("<tr>");

          //add name of train line
          var nameTrain = $("<td>");
          nameTrain.text(name);
          row.append(name);

          //add the destination
          var destTrain = $("<td>");
          destTrain.text(dest);
          row.append(dest);

          // add frequency formatted in minutes away
          var freqTrain = $("<td>");
          freqTrain.text(cvFreq);
          row.append(cvFreq);

          // add the next arrival



          //add the row info into the local storage
          var trainLocalStorage = row.prop("outerHTML");
          console.log("Local Storage: ");
          console.log(trainLocalStorage);
          console.log("here");


})