import Image from "next/image";
import Details from "./details";
export default function Marketing() {
    return (
        <div className="max-w-7xl mx-auto  md:p-[32px]">
            <div className="flex justify-center items-center height-[36px] w-[293px] gap-[10px]">
                <div className="w-[133px] h-[36px] bg-primary flex justify-center items-center p-[10px] rounded-full ">
                    <p className="text-white text-[16px] leading-[160%]">Marketing</p>
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-primary to-white opacity-100" />
            </div>
            <div className="mb-[60px] flex justify-center">
                <h2 className="text-[32px] md:text-[60px] font-semibold">From Idea to Impact Name Project Success.</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] gap-[40px]">
                <div className=" w-full md:w-[584px] md:h-[560]">
                    <Image
                        src="/projectsuccess.png"
                        alt="box"
                        width={584}
                        height={560}
                    />
                </div>
                <div className=" w-full  md:w-[584px] md:h-[560]">
                    <Image
                        src="/projectsuccess.png"
                        alt="box"
                        width={584}
                        height={560}
                    />
                </div>
            </div>
            <Details />
        </div>
    );
}