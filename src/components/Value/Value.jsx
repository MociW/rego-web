import React from "react";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { LiaCalendarTimesSolid } from "react-icons/lia";

const Value = () => {
    return (
        <div className="bg-mainColor">
            <div className="w-4/5 m-auto py-32">
                <div className="flex flex-col items-center justify-center gap-36">
                    <h1 className="text-4xl text-white font-normal">
                        Merchandising to increase sales.
                    </h1>
                    <div className="h-60 grid grid-cols-3 content-end gap-8">
                        <div className="w-70 flex flex-col items-center justify-center gap-8">
                            <FaMoneyBillWheat className="text-[150px] text-secColor" />
                            <h1 className="text-2xl text-center w-[60%] text-white">
                                Conversion rate skyrokects.
                            </h1>
                            <p className="text-center text-white">
                                Convert more online sales with our visual merchandising interface.
                            </p>
                        </div>
                        <div className=" w-70 flex flex-col items-center justify-center gap-8">
                            <FaMoneyBillTrendUp className="text-[150px] text-secColor" />
                            <h1 className="text-2xl text-center w-[60%] text-white">
                                Increase average order value
                            </h1>
                            <p className="text-center text-white">
                                Increase average order value of your online store by 17% with this
                                little trick.
                            </p>
                        </div>
                        <div className=" w-70 flex flex-col items-center justify-center gap-8">
                            <LiaCalendarTimesSolid className="text-[150px] text-secColor" />
                            <h1 className="text-2xl text-center w-[60%] text-white">
                                Spend less time for management
                            </h1>
                            <p className="text-center text-white">
                                Let your employees spend less time managing the online selling it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Value;
