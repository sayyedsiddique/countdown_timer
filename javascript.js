(function () {
  const hoursInput = document.querySelector(".hours");
  const minutesInput = document.querySelector(".minutes");
  const secondInput = document.querySelector(".second");

  const startBtnElem = document.querySelector(".startBtn");
  const stopBtnElem = document.querySelector(".stopBtn");
  const resetBtnElem = document.querySelector(".resetBtn");

  let countdownTimer = null;

  startBtnElem.addEventListener("click", (e) => {
    console.log("hoursInput.value ", hoursInput.value);
    if (
      hoursInput.value == 0 &&
      minutesInput.value == 0 &&
      secondInput.value == 0
    )
      return;

    function startInterval() {
      startBtnElem.style.display = "none";
      stopBtnElem.style.display = "initial";

      countdownTimer = setInterval(() => {
        timer();
      }, 1000);
    }
    startInterval();
  });

  function stopInterval() {}

  resetBtnElem.addEventListener("click", (e) => {
    hoursInput.value = "";
    minutesInput.value = "";
    secondInput.value = "";
  });

  function timer() {
    if (
      hoursInput.value == 0 &&
      minutesInput.value == 0 &&
      secondInput.value == 0
    ) {
      hoursInput.value = "";
      minutesInput.value = "";
      secondInput.value = "";
      stopInterval();
    } else if (secondInput.value != 0) {
      secondInput.value = `${secondInput.value <= 10 ? "0" : ""}${
        secondInput.value - 1
      }`;
    } else if (minutesInput.value != 0 && secondInput.value == 0) {
      minutesInput.value = `${minutesInput.value <= 10 ? "0" : ""}${
        minutesInput.value - 1
      }`;
      secondInput.value = `59`;
    } else if (
      hoursInput.value != 0 &&
      minutesInput.value == 0 &&
      secondInput.value == 0
    ) {
      hoursInput.value = `${hoursInput.value <= 10 ? "0" : ""}${
        hoursInput.value - 1
      }`;
      minutesInput.value = `59`;
      secondInput.value = `59`;
    }
  }
})();
