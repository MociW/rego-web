import React from "react";
import { GoRocket } from "react-icons/go";
import { PiSealCheckFill } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { FaEthernet } from "react-icons/fa";

const Price = () => {
    return (
        <div className="h-[90vh] 2xl:bg-[image:linear-gradient(to_bottom,#005461_0%,#005461_60%,#F2EDE6_60%,#F2EDE6_100%)] xl:bg-[image:linear-gradient(to_bottom,#005461_0%,#005461_70%,#F2EDE6_70%,#F2EDE6_100%)]">
            <div className="flex flex-col items-center justify-center w-4/5 gap-40 m-auto">
                <div>
                    <h1 className="mb-3 text-4xl font-semibold text-center text-white">
                        Simple Pricing
                    </h1>
                    <p className="font-normal text-center text-white">
                        No Credit required. Cancel any time
                    </p>
                </div>
                <div className="2xl:h-[55vh] xl:h-[70vh] bg-white rounded-[2rem] flex justify-between">
                    <div className="h-[50vh] w-[28rem] rounded-[2rem] p-10 flex flex-col gap-6">
                        <div className="flex items-center justify-start gap-4">
                            <GoRocket className="text-white text-7xl bg-[#377D8E] p-3 rounded-xl" />
                            <span className="text-5xl font-normal text-textColor">Free</span>
                        </div>
                        <p>
                            Starter plan to manage your one category and try everthing Sortler has
                            to offer
                        </p>
                        <div className="mb-1 font-semibold text-center">
                            <span className="text-2xl">$</span>
                            <span className="text-4xl">0 </span>
                            <span className="font-medium dark:text-gray-600">/ free forever</span>
                        </div>
                        <button className="py-4 w-[90%] rounded-full bg-buttonColor text-textColor px-9 hover:bg-white hover:outline hover:text-textColor">
                            Book a Demo
                        </button>
                        <div className="flex-grow border-t border-gray-400 w-[90%]"></div>
                        <div className="flex gap-2">
                            <PiSealCheckFill className="text-2xl text-mainColor" />
                            <span>Up to 1K products included</span>
                        </div>
                        <div className="flex gap-2">
                            <PiSealCheckFill className="text-2xl text-mainColor" />
                            <span>1 category included</span>
                        </div>
                        <div className="flex gap-2">
                            <PiSealCheckFill className="text-2xl text-mainColor" />
                            <span>1 staff account included</span>
                        </div>
                        <div className="flex gap-2">
                            <PiSealCheckFill className="text-2xl text-mainColor" />
                            <span>Indexation: ones a day</span>
                        </div>
                    </div>
                    <div className="2xl:h-[55vh] xl:h-[70vh] w-[28rem] bg-[#377D8E] rounded-[2rem] -mt-24 p-10 flex flex-col gap-6">
                        <div className="flex items-center justify-start gap-4">
                            <FaComputer className="p-3 text-white text-7xl bg-textColor rounded-xl" />
                            <span className="text-5xl font-normal text-white">Business</span>
                        </div>
                        <p className="text-white">
                            More power with thouthands products and dozens of categories
                        </p>
                        <div className="mb-1 font-semibold text-center">
                            <span className="text-2xl text-white">$</span>
                            <span className="text-4xl text-white">39 </span>
                            <span className="font-normal text-white">/ month billed monthly</span>
                        </div>
                        <button className="py-4 w-[90%] rounded-full bg-buttonColor text-textColor px-9 hover:bg-white hover:outline hover:text-textColor">
                            Book a Demo
                        </button>
                        <div className="flex-grow border-t border-gray-400 w-[90%]"></div>
                        <div className="flex gap-2 text-white">
                            <PiSealCheckFill className="text-2xl text-mainColor" />
                            <span>Up to 100K products included</span>
                        </div>
                        <div className="flex gap-2 text-white">
                            <PiSealCheckFill className="text-2xl text-mainColor" />
                            <span>Up to 50K category included</span>
                        </div>
                        <div className="flex gap-2 text-white">
                            <PiSealCheckFill className="text-2xl text-mainColor" />
                            <span>3 staff account included</span>
                        </div>
                        <div className="flex gap-2 text-white">
                            <PiSealCheckFill className="text-2xl text-mainColor" />
                            <span>Indexation: twice a day</span>
                        </div>
                    </div>
                    <div className="h-[55vh] w-[28rem]  rounded-[2rem] p-10 flex flex-col gap-6">
                        <div className="flex items-center justify-start gap-4">
                            <FaEthernet className="text-white text-7xl bg-[#377D8E] p-3 rounded-xl" />
                            <span className="text-5xl font-normal text-textColor">Advanced</span>
                        </div>
                        <p>A lot of categories and products, premium support and more...</p>
                        <div className="mb-1 font-semibold text-center">
                            <span className="text-2xl">$</span>
                            <span className="text-4xl">99 </span>
                            <span className="font-medium dark:text-gray-600">
                                / month billed monthly
                            </span>
                        </div>
                        <button className="py-4 w-[90%] rounded-full bg-buttonColor text-textColor px-9 hover:bg-white hover:outline hover:text-textColor">
                            Book a Demo
                        </button>
                        <div className="flex-grow border-t border-gray-400 w-[90%]"></div>
                        <div className="flex gap-2">
                            <PiSealCheckFill className="text-2xl text-mainColor" />
                            <span>Up to 1K products included</span>
                        </div>
                        <div className="flex gap-2">
                            <PiSealCheckFill className="text-2xl text-mainColor" />
                            <span>1 category included</span>
                        </div>
                        <div className="flex gap-2">
                            <PiSealCheckFill className="text-2xl text-mainColor" />
                            <span>1 staff account included</span>
                        </div>
                        <div className="flex gap-2">
                            <PiSealCheckFill className="text-2xl text-mainColor" />
                            <span>Indexation: ones a day</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;
