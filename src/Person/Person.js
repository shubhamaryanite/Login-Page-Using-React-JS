import React, { useState } from 'react';

import './Person.css';

const Person = (props) => {
return(
    <div className="Person">
        <h2>{props.name} is {props.age} years old</h2>
        <p onClick={props.click}>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
) 
};

export default Person;