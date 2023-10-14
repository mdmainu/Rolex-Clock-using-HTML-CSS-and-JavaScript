const hourElement = document.querySelector(".hours");
const minuteElement = document.querySelector(".minutes");
const secondElement = document.querySelector(".seconds");

const updateClock = () => {
  const currentDate = new Date();

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const hourDeg = (hours / 12) * 360;
  hourElement.style.transform = `rotate(${hourDeg}deg)`;
  const minuteDeg = (minutes / 60) * 360;
  minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
  const secondDeg = (seconds / 60) * 360;
  secondElement.style.transform = `rotate(${secondDeg}deg)`;
};
setInterval(updateClock, 1000);
