import bannar1 from '../../../assets/images/banner/1.jpg'
import bannar2 from '../../../assets/images/banner/2.jpg'
import bannar3 from '../../../assets/images/banner/3.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bannar1} className="w-full h-[500px] rounded-lg" />
                    <div className="absolute top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] flex items-center">
                        <div className="w-1/2 space-y-7 px-10 py-24">
                            <div className="title text-5xl text-white font-bold">Affordable Price For Car Servicing</div>

                            <div className="sub-title text-slate-50">There are many variations of passages of  available, but the majority have suffered alteration in some form</div>

                            <div className="flex">
                                <button className='btn bg-[#FF3811] text-white border-0 '>Discover More</button>
                                <button className='btn bg-transparent border-1 border-[rgb(255,255,255)] text-white mx-4'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex transform -translate-y-1/2  right-3 gap-4 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/*  */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bannar2} className="w-full h-[500px] rounded-lg" />
                    <div className="absolute top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] flex items-center">
                        <div className="w-1/2 space-y-7 px-10 py-24">
                            <div className="title text-5xl text-white font-bold">Affordable Price For Car Servicing</div>

                            <div className="sub-title text-slate-50">There are many variations of passages of  available, but the majority have suffered alteration in some form</div>

                            <div className="flex">
                                <button className='btn bg-[#FF3811] text-white border-0 '>Discover More</button>
                                <button className='btn bg-transparent border-1 border-[rgb(255,255,255)] text-white mx-4'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex transform -translate-y-1/2  right-3 gap-4 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/*  */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bannar3} className="w-full h-[500px] rounded-lg" />
                    <div className="absolute top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] flex items-center">
                        <div className="w-1/2 space-y-7 px-10 py-24">
                            <div className="title text-5xl text-white font-bold">Affordable Price For Car Servicing</div>

                            <div className="sub-title text-slate-50">There are many variations of passages of  available, but the majority have suffered alteration in some form</div>

                            <div className="flex">
                                <button className='btn bg-[#FF3811] text-white border-0 '>Discover More</button>
                                <button className='btn bg-transparent border-1 border-[rgb(255,255,255)] text-white mx-4'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex transform -translate-y-1/2  right-3 gap-4 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;