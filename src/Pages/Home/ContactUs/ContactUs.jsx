import img from '../../../assets/images/contact/contact_1.webp';

const ContactUs = () => {
    return (
        <div className="hero w-full h-[400px]">
             <img src={img} alt="" />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl text-red-600 font-bold">Contact Us</h1>
                    <p className="mb-5 text-4xl font-bold">Call Now : 01728394642</p>
                    {/* <p className="mb-5 text-3xl font-bold">or</p> */}
                    <button className="btn btn-outline btn-error p-4 mr-5">Send Email</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;