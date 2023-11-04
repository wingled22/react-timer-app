import { useEffect, useState } from "react"
import "./css/timerTile.css";

function TimerTile({countDown}){
    const [timerValue, setTimerValue] = useState(countDown.time)
    const [pause, setPause] = useState(countDown.isPaused)

    useEffect(() => {
        if(!pause){
            const timer = setInterval(() => {
                if (timerValue > 0) {
                    setTimerValue(timerValue - 1);
                }
              }, 1000);
          
              return () => {
                clearInterval(timer);
              };
        }
    },[timerValue,pause])

    function pauseTimer(){
        console.log("on pause")
        return setPause(!pause)
    }

    function resetTimer(){
        console.log("Resetting")
        return setTimerValue(countDown.time)
    }

    return (
        <div  key = {countDown.id} className={`timer-tile ${timerValue==0 ? "stop" : ''}`} >
            <div className="close">X</div>
            <center>
                <h1> {timerValue} </h1>
            </center>

            <div className='btn-row'>
                <div className="btn" onClick={pauseTimer}>{pause? "play" : "pause"}</div>
                <div className="btn" onClick={resetTimer}>Reset</div>
            </div>
        </div>
    )
}

export default TimerTile