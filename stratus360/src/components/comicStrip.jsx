import React from 'react';
import { useParams } from 'react-router-dom';
import useXkcdApi from './ApiHook';
import './style.css'

const ComicStrip = () => {
    let xkcdURL = 'http://localhost:8080/getComic/';
    const param = useParams().num;
    if(param){
         xkcdURL = 'http://localhost:8080/getComic/' + param;
    }
    const {comic, error} = useXkcdApi(xkcdURL);
    if(comic){
        let currentNum = comic.num;
        const latestComic = 2475;

        const previousComic = () => {  
            let prevComic = 'http://localhost:3000/'; 
            if(currentNum === 1){
                currentNum = latestComic;
                prevComic += currentNum; 
            } else{
                prevComic += currentNum - 1; 
            }
            window.location.replace(prevComic);        
        }
        
        const nextComic = () => {  
            let nextComic = 'http://localhost:3000/'; 
            if(currentNum === latestComic){
                currentNum = 1;
                nextComic += currentNum; 
            } else{
                nextComic += currentNum + 1; 
            }
            window.location.replace(nextComic);  
        }
        
        const randomComic = () => {  
            let randComic = 'http://localhost:3000/';
            const randomNum = Math.floor(Math.random() * latestComic) + 1;
            randComic += randomNum; 

            window.location.replace(randComic);  
        }
    
        return (
            <div>
                {<button className='prevButton' onClick={previousComic}>Previous</button>}
                <button className='nextButton' onClick={nextComic}>Next</button>
                <br></br>
                <button className='randButton' onClick={randomComic}>Random</button>
                <h1>{comic.title}</h1>
                <h3>Created on(d/m/y): {comic.day}/{comic.month}/{comic.year}</h3>
                <img className='img' alt={comic.alt} src={comic.img}></img>
            </div>
        )
    }
    return error;
};

export default ComicStrip;