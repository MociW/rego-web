import React from "react";

const Navbar = () => {
    return (
        <div className="navbar w-4/5 m-auto flex justify-between items-center pt-10 px-10">
            <div className="flex gap-20 items-center">
                <h1 className="text-textColor text-[35px]">
                    <strong>NEGO</strong>
                </h1>
                <div className="menu flex gap-6">
                    <li className="menulist text-textColor text-lg font-normal hover:font-semibold">
                        Pricing
                    </li>
                    <li className="menulist text-textColor text-lg font-normal hover:font-semibold">
                        Company
                    </li>
                    <li className="menulist text-textColor text-lg font-normal hover:font-semibold">
                        Contact Us
                    </li>
                    <li className="menulist text-textColor text-lg font-normal hover:font-semibold">
                        Blog
                    </li>
                </div>
            </div>
            <div className="flex gap-8 text-lg items-center">
                <span className="hover:font-semibold">Login</span>
                <button className="bg-textColor outline outline-offset-1 text-white h-full py-4 px-9 rounded-full hover:bg-white hover:text-textColor">
                    Book a Demo
                </button>
            </div>
        </div>
    );
};

export default Navbar;
