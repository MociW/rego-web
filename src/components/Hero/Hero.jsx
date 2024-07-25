import React from "react";
import img from "../../assets/home.png";

const Hero = () => {
    return (
        <div className="flex h-[80vh] w-4/5 m-auto">
            <div className="right w-[50%]  flex flex-col gap-8 py-40 pl-1">
                <div>
                    <h1 className="text-7xl font-semibold leading-[5rem]">
                        Online calatog
                        <strong className="block font-semibold text-6xl">management tool</strong>
                    </h1>
                </div>
                <div className="">
                    <p className="w-[90%] text-lg">
                        Skyrocket your online store conversion rate the customer experience with
                        visual merchandising
                    </p>
                </div>
                <div className="flex gap-8 text-lg items-center">
                    <button className="bg-buttonColor text-textColor h-full py-4 px-9 rounded-full hover:bg-white hover:text-textColor">
                        Book a Demo
                    </button>
                    <button className="outline outline-1 py-4 px-9 rounded-full">
                        Ask a Question
                    </button>
                </div>
            </div>
            <div className="left w-[50%] flex items-center justify-center">
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
