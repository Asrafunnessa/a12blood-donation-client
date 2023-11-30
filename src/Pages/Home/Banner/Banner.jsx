import { Link } from "react-router-dom";
import img1 from '../../../assets/images/banner/home_1.webp';
import img2 from '../../../assets/images/banner/home_2.webp';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-2xl font-bold'>Donate Blood,Save Life!!</h2>
                        <p className='text-6xl font-bold'>Donate Blood and inspires others.</p>
                        <div>
                            <button className='btn btn-outline btn-error mr-5'><Link to="/registration">Join as a donor</Link></button>
                            <button className='btn btn-outline btn-error mr-5'><Link to="/search">Search Donors</Link></button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-2xl font-bold'>Donate Blood,Save Life!!</h2>
                        <p className='text-6xl font-bold'>Your Blood can bring smile in other person face.</p>
                        <div>
                            <button className='btn btn-outline btn-error mr-5'><Link to="/registration">Join as a donor</Link></button>
                            <button className='btn btn-outline btn-error mr-5'><Link to="/search">Search Donors</Link></button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle  mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;