import React, {useState} from 'react';



const Form = () =>
{
    const [name, setName] = useState("");
    const [fullName, setFullName]=useState("");

    const onSubmit = () =>{
        setFullName(name); 
    }

    const inputEvent = (event) => {
        //onchange always passes a value which can be accessed by using any parameter (here-event)
        //console.log(event.target.value);
        setName(event.target.value);
    }
    return(
        <div className="first">
            <h1>Hello {fullName}</h1>
            <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name}></input>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default Form;