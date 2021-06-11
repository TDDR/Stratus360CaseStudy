import React from 'react';
import useXkcdApi from './apiHook';

const ComicStrip = () => {
    const {comic, error} = useXkcdApi();

    console.log(comic);
    if(comic){
        return (
            <div>
                <h1>{comic.title}</h1>
            </div>
        )
    }
    console.error(error.message);
    return null;
};

export default ComicStrip;