import { useEffect, useState } from "react"
import "./css/timerTile.css";

function TimerTile({countDown, deleteTimer}){
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

    function deleteClick(){
        console.log("delete WAS clicked")
        deleteTimer(countDown.id)
    }

    return (
        <div  key = {countDown.id} className={`timer-tile ${timerValue==0 ? "stop" : ''}`} >
            <div className="close" onClick={deleteClick} >X</div>
            <center>
                <h1> {timerValue} </h1>
            </center>

            <div className='btn-row'>
                <div className={`btn ${timerValue==0 ? "stop-btn" : ''}`} onClick={pauseTimer}>{pause? "play" : "pause"}</div>
                <div className={`btn ${timerValue==0 ? "stop-btn" : ''}`} onClick={resetTimer}>Reset</div>
            </div>
        </div>
    )
}

export default TimerTile