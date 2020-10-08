import React, {useState} from 'react';



const Clock = () =>
{
    let newTime=new Date().toLocaleTimeString();  
    
    const [oldTime, setTime] = useState(newTime);
    const UpdateTime = () => {
        newTime=new Date().toLocaleTimeString();
        setTime(newTime);
    }
    return(
        <div>
            <h1>{oldTime}</h1>
            <button onClick={UpdateTime}>Get Time</button>
        </div>
    )
};

export default Clock;