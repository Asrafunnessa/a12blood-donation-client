import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="home_1.webp" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-2xl font-bold'>Donate Blood,Save Life!!</h2>
                        <p className='text-6xl font-bold'>Donate Blood and inspires others.</p>
                        <div>
                            <button className='btn btn-primary btn-outline mr-5'><Link to="/registration">Join as a donor</Link></button>
                            <button className='btn btn-primary btn-outline mr-5'><Link to="/search">Search Donors</Link></button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="home_2.webp" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-2xl font-bold'>Donate Blood,Save Life!!</h2>
                        <p className='text-6xl font-bold'>Your Blood can bring smile in other person face.</p>
                        <div>
                            <button className='btn btn-primary btn-outline mr-5'><Link to="/registration">Join as a donor</Link></button>
                            <button className='btn btn-primary btn-outline mr-5'><Link to="/search">Search Donors</Link></button>
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