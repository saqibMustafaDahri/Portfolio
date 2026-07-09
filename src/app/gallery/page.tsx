import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import GallerySection from "../components/gallerysection";

export default function Accelerate() {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto md:mb-[128px] md:mt-[32px] p-[16px] md:p-[0] ">
                <div className="flex  items-center height-[36px]  gap-[10px]">
                    <div className=" h-[36px] bg-primary flex justify-center items-center  rounded-full py-[10px] px-[20px] ">
                        <p className="text-white text-[16px] ">Creative Gallery</p>
                    </div>
                    <div className="w-[150px] h-[1px] bg-gradient-to-r from-primary to-white opacity-100" />
                </div>
                <div className="mb-[60px] flex justify-center">
                    <h2 className="text-[32px] md:text-[60px] font-semibold">Range across formats, industries, and audiences.</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-[20px] gap-[40px]">
                    <div className=" w-full border-[1px] border-[#D4D4D4] ">
                        <Image
                            src="/gallery/galleryhero.png"
                            alt="box"
                            width={1512}
                            height={2064}
                        // className="w-full h-[560px]"
                        />
                    </div>

                </div>
                <GallerySection />
            </div>
            <Footer />

        </>
    );
}