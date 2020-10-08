import React, {useState} from 'react';



const Runclock = () =>
{
    let time=new Date().toLocaleTimeString();  

    const [oldTime, newTime] = useState(time);
    const updateTime = () => {
        time=new Date().toLocaleTimeString();
        newTime(time);
    };
    setInterval(updateTime, 1000);
    return(
        <div>
            <h1>{time}</h1>
        </div>
    )
};

export default Runclock;