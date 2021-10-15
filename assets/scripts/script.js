// Save reference to important DOM elements
var currentDateDisplayEl = $('#currentDay');
var timeblockDisplayEl = $('#timeblocks');

// Display current date
function displayDate(){
    var today = moment().format('MMM DD, YYYY');
    currentDateDisplayEl.text("Today's Date: " + today);
}

// Populate timeblock display
function populateTimeblocks(){
    //Create row for each timeblock
    // TODO: Dynamically populate these rows using data from local storage
    var timeblockRowEl = $('<tr>').addClass('time-block row');

    var hourTdEl = $('<td>').addClass('hour').text("9am");

    var descriptionTdEL = $('<td>').addClass('description col-10');
    var textareaTdEL = $('<textarea>');
    descriptionTdEL.append(textareaTdEL);

    var saveButtonTdEl = $('<td>');
    var saveButtonEl = $('<button>').addClass('saveBtn').text("Save");
    saveButtonTdEl.append(saveButtonEl);

    timeblockRowEl.append(
        hourTdEl,
        descriptionTdEL,
        saveButtonTdEl);

    timeblockDisplayEl.append(timeblockRowEl);
}

// Initial function
function init(){
    displayDate();
    populateTimeblocks();
}

init();