import { useEffect, useState } from 'react';

function MovieCard(props){

    const [poster, setPoster] = useState();

    useEffect(()=>{
        setPoster('https://img.hdtoday.tv/xxrz/250x400/394/05/4f/054f03427945795c006ed5be17bb23b0/054f03427945795c006ed5be17bb23b0.jpg');
    },[]);

    return(
        <img src={require('../assets/Trending/trending1.jpg')} className=' w-56 h-72 py-5 rounded-md md:w-64 md:h-96 mx-2'/>
    );
}

export default MovieCard;