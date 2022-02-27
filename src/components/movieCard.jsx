import { useEffect, useState } from 'react';

function MovieCard(props){

    const [poster, setPoster] = useState();

    useEffect(()=>{
        setPoster('https://img.hdtoday.tv/xxrz/250x400/394/05/4f/054f03427945795c006ed5be17bb23b0/054f03427945795c006ed5be17bb23b0.jpg');
    },[]);

    return(
        <img src={poster} className=' w-56 h-64'/>
    );
}

export default MovieCard;