import { useState, useEffect, useCallback } from "react";
import "./css/app.css";
import "./css/timerForm.css";
import TimerTile from "./timerTile";


function Home(){
    const [countDown, setCountDown] = useState(0);
    const [countDownTimers, setCountDownTimers] = useState([])


    function onSubmitHandler(e){
        e.preventDefault();
        setCountDownTimers(currentCountDowntTimers => {
            return [...currentCountDowntTimers, {
                id: crypto.randomUUID(),
                time: countDown,
                currentValue: countDown,
                isPaused: false 
            }]
        })
        
    }

    console.table(countDownTimers);
    return (
        <>
            <div className="timer-form">
                <form onSubmit={onSubmitHandler}>
                    <input type="number" 
                        name="countdown" 
                        value={countDown}
                        onChange={e => setCountDown(e.target.value)}
                        />

                    <button>Add Timer</button>

                </form>
            </div>
            <div className="timers-grid">
                {
                    countDownTimers.map(ctd =>{
                        return (
                            <TimerTile 
                                countDown = {ctd}
                            />
                        )
                    })
                }
            
            </div>
        </>
    );
}



export default Home