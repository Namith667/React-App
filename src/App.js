import './App.css';
//import Product from './Product';
import { useEffect, useState } from 'react';
function App() {
  
  //let [productVisible,setProductVisible] =  useState(false);
  
  let [users,setUsers]= useState([]);




  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);

      setUsers(data);

    })
    .catch((err)=>{
      console.log(err);
    })

  },[])
  
  return (

    

    <div className="App">
      
      {/*<h1>Welcome</h1>

      <button onClick={()=>{
        setProductVisible(true);
      }}>Show Product</button>

      <button onClick={()=>{
        setProductVisible(false);
      }}>Hide Product</button>

      {
        productVisible == true ?
        (
          <Product/>
        )
        :null
      }
    */}

    {
      users.map((user)=>{
        return (
          <div className='user' key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.username}</p>
            <p>{user.website}</p>
          </div>
        )
      })
    }
    </div>
  );
}

export default App;
