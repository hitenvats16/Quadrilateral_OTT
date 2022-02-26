import '../index.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SlidingCards = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className=' w-full h-[500px] md:h-[600px]'>
            <SwiperSlide className='w-full h-full bg-pic1 object-cover bg-center'>
                <div className='absolute bottom-0 left-0 my-4 mx-6 md:mx-10 md:my-6 xl:px-[200px] xl:w-[1200px]'>
                    <h1 className='text-[#d7bef1] mb-3 text-3xl font-bold md:text-5xl md:mb-10'>2001: A Space<br></br> Odyssey</h1>
                    <p className='text-sm text-[#e7d6f9] md:text-xl md:mb-5'>
                        Lörem ipsum sabel tina pobengen pergraf. Polynat yk. Fåment relig till gåtåg. Pokan ted innan oktiga sarar.
                        Kanat dialigt köjibel semidiktisk. Prer egongen såväl som repipons Viola Söderberg. Fas trifådoligt.
                    </p>
                    <button className='my-3 bg-[#d7bef1] py-1 px-3 rounded-md md:text-xl md:my-5'>Watch Now</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='w-full h-full bg-pic2 object-cover bg-center'>
                <div className='absolute bottom-0 left-0 my-4 mx-6 md:mx-10 md:my-6 xl:px-[200px] xl:w-[1200px]'>
                    <h1 className='text-[#d7bef1] mb-3 text-3xl font-bold md:text-5xl md:mb-10'>Detective Pika</h1>
                    <p className='text-sm text-[#e7d6f9] md:text-xl md:mb-5'>
                        Lörem ipsum sabel tina pobengen pergraf. Polynat yk. Fåment relig till gåtåg. Pokan ted innan oktiga sarar.
                        Kanat dialigt köjibel semidiktisk. Prer egongen såväl som repipons Viola Söderberg. Fas trifådoligt.
                    </p>
                    <button className='my-3 bg-[#d7bef1] py-1 px-3 rounded-md md:text-xl md:my-5'>Watch Now</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='w-full h-full bg-pic3 object-cover bg-center'>
                <div className='absolute bottom-0 left-0 my-4 mx-6 md:mx-10 md:my-6 xl:px-[200px] xl:w-[1200px]'>
                    <h1 className='text-[#d7bef1] mb-3 text-3xl font-bold md:text-5xl md:mb-10'>Demon Slayer: <br></br>Nonito Foyama</h1>
                    <p className='text-sm text-[#e7d6f9] md:text-xl md:mb-5'>
                        Lörem ipsum sabel tina pobengen pergraf. Polynat yk. Fåment relig till gåtåg. Pokan ted innan oktiga sarar.
                        Kanat dialigt köjibel semidiktisk. Prer egongen såväl som repipons Viola Söderberg. Fas trifådoligt.
                    </p>
                    <button className='my-3 bg-[#d7bef1] py-1 px-3 rounded-md md:text-xl md:my-5'>Watch Now</button>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default SlidingCards;
