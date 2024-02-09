import React from 'react'
import'./NewsElement.css'





const NewsElement = ({title,description,url,urlToImage}) => {



  return (
    <div className='newswebsite items-center  flex 
    justify-center '>
        <div className='newselement '>
            <img className='newsimage'src={urlToImage} alt={urlToImage}/>
            <h3><a href={url}>{title} </a></h3>
            <p>{description}</p>

        </div>
        
        </div>
  )
}

export default NewsElement