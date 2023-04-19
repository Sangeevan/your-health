import { useState } from 'react';
import './App.css';

let {AgeFromDateString} = require('age-calculator');
var calcBmi = require('bmi-calc')

function App() {
  const [inputs, setInputs] = useState({});
  const [display, setDisplay] = useState(0);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplay(1);
  }

  let ageFromString = new AgeFromDateString(inputs.dob).age;
  let age = ("value from ageFromString", ageFromString);

  let bmi = calcBmi(inputs.weight, inputs.height);

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          Your Health
        </h1>
        <div className='box'>
          <form onSubmit={handleSubmit}>
            <label className='lable'>Name:
              <input
                required
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
                placeholder="Your name"
              />
            </label>
            <label className='lable'>Date of Birth:
              <input 
                required
                type="date" 
                name="dob" 
                value={inputs.dob || ""} 
                onChange={handleChange}
                placeholder="Your date of birth"
              />
            </label>
            <label className='lable'>Height (m):
              <input 
                required
                min={0}
                max={3}
                step="0.01"
                type="number" 
                name="height" 
                value={inputs.height || ""} 
                onChange={handleChange}
                placeholder="Your height in meters"
              />
            </label>
            <label className='lable'>Weight (kg):
              <input 
                required
                min={0}
                max={300}
                step="0.01"
                type="number" 
                name="weight" 
                value={inputs.weight || ""} 
                onChange={handleChange}
                placeholder="Your weight in kilograms"
              />
            </label>
            <input type="submit" value="Check Health Status" />
          </form>
        </div>
        { display==1 &&
          <div className='displaybox'>
            <p className='greet'>Hi! {inputs.username}, Here is your health check results..</p>
            <h4 className='output'>Your Age: {age}</h4>
            <h4 className='output'>Your BMI: {bmi.value}</h4>
            <h4 className='output'>Your Health Status: {bmi.name}</h4>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
