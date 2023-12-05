
import './App.css';
import Header from './Header';
import Products_list from './Products_list';
function App() {


  function doSomething(data)
  {
    console.log("hello i am clicked "+data)
  }


  return (
    <div className="App">
      
      <Header/>

      <Products_list/>

      <button className='btn' onClick={(event)=>{
        console.log(event)
        doSomething("Raju")
      }} >Click</button>
      
      
      
    </div>
  );
}

export default App;
