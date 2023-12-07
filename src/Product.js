import { useEffect,useState } from "react"

export default function Product() 
{
// useState is used to create variables

//useEffect property:
// 1. by default it is called for every render and rerender
// 2. You can stop it from getting called on rerender by passing a blank array
// 3. You can also pass variable in array for whuch particular rerender you want to call it

    let [name,setName] = useState("Namith")
    
    let [age,setAge] = useState(25)



//whenever the state changes the component rerenders and useEffect is also called
//useEffect is used to write functionalities whenvere the function is called or reloaded
    useEffect(()=>{
        console.log("Component rendered");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
//whenver the component unmounts the below function gets called
        return function()
        {
            console.log("dummy unmounted")
        }

    },[age])

    

    return(
        <div className="product">
            <h3>Samsung M51</h3>    
            <h2>{name}</h2>
            <button onClick={()=>{
                setName("Thor");
            }}>Click</button>

            <h2>{age}</h2>
            <button onClick={()=>{
                setAge(3);
            }}>Click</button>
        </div>
    )
}