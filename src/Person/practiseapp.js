import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

// function App() {
//   return React.createElement('div',{className:'App'},React.createElement('h1',null,'SHUBHAM KUMAR SINGH'));
// }

class App extends Component{

  switchNameHandler = () => {
    //console.log("button was clicked");
    //never use the below function to set or change the element - use setState
    //this.state.persons[0].name="Karan";
    this.setState({
      persons : [
        {name:"KL Rahul" ,age: 34},
        {name:"Saket Singh" ,age: 18},
        {name:"Sri Vastava" ,age: 28}
      ]
    })
  }

  state = {
    persons : [
      {name:"Shubham Kumar Singh" ,age: 21},
      {name:"Saket Singh" ,age: 18},
      {name:"Sri Vastava" ,age: 21}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name:"KL Rahul" ,age: 34},
        {name: event.target.value ,age: 18},
        {name:"Sri Vastava" ,age: 28}
      ]
    })
  }

  render(){

    const style = {
      backgroundColor: 'white',
      font:'inherit',
      borderRadius : '10px',
      padding : '8px',
      cursor : 'pointer',
      border : '2px solid blue',
      marginBottom : '10px',
      boxShadow : '0 2px 2px 2px'
    };

    return (
      <div className='App'>
        <h1>Shubham Kumar Singh</h1>
        <p>Above is First Componet from main App.js file</p> 
        <p>Below is second component from Person.js file</p>
        <p>Below is the example of how to use props</p>
        <button 
        style = {style}
        onClick={this.switchNameHandler}>Switch Name</button>
        
        <Person 
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}></Person>

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler}
        changed={this.nameChangeHandler}>My hobbies</Person>
        
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}></Person>

      </div>
    );
  }
  }
  

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

