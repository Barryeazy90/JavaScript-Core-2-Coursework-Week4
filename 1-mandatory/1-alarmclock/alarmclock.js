// let divEl = document.querySelector(".centre");
//   let h1Element = document.getElementById("timeRemaining");
//  let inputVal = document.getElementById("alarmSet").value;

//  let setAlarmButton = document.getElementById("set");
// function setAlarm() {
//   h1Element.innerText = `time Remaining:${inputVal}`
// } 
//   console.log(divEl);
//    console.log(h1Element)
// console.log(inputEl);
// setAlarmButton.addEventListener("click", setAlarm)

function setAlarm() {
  let inputValue = document.querySelector("#alarmSet");
  let remainder = document.querySelector("#timeRemaining");
  let countDown = inputValue.value;

  let timer = setInterval(() => {
    const min = Math.floor(countDown / 60);
    const minFormat = min < 10 ? `0${min}` : min;
    const secs = countDown % 60;
    const secFormat = secs < 10 ? `0${secs}` : secs;
    remainder.innerText = `Time Remaining : ${minFormat}:${secFormat}`;
    countDown--;

    if (countDown < 0) {
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);
}
function pauseAlarm() {
  audio.pause();
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
