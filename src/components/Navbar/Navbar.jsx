import React from "react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-4/5 pt-10 m-auto navbar 2xl:px-10">
            <div className="flex items-center gap-20">
                <h1 className="text-textColor text-[35px]">
                    <strong>NEGO</strong>
                </h1>
                <div className="flex gap-6 menu">
                    <li className="text-lg font-normal menulist text-textColor hover:font-semibold">
                        Pricing
                    </li>
                    <li className="text-lg font-normal menulist text-textColor hover:font-semibold">
                        Company
                    </li>
                    <li className="text-lg font-normal menulist text-textColor hover:font-semibold">
                        Contact Us
                    </li>
                    <li className="text-lg font-normal menulist text-textColor hover:font-semibold">
                        Blog
                    </li>
                </div>
            </div>
            <div className="flex items-center gap-8 text-lg">
                <span className="hover:font-semibold">Login</span>
                <button className="h-full py-4 text-white rounded-full bg-textColor outline outline-offset-1 px-9 hover:bg-white hover:text-textColor">
                    Book a Demo
                </button>
            </div>
        </div>
    );
};

export default Navbar;
