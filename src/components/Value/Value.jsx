import { FaMoneyBillWheat } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { LiaCalendarTimesSolid } from "react-icons/lia";

const Value = () => {
    return (
        <div className="bg-mainColor">
            <div className="w-4/5 py-32 m-auto">
                <div className="flex flex-col items-center justify-center gap-36">
                    <h1 className="text-4xl font-semibold text-white">
                        Merchandising to increase sales.
                    </h1>
                    <div className="grid content-end grid-cols-3 gap-8 h-60">
                        <div className="flex flex-col items-center justify-center gap-8 w-70">
                            <FaMoneyBillWheat className="text-[150px] text-secColor" />
                            <h1 className="text-2xl text-center w-[60%] text-white">
                                Conversion rate skyrokects.
                            </h1>
                            <p className="text-center text-white">
                                Convert more online sales with our visual merchandising interface.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-8 w-70">
                            <FaMoneyBillTrendUp className="text-[150px] text-secColor" />
                            <h1 className="text-2xl text-center w-[60%] text-white">
                                Increase average order value
                            </h1>
                            <p className="text-center text-white">
                                Increase average order value of your online store by 17% with this
                                little trick.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-8 w-70">
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
