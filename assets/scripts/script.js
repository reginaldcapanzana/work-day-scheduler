// Save reference to important DOM elements
var currentDateDisplayEl = $('#currentDay');

var timeblockText = [];

$(".saveBtn").on("click", function(){
    let time = $(this).attr("id");
    let text = $(this).siblings(".description").val();
    console.log(time);
    console.log(text);
})

// Display current date
function displayDate(){
    var today = moment().format('MMM DD, YYYY');
    currentDateDisplayEl.text("Today's Date: " + today);
}

// Populate timeblock display
function populateTimeblocks(){
    //Create row for each timeblock
    // TODO: Dynamically populate these rows using data from local storage
    // Array in local storage, each element in array corresponds to a work hour
    // Elements in array will be objects with properties for text, time, etc.
    // Dynamically check the time against the current time. Assign state of timeblock accordingly


}

// Initial function
function init(){
    displayDate();
    // populateTimeblocks();
}

init();