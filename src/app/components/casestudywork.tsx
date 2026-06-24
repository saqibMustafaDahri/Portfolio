import Image from "next/image";
import ArrowUpRight from "../Icons/arrowupright";

export default function CaseStudyWork() {
    return (

        <div className="max-w-7xl mx-auto grid gap-[24px] md:gap-[48px] mt-[24px] md:mt-[48px] px-4 xl:px-0">
            <div className="flex flex-col md:flex-row justify-between gap-[24px] md:gap-0">
                <div className="w-full md:w-[584px] h-auto md:h-[560px]">
                    <Image
                        src="/work1.png"
                        alt="box"
                        width={584}
                        height={560}
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full md:w-[584px] h-auto md:h-[560px]">
                    <Image
                        src="/work2.png"
                        alt="box"
                        width={584}
                        height={560}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
            <div>
                <div className="relative w-full h-[300px] md:h-[560px] border border-[#D4D4D4] overflow-hidden py-4 bg-white">
                    <div className="relative w-full h-full">
                        <Image
                            src="/work3.png"
                            alt="Case study work preview"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-[24px] md:gap-0">
                <div className="w-full md:w-[584px] h-auto md:h-[560px]">
                    <Image src="/work4.png" alt="box" width={584} height={560} className="w-full h-auto object-cover" />
                </div>
                <div className="w-full md:w-[584px] h-auto md:h-[560px]">
                    <Image src="/work5.png" alt="box" width={584} height={560} className="w-full h-auto object-cover" />
                </div>
            </div>
            <div className="w-full h-auto md:h-[190px] flex items-center md:items-end justify-center py-[40px] md:py-0">
                <div className="bg-primary rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform"> <ArrowUpRight /> <p className="text-white text-[14px] md:text-[16px] leading-[15px] w-[56px] text-center pt-1">See All Work</p></div>
            </div>
        </div>
    );
}