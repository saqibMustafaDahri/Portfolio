import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import OverViewSection from "../components/overviewsection";

export default function IndustrialBrand() {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto mb-[128px] md:mt-[32px] p-[16px] md:p-[0] ">
                <div className="flex  items-center height-[36px]  gap-[10px]">
                    <div className="h-[36px] bg-primary flex justify-center items-center  rounded-full py-[10px] px-[20px] ">
                        <p className="text-white text-[16px] whitespace-nowrap">Industrial Brand Ecosystem</p>
                    </div>
                    <div className="w-[150px] h-[1px] bg-gradient-to-r from-primary to-white opacity-100" />
                </div>
                <div className="mb-[60px] flex justify-center">
                    <h2 className="text-[32px] md:text-[60px] font-semibold">Brand Development • Multi-Brand Marketing • B2B Strategy</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-[20px] gap-[40px]">
                    <div className=" w-full ">
                        <Image
                            src="/industrial1.png"
                            alt="box"
                            width={1512}
                            height={2064}
                        // className="w-full h-[560px]"
                        />
                    </div>

                </div>
                <div className="w-full flex flex-col md:flex-row md:justify-between gap-4 mt-[24px]">
                    <div className="relative w-full md:w-[292px] h-[116px] border border-[#D4D4D4]">
                        <Image
                            src="/global.png"
                            alt="Global"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="relative w-full md:w-[292px] h-[116px] border border-[#D4D4D4]">
                        <Image
                            src="/conical.png"
                            alt="Conical"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="relative w-full md:w-[292px] h-[116px] border border-[#D4D4D4]">
                        <Image
                            src="/abrasives.png"
                            alt="Abrasives"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="relative w-full md:w-[292px] h-[116px] border border-[#D4D4D4]">
                        <Image
                            src="/elite.png"
                            alt="Elite"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
                <OverViewSection />

            </div>
            <Footer />
        </>
    );
}