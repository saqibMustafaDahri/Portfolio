import FaceBook from "../Icons/facebook";
import LongArrow from "../Icons/longarrow";
import Instagram from "../Icons/instagram";
import LinkedIn from "../Icons/linkedin";
import BE from "../Icons/BE";
import ArrowUpRight from "../Icons/arrowupright";
export default function Talk() {
    return (
        <div className="max-w-7xl mx-auto py-[42px] px-4 md:px-0 flex flex-col md:flex-row items-center gap-10 md:gap-0">
            <div className="w-full md:w-[60%] flex flex-col gap-[30px] md:gap-[48px]">
                <div className="text-center md:text-left">
                    <p className="text-[50px] md:text-[100px] font-bold leading-none">Let's <span className="text-primary">TALK</span></p>
                </div>
                <div className="md:ml-[35%] text-center md:text-left">
                    <p className="text-[16px] md:text-[20px] text-[#1F2937]">Crafting a contact text for a digital agency
                        involvesproviding esential information for potential
                        clients or collaborators to reach out.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[32px]">
                    <p className="text-[16px] md:text-[20px] font-semibold text-primary">Lets Connect!</p>
                    <div className="hidden md:block"><LongArrow /></div>
                    <div className="flex gap-[16px]">
                        <div className="w-[42px] h-[42px] bg-black rounded-full flex justify-center items-center"><FaceBook /></div>
                        <div className="w-[42px] h-[42px] bg-black rounded-full flex justify-center items-center"><Instagram /></div>
                        <div className="w-[42px] h-[42px] bg-black rounded-full flex justify-center items-center"><LinkedIn /></div>
                        <div className="w-[42px] h-[42px] bg-black rounded-full flex justify-center items-center"><BE /></div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[40%] flex items-center justify-center md:justify-end">
                <div className=" w-[120px] h-[120px]  flex items-end justify-center ">
                    <div className="bg-primary rounded-full w-[120px] h-[120px] flex flex-col justify-center items-center   "> <ArrowUpRight /> <p className="text-white text-[16px] leading-[15px] w-[56px] text-center pt-1">Contact Now</p></div>
                </div>
            </div>
        </div>
    );
}