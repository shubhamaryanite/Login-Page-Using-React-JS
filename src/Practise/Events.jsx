import React,{useState} from 'react';



const Events = () => {
    const purple="#8e44ad"
    const [bg, setBg] = useState(purple);
    
    const name="Click Me";
    const [oldname, setName] = useState(name);

    const bgchange = () =>{
        let newbg="#34495e";
        setBg(newbg);
        let newname="New BG-Color";
        setName(newname);
    }

    const bgback = () =>{
        setBg(purple);
        let newname="Back to normal";
        setName(newname);
    }
    return(
        <div style={ { backgroundColor: bg } }>
            {/* <button onClick={bgchange} onDoubleClick={bgback}>{oldname}</button>
             */}
             <button onMouseOver={bgchange} onMouseLeave={bgback}>{oldname}</button>
        </div>
    )
};

export default Events;