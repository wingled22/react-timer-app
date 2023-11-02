import { useState, useEffect } from 'react'
import "./app.css"

function App() {
  const [time, setTime] = useState(10)
  const [pause, setPause] = useState(false)

    useEffect(() => {
      if(!pause){
        const timer = setInterval(() => {
          if (time > 0) {
            setTime(time - 1);
          }
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }

    }, [pause,time]);


  function pauseTimer () {
    return setPause( !pause )
  }

  function reset(){
    return setTime(10)
  }

  return (
    <>
      <h1>Messengers Parcel Timer :{ time}</h1>
      <div className='btn-row'>
        <div className="btn" onClick={pauseTimer}>
          {
            pause ? "play" : "pause"
          }
        </div>
        <div className="btn" onClick={reset}>Reset</div>
      </div>
      
    </>
  )
}

export default App
