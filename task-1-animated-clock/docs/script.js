(function updateClock() {
  let now = new Date();

  let sec = now.getSeconds();
  let min = now.getMinutes() + sec / 60;
  let hour = (now.getHours() % 12) + min / 60; //

  //get the angles
  let secAngle = sec * 6;
  let minAngle = min * 6;
  let hourAngle = hour * 30;

  let secHand = document.querySelector("#seconds");
  let minHand = document.querySelector("#minutes");
  let hourHand = document.querySelector("#hours");

  secHand.setAttribute("transform", `rotate(${secAngle}, 244,251) `);
  minHand.setAttribute("transform", `rotate(${minAngle}, 244,251) `);
  hourHand.setAttribute("transform", `rotate(${hourAngle}, 244,251) `);

  const tick = new Audio("./media/tick.mp3");

  tick.play();

  setTimeout(updateClock, 1000);
})();
