import Image from "next/image";
import ArrowDown from "../Icons/arrowdown";
import ArrowRight from "../Icons/arrowright";
import Link from "next/link";

export default function GetInTouch() {
    return (
        <div className="h-auto py-[60px] md:py-[128px] px-4 md:px-[148px]">
            <div className="max-w-7xl mx-auto h-auto md:h-[490px] bg-[#F5F5F5] p-[30px] md:p-[56px] flex flex-col md:flex-row justify-between items-center md:items-stretch gap-[40px] md:gap-[48px] border-[1px] border-[#D4D4D4] rounded-xl md:rounded-none">
                <div className="w-full md:w-[629px] flex flex-col justify-between text-center md:text-left gap-8 md:gap-0">
                    <div className="">
                        <h1 className="font-bold text-[32px] md:text-[48px] leading-[130%]">Creative marketing for brands that need clarity and momentum.</h1>
                        <h2 className="text-[16px] md:text-[20px] leading-[160%] mt-4 md:mt-0">Explore selected case studies showing how strategy, creative direction, and marketing execution come together to support business growth.
                        </h2>
                    </div>
                    <Link href={"/contactus"}>
                        <div className="bg-primary h-[56px] w-[186px] flex items-center justify-center rounded-full gap-[12px]  cursor-pointer py-[16px] px-[24px] mx-auto md:mx-0">
                            <p className="text-white text-[16px]">Get In Touch</p>
                            <ArrowRight />
                        </div>
                    </Link>
                </div>
                <div className="w-[80%] md:w-auto flex justify-center">
                    <Image src="/mobile.png" alt="box" width={386} height={500} className="mt-[5px] w-full h-auto object-contain max-h-[400px] md:max-h-full" />
                </div>

            </div>

        </div>
    );

}