
import './App.css';
//import Header from './Header';
import Products_list from './Products_list';
//import {useState} from 'react'

function App() {


    //initializing state variable
    //let [name,setName] = useState();
    //let [age,setAge] = useState(); 
    let countries = [
      {id:1,name: "India",capital:"New Delhi"},
      {id:2,name: "South africa",capital:"New Cape town"},
      {id:3,name: "New Zealand",capital:"Wellington"},
      {id:4,name: "USA",capital:"Washington DC"}
    ]

  return (
    <div className="App">
      
      {
        countries.map((country,id)=>{
          return (
            <div className='data'key={id}>
              <h3>{country.name}</h3>
              <p>{country.capital}</p>
            </div>
          )
        })
      }
      
      <Products_list/>

      


      {/*<div className='data'>
        <h3>{countries[0].name}</h3>
        <p>{countries[0].capital}</p>
      </div>

      <div className='data'>
      <h3>{countries[1].name}</h3>
        <p>{countries[1].capital}</p>
      </div>
    */}
      

      {/*<input type='text' placeholder='Enter Name' onChange={(event)=>{
      setName(event.target.value)
      }}/>
      <input type='number' placeholder='Enter Age' onChange={(event)=>{
      setAge(event.target.value)
      }}/>

      <button type='button' onClick={()=>{
        console.log(name,age)
      }}>Submit</button>
    



      <Header/>

      <Products_list/>
  

      {/*<button className='btn' onClick={(event)=>{
        console.log(event)
        //doSomething("Raju")
      }} >Click</button>
    */}
      
      
    </div>
  );
}

export default App;
