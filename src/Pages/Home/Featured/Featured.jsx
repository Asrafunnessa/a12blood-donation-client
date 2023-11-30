import img1 from '../../../assets/images/features/F1.jpg';
import img2 from '../../../assets/images/features/F2.jpg';


const Featured = () => {
    return (
        <div className="hero w-full h-[600px]">
        <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-1/2 relative'>
            <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={img2} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
            </div>
            <div className='lg:w-1/2 space-y-5 p-4'>
                <h3 className='text-2xl font-bold'>Features</h3>
                <h1 className="text-5xl text-black-500 font-bold">Blood Donation</h1>
                <p className="py-6 text-gray-600 font-bold">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
                <button className="btn btn-outline btn-error mr-5">Read More</button>
            </div>
        </div>
    </div>
    );
};

export default Featured;