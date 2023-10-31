import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect((() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }), [])
    return (
        <div>
            <div className="text-center">
                <div className="title space-y-4">
                    <div className="sec-tlt text-[#FF3811] font-black py-4">Service</div>
                    <div className="title text-4xl font-extrabold">Our Service Area</div>

                    <div className="sub-title">
                        the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable.
                    </div>

                </div>

                <main className="py-8">
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 place-content-center gap-4">
                            {
                                services.map(service => {
                                    return <div key={service.id} className="p-4 border border-[#E8E8E8] text-left space-y-4">
                                        <div className="img">
                                            <img src={service.img} className="w-full h-36" alt="" />
                                        </div>

                                        <div className="body space-y-4">
                                            <div className=" font-extrabold">{service.title}</div>
                                            <div className=" relative">
                                                <div className="price text-[#FF3811] font-bold text-sm"> Price: $ {service.price}</div>
                                                <div className="right-1 absolute top-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Services;