// display today's day and date.
const todayDate = moment().format('dddd, MMM Do YYYY, H:mm');
$("#currentDay").html(todayDate);




$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text); 
    })

 function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();
        console.log(timeNow)

        // loop over time blocks
        $(".description").each(function (calender) {
           
            // To check the time and add the classes for background indicators
            if (timeNow > calender + 9) {
                // Past color = grey 
                $(this).addClass("past");
            }
            if (timeNow == calender + 9) {
                // Present color = red 
                $(this).addClass("present");
            }
            if (timeNow < calender + 9) {
                // Future color = green 
                $(this).addClass("future");
            }

        })
    }




// get items from local storage if any

$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

timeTracker();

})