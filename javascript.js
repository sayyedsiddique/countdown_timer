(function(){


    const hoursInput = document.querySelector(".hours")
    const minutesInput = document.querySelector(".minutes")
    const secondInput = document.querySelector(".second")

    const startBtnElem = document.querySelector(".startBtn")
    const resetBtnElem = document.querySelector(".resetBtn")

    startBtnElem.addEventListener("click", (e) => {
        console.log("Chala", e.target.classList[1])
        if(e.target.classList[1] === "stop"){
            startBtnElem.classList.remove("stop")
            startBtnElem.textContent = "Start"
        }else{
            startBtnElem.classList.add("stop")
            startBtnElem.textContent = "Stop"
        }
    })


})()