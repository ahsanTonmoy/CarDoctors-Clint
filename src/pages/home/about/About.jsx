import  person  from "../../../assets/images/about_us/person.jpg";
import  parts  from "../../../assets/images/about_us/parts.jpg";
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-full lg:1/2 relative">
                        <img src={person} alt={person} className="w-3/4" />
                        <img src={parts} alt={parts} className=" absolute top-1/2 w-1/2 right-5 border-8 border-white shadow-2xl"/>
                    </div>
                    <div className="w-full lg:1/2">
                        <div className="sec-tlt text-[#FF3811] font-black py-4">About Us</div>
                        <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn bg-[#FF3811] text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;