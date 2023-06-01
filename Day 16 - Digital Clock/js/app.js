let clock = document.getElementById("digital-clock");

setInterval(() => {
  let date = new Date();
//   returns a string with a language sensitive representation of the time portion of this date
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
