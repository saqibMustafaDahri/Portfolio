import Image from "next/image";
import Check from "../Icons/check";
export default function Details() {
    return (
        <div className="max-w-7xl mx-auto grid gap-[48px]  mt-[48px] ">
            <div className="flex flex-col gap-[24px]">
                <h2 className="text-[32px] md:text-[48px] font-semibold">Main Introduction.</h2>
                <p className="text-[20px] text-[#374151]">A s we reflect on this achievement, we look forward to continuing our journey of digital innovation, creating transformative solutions, and shaping the future of the digital landscape. Celebrating a major milestone in digital services is a significant occasion .
                    <br /><br />
                    This milestone is a testament to the hard work, creativity, and dedication of our incredible team and the unwavering support from our clients and partners. We are grateful for the trust placed in us and the collaborative efforts that have fueled our success.

                </p>
            </div>
            <div className="flex flex-col gap-[24px]">
                <h2 className="text-[32px] md:text-[48px] font-semibold">Challenage or Problem.</h2>
                <p className="text-[20px] text-[#374151]">When creating a detailed case study, it’s important to provide comprehensive information that communicates the story of the project, including the challenges faced, the solutions implemented, and the achieved results.
                </p>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-white opacity-100" />
            <div className="flex flex-col gap-[24px]">
                <h2 className="text-[32px] md:text-[48px] font-semibold">Objectives & Goals.</h2>
                <p className="text-[20px] text-[#374151]">When creating a detailed case study, it’s important to provide comprehensive information that communicates the story of the project.
                </p>
                <ul className="text-[20px] text-[#374151] grid gap-[12px]">
                    <div className="flex flex-row items-center  gap-[12px]">
                        <Check />
                        <li >The digital agency landscape is highly competitive, requiring agencies to differentiate themselves.</li>
                    </div>
                    <div className="flex flex-row items-center gap-[12px]">
                        <Check />
                        <li>With a focus on technology, digital agencies have teams skilled in web development.</li>
                    </div>
                </ul>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-white opacity-100" />
            <div className=" md:grid grid-cols-3 md:gap-[40px] gap-[20px] ">
                <Image
                    src="/projectsuccess.png"
                    alt="box"
                    width={380}
                    height={380}
                />
                <Image
                    src="/projectsuccess.png"
                    alt="box"
                    width={380}
                    height={380}
                />
                <Image
                    src="/work2.png"
                    alt="box"
                    width={380}
                    height={380}
                />
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-white opacity-100" />
            <div className="flex flex-col gap-[24px]">
                <h2 className="text-[32px] md:text-[48px] font-semibold">Case Solution.</h2>
                <p className="text-[20px] text-[#374151]">When creating a detailed case study, it’s important to provide comprehensive information that communicates the story of the project.
                </p>
                <ul className="text-[20px] text-[#374151] grid gap-[12px]">
                    <div className="flex flex-row items-center gap-[12px]">
                        <Check />
                        <li >Digital agencies explore innovative strategies and technologies to keep campaigns fresh.</li>
                    </div>
                    <div className="flex flex-row items-center gap-[12px]">
                        <Check />
                        <li>With a focus on technology, digital agencies have teams skilled in web development.</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}