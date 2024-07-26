import React from "react";
import { FaConnectdevelop } from "react-icons/fa6";
import { PiTShirtDuotone } from "react-icons/pi";
import { RiFileCodeLine } from "react-icons/ri";
import { PiAndroidLogoDuotone } from "react-icons/pi";
import { LuDatabaseBackup } from "react-icons/lu";
import { TbClock24 } from "react-icons/tb";

const Benefit = () => {
    return (
        <div className="bg-mainColor">
            <div className="w-4/5 pb-32 m-auto">
                <div className="flex flex-col items-center justify-center gap-20">
                    <h1 className="text-4xl font-semibold text-white">Benefits</h1>
                    <div className="grid grid-cols-3 gap-px bg-white">
                        <div className="flex items-start justify-start pb-20 pr-12 bg-mainColor">
                            <div>
                                <FaConnectdevelop className="text-white text-8xl bg-[#377D8E] p-2 rounded-xl" />
                                <h1 className="mt-10 mb-2 text-3xl font-normal text-white">
                                    Compabillty
                                </h1>
                                <p className="w-[80%] text-sm font-thin text-white">
                                    Sortler supports all popular eCommerce solutions, including
                                    Magneto, Shopify, WooCommerce, BigCommerce
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-center px-12 pb-20 text-white bg-mainColor">
                            <div>
                                <PiTShirtDuotone className="text-white text-8xl bg-[#377D8E] p-2 rounded-xl" />
                                <h1 className="mt-10 mb-2 text-3xl font-normal text-white">
                                    Simplified Merchandising
                                </h1>
                                <p className="w-[80%] text-sm font-thin text-white">
                                    Your employees, work faster and the less time they spend on
                                    online visual merchandising tasks.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-center px-12 pb-20 text-white bg-mainColor">
                            <div>
                                <RiFileCodeLine className="text-white text-8xl bg-[#377D8E] p-2 rounded-xl" />
                                <h1 className="mt-10 mb-2 text-3xl font-normal text-white">
                                    No coding Required
                                </h1>
                                <p className="w-[80%] text-sm font-thin text-white">
                                    Everthing is designed in such a way as to put the smart sorting
                                    system into operation without delay.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-start pt-20 pr-12 text-2xl text-white bg-mainColor">
                            <div>
                                <PiAndroidLogoDuotone className="text-white text-8xl bg-[#377D8E] p-2 rounded-xl" />
                                <h1 className="mt-10 mb-2 text-xl font-normal text-white">
                                    Built-in emulator
                                </h1>
                                <p className="w-[80%] text-sm font-thin text-white">
                                    Sortler provides you with a special emulator that shows all
                                    changes before they are applied to your live website.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-start px-12 pt-20 text-2xl text-white bg-mainColor">
                            <div>
                                <LuDatabaseBackup className="text-white text-8xl bg-[#377D8E] p-2 rounded-xl" />
                                <h1 className="mt-10 mb-2 text-xl font-normal text-white">
                                    Backup feature
                                </h1>
                                <p className="w-[80%] text-sm font-thin text-white">
                                    Our visual product sorting tool has a backup feature to undo the
                                    changes made. So you actually risk nothing.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-start px-12 pt-20 text-2xl text-white bg-mainColor">
                            <div>
                                <TbClock24 className="text-white text-8xl bg-[#377D8E] p-2 rounded-xl" />
                                <h1 className="mt-10 mb-2 text-xl font-normal text-white">
                                    Round-the-clock support
                                </h1>
                                <p className="w-[80%] text-sm font-thin text-white">
                                    Being in touch 24/7, were ready to answer your questions in
                                    real-time whenever you need.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;
