import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import MaryAnnOverViewSection from "../components/maryannoverviewsection";

export default function CustomerBrand() {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto mb-[128px] md:mt-[32px] p-[16px] md:p-[0] ">
                <div className="flex  items-center height-[36px]  gap-[10px]">
                    <div className=" h-[36px] bg-primary flex justify-center items-center  rounded-full py-[10px] px-[20px] whitespace-nowrap">
                        <p className="text-white text-[16px] ">Mary Ann's Chocolates</p>
                    </div>
                    <div className="w-[150px] h-[1px] bg-gradient-to-r from-primary to-white opacity-100" />
                </div>
                <div className="mb-[60px] flex justify-center">
                    <h2 className="text-[32px] md:text-[60px] font-semibold">Consumer Branding • Packaging • Retail Marketing</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-[20px] gap-[40px]">
                    <div className=" w-full border-[1px] border-[#D4D4D4] ">
                        <Image
                            src="/maryannhero.jpg"
                            alt="box"
                            width={1512}
                            height={2064}
                        // className="w-full h-[560px]"
                        />
                    </div>

                </div>
                <MaryAnnOverViewSection />

            </div>
            <Footer />

        </>
    );
}