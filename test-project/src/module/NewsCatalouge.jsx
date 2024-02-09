import React,{useState, useEffect} from 'react'
import NewsElement from './NewsElement'
import axios from "axios";

const NewsCatalouge = () => {
    var topic;
    topic = "sports";
  const[articles, setArticles] = useState ([])
  const[error, setError] = useState ([])



  useEffect(()=>{
  const getArticles = async () => {
    try{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&apikey=67381506c2f9488cbd4569cd2f6bcef6`);
        setArticles(response.data.articles);
    } catch (error){
        setError(error);
     }
 
  }
 getArticles()
  },[])
  

 return(
  <div>
     {articles.map(article=>{
         return(
             <NewsElement
             title ={article.title} 
             description ={article.description}
             url= {article.url}
             urlToImage ={article.urlToImage}
             />
           
            
         )
     })}
  </div>
 )
}

export default NewsCatalouge