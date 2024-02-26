/* CUSTOM DATE TO TEST 
var currentDate = dayjs("2024-02-24 14:01:45");*/

var currentDate = dayjs();

var currentDateELement = $('#currentDay');
var hoursOfDayElement = $('.container-fluid');
var saveButtonElements = $('.saveBtn');
var descriptionsElements = $('.description');
var clearDayElement = $('.clearBtn');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Update page date with current date
  currentDateELement.text(currentDate.format('dddd, MMMM DD, YYYY'));

  // Refreshes calendar 
  updateSchedule();
  
});

function updateSchedule() {
  var currentHour = currentDate.hour();
  // Sort through each calendar row to find out if the hour has past, is present, or is in the future and draw accordingly
  // We are using 24 hour (military) time representation 0-24 to keep row ids consistent with local storage keys - seemed easier
  for (i = 0; i < hoursOfDayElement.children().length; i++) {
    hourOfDay = hoursOfDayElement.children().eq(i).attr('id')
    if (hourOfDay < currentHour) {
      hoursOfDayElement.children().eq(i).attr('class', "row time-block past");
    } else if (hourOfDay > currentHour) {
      hoursOfDayElement.children().eq(i).attr('class', "row time-block future");
    } else if (hourOfDay == currentHour) {
      hoursOfDayElement.children().eq(i).attr('class', "row time-block present");
    }
    // Fill in the tasks for the day if they exist in local storage
    console.log("HERE");
    descriptionsElements[i].textContent = localStorage.getItem(hourOfDay);
  }
};

// Save the text description/task into local storage with a key that matches the savebtn/row id/hour
saveButtonElements.on("click", function(event) {
  event.preventDefault();

  // find out what hour of day we are on by checking the row id of its parent
  var hourOfDayClicked = $(this).parent().attr('id');
  // assign new text to variable
  var newText = $(this).siblings('textarea').val();
  // enter into local storage
  localStorage.setItem(hourOfDayClicked, newText);

  // Would it have been okay to do this in one line instead of assigning variables/memory?
  // localStorage.setItem($(this).parent().attr('id'), $(this).siblings('textarea').val());
});

// Added just in case the user wanted to start with a fresh day or clear the entire day for whatever reason
clearDayElement.on("click", function(event) {
  event.preventDefault();
  if (confirm("Are you sure you want to clear the entire day?")) {
    localStorage.clear();
    console.log("CLEARIN UP LOCAL");
    updateSchedule();
  }
});
