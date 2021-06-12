import React from 'react';
import useXkcdApi from './ApiHook';

const xkcdURL = 'http://localhost:8080/getComic';

const ComicStrip = () => {
    const {comic, error} = useXkcdApi(xkcdURL);
    if(comic){
        return (
            <div>
                <h1>{comic.title}</h1>
                <img alt="Comic of the day" src={comic.img}></img>
            </div>
        )
    }
    return error;
};

export default ComicStrip;