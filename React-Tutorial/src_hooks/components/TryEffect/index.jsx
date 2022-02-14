import React, {useState, useEffect} from 'react';

export default function TryEffect(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const showDate =()=>{
        setTime(new Date().toString())
    }

    useEffect(()=>{
        const interval = setInterval(showDate, 1000)
       return ()=>{
           clearInterval(interval);
       }
    }, [time])

    return (
        <div>
            <button onClick={showDate}>show date</button>
            <div>{time}</div>
        </div>
    )
}