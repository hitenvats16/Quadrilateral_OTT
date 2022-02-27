import '../index.css';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'

function Detail() {

    const [title, setTitle] = useState();
    const [disc, setDisc] = useState();
    const [poster, setPoster] = useState();
    const [back, setBack] = useState();

    useEffect(() => {
        setTitle("SpiderMan: No Way Home");
        setDisc("Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.");
        setPoster("https://image.tmdb.org/t/p/original/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg");
        setBack('https://images.hindustantimes.com/img/2021/11/09/1600x900/spider-man_no_way_home_1636451315678_1636451323010.png');
    }, []);

    return (
        <div className='w-full h-max justify-center items-center bg-white bg-cover xl:h-screen' style={{ backgroundImage: `url(${back})` }}>
            <div className='w-full h-full backdrop-blur-2xl flex flex-col-reverse md:p-10 xl:flex-row xl:p-20'>
                <div className='w-full h-full flex justify-center flex-col p-5 md:items-center xl:w-2/3'>
                    <Link to="/" className='self-start mb-10 -translate-x-1/2 xl:flex hidden'>
                        <IoMdArrowRoundBack color='white' size={64} />
                    </Link>
                    <h1 className='text-[#f5f5f5] font-bold text-4xl md:w-full md:text-5xl xl:text mb-10'>{title}</h1>
                    <p className='text-white text-sm md:w-full md:text-xl'>{disc}</p>
                    <div className='w-full h-12 flex mt-5 items-center md:mt-10'>
                        <img src={require('../assets/imdb.png')} className='aspect-auto mr-2 my-1' alt='' />
                        <p className='text-4xl font-bold text-[#F1F1F1]'>9.2</p>
                    </div>
                    <div className='w-full flex justify-evenly my-4 md:w-max self-start xl:mt-7'>
                        <button className='px-3 py-1 bg-[#f5f5f5] rounded-xl my-3 shadow-lg font-semibold text-slate-800 md:mx-5'>Add to Watch Later</button>
                        <button className='px-3 py-1 border-4 border-[#f5f5f5] rounded-xl my-3 shadow-lg font-semibold text-[#f5f5f5] md:mx-5'>Watch Trailer</button>
                    </div>
                    <p className='text-white md:w-full md:text-xl'>Caste: John duo, Parry Toes, Uncle Uncle</p>
                    <p className='text-white md:w-full md:text-xl'>Director: NoOne</p>
                    <p className='text-white md:w-full md:text-xl'>Producer: Palki Kumari</p>
                    <p className='text-white md:w-full md:text-xl'>Production Studio: BVP Prod Ltd founded by Alok Basu</p>
                </div>
                <img src={poster} className='xl:w-1/3 rounded-xl shadow-lg m-10 aspect-auto' alt='' />
            </div>
        </div>
    );
}

export default Detail;

