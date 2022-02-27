import '../index.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Btn = ()=> {
    return(
        <div className='btn flex flex-row items-center w-36 justify-between px-3 py-2 border-2 border-[#8a39e1] rounded-md mt-5'>
                <h1 className='text-[#8a39e1] lg:text-'>Watch Now</h1>
                <AiOutlineArrowRight color='#8a39e1'/>
        </div>
    );
}

export default Btn;