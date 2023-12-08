import './App.css';
import News from './News';
import  React, {useEffect,useState} from 'react';
function App() {

  
  let [articles,setArticles]= useState([]);


  useEffect(() => {
    //Api Key
    fetch(//apikeylink)

    .then((response) => response.json())
    .then((news) => {
      setArticles(news.articles);
      console.log(news.articles)
    })
    .catch((err) => {
      console.log(err);
    })
    },[]);
  

    
  return (

    <div className="App">
      <header className='header'>
       
        <h1>Parso Tak</h1>

        <input type='text' placeholder='Search news'/>

      </header>

      <section className='news-articles'>

        {
          articles.map((article)=>{
            return(
              <News article={article}/>
            )
          })

        }


        
      </section>

    </div>
  );
}

export default App;

//2f62365eac094de6805ce0018e1d8f02
//open weathermap// api for weather data
//nutrition api,pokemon, seach api list github-public api
