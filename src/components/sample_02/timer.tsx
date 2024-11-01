import { useEffect, useState } from "react"

const Timer : React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  // setInterval(() => {
  //   setTime(new Date());
  // }, 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return() => clearInterval(intervalId);
  }, []);
  
  return(
    <div>
      <h1>{time.toLocaleTimeString('en-GB')}</h1>
    </div>
  );
}

export default Timer;