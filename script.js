"use strict";
const day = document.querySelector(".day");
const time = document.querySelector(".time");
const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const updateTimeAndDay = () => {
  const now = new Date();
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const hour = now.getHours().toString().padStart(2, "0");
  console.log(now, seconds, minutes, hour);

  //Update Day
  day.textContent = weekDay[now.getDay()];
  //Update Time
  time.textContent = `${hour}:${minutes}:${seconds}`;
};

updateTimeAndDay();

setInterval(updateTimeAndDay, 1000);
