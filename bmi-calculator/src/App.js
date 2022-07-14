import React , {useState} from 'react'
import './App.css';

function App() {

  const [weight ,setWeight] =  useState(0);
  const [height ,setHeight] =  useState(0);
  const [bmi ,setBmi] =  useState('');
  const [message ,setMessage] =  useState('');

let calcBmi =(event) =>{
  /////prevent Submitting
  event.preventDefault()

  if(weight ===0 || height ===0){
    alert('Please enter a valid weight and height')
  }else{
    let bmi = (weight/(height*height)*703);
    setBmi(bmi.toFixed(1))

    

    // logic for message

    if(bmi<25){
      setMessage('You are underweight');
    }else if(bmi>=25 && bmi <30){
      setMessage('you are healthy');
    }else{
      setMessage('you are overweight');
    }
  }
}

let reload = () =>{
  window.location.reload()
}


  return (
    <div className="App">
     <div className="container">
      <h2 className="centre">BMI CALCULATOR</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label >Weight (lbs)</label>
          <input value={weight} onChange={(e) =>setWeight(e.target.value)}/>
        </div>
        <div>
        <label >Height (lbs)</label>
          <input value={height} onChange={(event) =>setHeight(event.target.value)}/>
        </div>
        <div className='btnsection'>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
      <div className='result'>
        <h3>Your BMI is : {bmi}</h3>
        <p>{message}</p>
      </div>
      {/* <div className="img-container">
        <img src={imgSrc}" alt="" />
      </div> */}
     </div>
    </div>
  );
}

export default App;
