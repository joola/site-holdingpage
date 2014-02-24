// Javascript for the countdown 
$(function () {
  var currentDate = new Date();
  $('.countdown').countdown(new Date(2014, 3, 1), function (event) {
    $this = $(this);
    switch (event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span.' + event.type).html(event.value);
        break;
      case "finished":
        $this.fadeTo('slow', .5);
        break;
    }
  });
});