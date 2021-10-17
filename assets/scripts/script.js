var currentDateDisplayEl = $("#currentDay");
var format = "HH:mm:ss";

// Array of objects
var timeblockData = [
  {
    time: 9,
    text: "",
    beforeTime: "9:00:00",
    afterTime: "9:59:59",
  },
  {
    time: 10,
    text: "",
    beforeTime: "10:00:00",
    afterTime: "10:59:59",
  },
  {
    time: 11,
    text: "",
    beforeTime: "11:00:00",
    afterTime: "11:59:59",
  },
  {
    time: 12,
    text: "",
    beforeTime: "12:00:00",
    afterTime: "12:59:59",
  },
  {
    time: 1,
    text: "",
    beforeTime: "13:00:00",
    afterTime: "13:59:59",
  },
  {
    time: 2,
    text: "",
    beforeTime: "14:00:00",
    afterTime: "14:59:59",
  },
  {
    time: 3,
    text: "",
    beforeTime: "15:00:00",
    afterTime: "15:59:59",
  },
  {
    time: 4,
    text: "",
    beforeTime: "16:00:00",
    afterTime: "16:59:59",
  },
  {
    time: 5,
    text: "",
    beforeTime: "17:00:00",
    afterTime: "17:59:59",
  },
];

// Save text for respective timeblock
$(".saveBtn").on("click", function () {
  let time = $(this).attr("id");
  let text = $(this).siblings(".description").val();
  saveTask(time, text);
});

// Display current date
function displayDate() {
  var today = moment().format("MMM DD, YYYY");
  currentDateDisplayEl.text("Today's Date: " + today);
}

// Saves inputted tasks to localstorage
function saveTask(time, text) {
  for (var i = 0; i < timeblockData.length; i++) {
    if (time == timeblockData[i].time) {
      timeblockData[i].text = text;
    }
  }
  localStorage.setItem("timeblockData", JSON.stringify(timeblockData));
}

// Populate timeblock display
function populateTimeblocks() {
  //Create row for each timeblock
  // TODO: Dynamically populate these rows using data from local storage
  // Array in local storage, each element in array corresponds to a work hour
  // Elements in array will be objects with properties for text, time, etc.
  // Dynamically check the time against the current time. Assign state of timeblock accordingly
  $(".saveBtn").each(function () {
    let time = $(this).attr("id");
    let text = $(this).siblings(".description");
    for (var i = 0; i < timeblockData.length; i++) {
      if (time == timeblockData[i].time) {
        text.text(timeblockData[i].text);

        var beforeTime = moment(timeblockData[i].beforeTime, format);
        var afterTime = moment(timeblockData[i].afterTime, format);

        var isPresentTime = moment().isBetween(beforeTime,afterTime);
        var isFutureTime = moment().isBefore(beforeTime);
       
        if(isPresentTime){
            text.addClass("present")
        } else if (isFutureTime){
            //future
            text.addClass("future");
        } else {
            //past
            text.addClass("past");
        }
      }
    }
  });
}

// Initial function
function init() {
  var storedTimeblockData = JSON.parse(localStorage.getItem("timeblockData"));

  if (storedTimeblockData !== null) {
    timeblockData = storedTimeblockData;
  }

  displayDate();
  populateTimeblocks();
}

init();
