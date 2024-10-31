import { useState } from "react"

const Timer : React.FC = () => {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);
  
  return(

    <div>
      <h1>{time.toLocaleTimeString('en-GB')}</h1>
    </div>
    // <div>
    //   <h3>타이머 : {seconds}초</h3>
    //   <button
    //     onClick={
    //       function()
    //       {
    //         setInterval(() => {
    //           setSeconds((prev) => prev + 1);
    //         }, 1000);
    //       }
    //     }
    //   >시작</button>
    // </div>
  );
}

export default Timer;