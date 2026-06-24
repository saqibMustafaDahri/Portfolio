import CaseStudyWork from "./casestudywork";

export default function CaseStudy() {
    return (
        <div className="w-full bg-[#FAFAFA] px-4 md:px-[116px] py-[40px] md:py-[96px]">
            <div className="max-w-7xl mx-auto flex items-center justify-center py-8 md:py-16">
                <div className="relative h-auto w-fit px-4 text-center">
                    <h1 className="text-[40px] md:text-[100px] font-black text-[#171717] tracking-tight leading-none">
                        Our Case Studies.
                    </h1>
                    <div className="absolute top-[-30px] left-[50%] -translate-x-1/2 md:translate-x-0 md:top-[-20px] md:left-[38%] h-[35px] w-[140px] md:h-[55px] md:w-[255px] bg-primary flex items-center justify-center rounded-full border-[3px] md:border-[5px] border-white shadow-[0px_8px_25px_0px_rgba(0,0,0,0.25)] -rotate-[11deg] z-20 transition-transform duration-300 hover:scale-105">
                        <p className="text-[14px] md:text-[23.33px] font-medium text-white tracking-wide whitespace-nowrap">
                            Most Premium
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                <div className="w-full md:w-[526px] text-center md:text-left">
                    <h3 className="text-[18px] md:text-[24px]">We partner with bold brands to create unforgettable identities and experiences.</h3>
                </div>

                <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-0 w-full md:w-[374px]">
                    <div className="w-[100px] md:w-[106px] h-[32px] bg-primary rounded-full flex items-center justify-center"><p className="text-white text-[14px] md:text-[16px]">Dribble</p></div>
                    <div className="w-[100px] md:w-[106px] h-[32px] bg-primary rounded-full flex items-center justify-center"><p className="text-white text-[14px] md:text-[16px]">Behance</p></div>
                    <div className="w-[100px] md:w-[106px] h-[32px] bg-primary rounded-full flex items-center justify-center"><p className="text-white text-[14px] md:text-[16px]">Pinterest</p></div>
                </div>
            </div>
            <CaseStudyWork />
        </div>
    );

}