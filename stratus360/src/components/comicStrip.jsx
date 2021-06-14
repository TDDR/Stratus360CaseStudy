import React from 'react';
import { useParams } from 'react-router-dom';
import useXkcdApi from './ApiHook';
import './style.css'

const ComicStrip = () => {

    /**Setup url to make api call with */
    let xkcdURL = 'https://cyber-city-api.herokuapp.com/getComic/';
    const param = useParams().num;
    if(param){
         xkcdURL = 'https://cyber-city-api.herokuapp.com/getComic/' + param;
    }

    /**Use Custom Hook */
    const {comic, error} = useXkcdApi(xkcdURL);
    if(comic){
        let currentNum = comic.num;
        const latestComic = 2475;

        /**Button Handlers */
        const previousComic = () => {  
            let prevComic = 'https://cyber-city-app.herokuapp.com/'; 
            if(currentNum === 1){
                currentNum = latestComic;
                prevComic += currentNum; 
            } else{
                prevComic += currentNum - 1; 
            }
            window.location.replace(prevComic);        
        }
        
        const nextComic = () => {  
            let nextComic = 'https://cyber-city-app.herokuapp.com/'; 
            if(currentNum === latestComic){
                currentNum = 1;
                nextComic += currentNum; 
            } else{
                nextComic += currentNum + 1; 
            }
            window.location.replace(nextComic);  
        }
        
        const randomComic = () => {  
            let randComic = 'https://cyber-city-app.herokuapp.com/';
            const randomNum = Math.floor(Math.random() * latestComic) + 1;
            randComic += randomNum; 

            window.location.replace(randComic);  
        }

        /**Cleaning up the transcript */
        let transcript = comic.transcript;
        transcript = transcript.replace(/\[/g, '');
        transcript = transcript.replace(/\]/g, '');
        transcript = transcript.replace(/\{/g, '');
        transcript = transcript.replace(/\}/g, '');
        transcript = transcript.split('Alt');
    
        return (
            <div>
                {<button className='prevButton' onClick={previousComic}>Previous</button>}
                <button className='nextButton' onClick={nextComic}>Next</button>
                <br></br>
                <button className='randButton' onClick={randomComic}>Random</button>
                <h1>{comic.title}</h1>
                <h3>Created on(d/m/y): {comic.day}/{comic.month}/{comic.year}</h3>
                <img className='img' alt={comic.alt} src={comic.img}></img>
                <p>Transcript: {transcript[0]}</p>
                <p>Alt {transcript[1]}</p>
            </div>
        )
    }
    return error;
};

export default ComicStrip;