import './App.css';
function App(){
  return(
    <div id="sak">
    <h1>APPLICATION FORM</h1>

    <div id="mm">
    <input className ="nm" type="text" placeholder='Name'></input>

    <input className="nm" type="number" placeholder='Age'></input>
    <select className="nm " type="gender" placeholder='Gender'>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
      </select> 
    <input className="nm" type="date" placeholder='DOB'></input>
    <button className="obt" value="button">Submit</button>
    </div>
    <div ask>
        <h1>QUALIFICATIONS</h1>
        <input className="ans" type="text" placeholder='Degree'></input>
        <input className="ans" type-="text" placeholder='College Name'></input>
        <input className="ans" type-="number" placeholder='Passing Year'></input>
        <input className="ans" type-="date" placeholder='Interests'></input>
        

     
    </div>
    </div>
  );
}


export default App;