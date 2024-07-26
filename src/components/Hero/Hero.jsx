import React from "react";
import img from "../../assets/home.png";

const Hero = () => {
    return (
        <div className="flex h-[80vh] w-4/5 m-auto justify-center">
            <div className="right w-[50%] 2xl:w-[45%] flex flex-col gap-8 py-40 2xl: 2xl:py-60">
                <div>
                    <h1 className="text-7xl font-semibold leading-[5rem]">
                        Online calatog
                        <strong className="block text-6xl font-semibold">management tool</strong>
                    </h1>
                </div>
                <div className="">
                    <p className="xl:w-[90%] 2xl:w-[80%] text-lg">
                        Skyrocket your online store conversion rate the customer experience with
                        visual merchandising
                    </p>
                </div>
                <div className="flex items-center gap-8 text-lg">
                    <button className="h-full py-4 rounded-full bg-buttonColor text-textColor px-9 hover:bg-white hover:outline hover:text-textColor">
                        Book a Demo
                    </button>
                    <button className="py-4 rounded-full outline outline-1 px-9">
                        Ask a Question
                    </button>
                </div>
            </div>
            <div className="left w-[50%] 2xl:w-[45%] flex items-center justify-center xl:pl-10 2xl:">
                <img
                    src={img}
                    alt=""
                    className="w-full h-[70%] object-cover object-top rounded-lg"
                />
            </div>
        </div>
    );
};

export default Hero;
