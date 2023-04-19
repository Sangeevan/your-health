import { useState } from 'react';
import './App.css';

import {AgeFromDateString} from 'age-calculator';

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.username);
  }

  let ageFromString = new AgeFromDateString(inputs.dob).age;
  let x = ("value from ageFromString", ageFromString);

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
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
                placeholder="Your name.."
              />
            </label>
            <label className='lable'>Date of Birth:
              <input 
                type="date" 
                name="dob" 
                value={inputs.dob || ""} 
                onChange={handleChange}
                placeholder="Your date of birth.."
              />
            </label>
            <label className='lable'>Height:
              <input 
                type="number" 
                name="height" 
                value={inputs.height || ""} 
                onChange={handleChange}
                placeholder="Your height.."
              />
            </label>
            <label className='lable'>Weight:
              <input 
                type="number" 
                name="weight" 
                value={inputs.weight || ""} 
                onChange={handleChange}
                placeholder="Your weight.."
              />
            </label>
            <input type="submit" value="Check Health Status" />
          </form>
        </div>
        <div className='displaybox'>
          <p className='greet'>Hi! {inputs.username}, Here is your health check results..</p>
          <h4 className='output'>Your Age: {x}</h4>
          <h4 className='output'>Your BMI: </h4>
          <h4 className='output'>Your Health Status: </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
