setInterval(() => {
  d = new Date();
  hourTime = d.getHours();
  minuteTime = d.getMinutes();
  secondTime = d.getSeconds();
  hourRotation = 30 * hourTime + minuteTime / 2;
  minuteRotation = 6 * minuteTime;
  secondRotation = 6 * secondTime;
  document.getElementById(
    "hour"
  ).style.transform = `rotate(${hourRotation}deg)`;
  document.getElementById(
    "minute"
  ).style.transform = `rotate(${minuteRotation}deg)`;
  document.getElementById(
    "second"
  ).style.transform = `rotate(${secondRotation}deg)`;
}, 1000);
// For Digital Clock
const updateClock = function () {
  let now = new Date();
  let day = now.getDay();
  let month = now.getMonth();
  let dayNum = now.getDate();
  let year = now.getFullYear();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let period = "AM";
  if (hour == 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
    period = "PM";
  }
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let id = [
    "day",
    "month",
    "day-num",
    "year",
    "d-hour",
    "d-minute",
    "d-second",
    "d-period",
  ];
  let value = [
    weeks[day],
    months[month],
    dayNum,
    year,
    hour,
    minute,
    second,
    period,
  ];
  for (let i = 0; i < id.length; i++) {
    document.getElementById(id[i]).firstChild.nodeValue = value[i];
  }
};
const initClock = () => {
  updateClock();
  window.setInterval("updateClock()", 1000);
};
