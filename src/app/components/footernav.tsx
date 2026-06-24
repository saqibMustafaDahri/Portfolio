import Link from "next/link";
import BE from "@/app/Icons/BE";
import LinkedIn from "../Icons/linkedin";
import Instagram from "../Icons/instagram";
import FaceBook from "../Icons/facebook";
export default function FooterNav() {
    return (
        <nav className="max-w-7xl mx-auto flex justify-center  bg-transparent select-none">
            <div
                className="w-full min-h-[78px] px-4 md:px-7 py-4 md:py-[18px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 bg-white/[0.08] border border-white/[0.32] backdrop-blur-[3.5px] rounded-3xl md:rounded-[99px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            >

                <div className="flex flex-row flex-wrap justify-center items-center gap-[10px] md:gap-[18px]">

                    <Link href="/" className="font-['Sora'] font-normal text-[16px] md:text-[18px] leading-[22px] text-[#D4D4D4] hover:text-white ">
                        Home
                    </Link>

                    <span className="w-[1px] h-[15.5px] bg-white/20 hidden md:block" />

                    <Link href="/aboutpage" className="font-['Sora'] font-normal text-[16px] md:text-[18px] leading-[22px] text-[#D4D4D4] hover:text-white ">
                        About Us
                    </Link>

                    <span className="w-[1px] h-[15.5px] bg-white/20 hidden md:block" />

                    <Link href="/contactus" className="font-['Sora'] font-normal text-[16px] md:text-[18px] leading-[22px] text-[#D4D4D4] hover:text-white ">
                        Contact Us
                    </Link>

                </div>

                <div className="flex flex-row flex-wrap justify-center items-start gap-3">

                    <div className="w-42 h-42 flex items-center justify-center bg-white/[0.16] border border-white/[0.16] rounded-full text-white hover:bg-white/30 " style={{ width: '42px', height: '42px' }}>
                        <Link href="#" >
                            <FaceBook />
                        </Link>
                    </div>

                    <div className="w-42 h-42 flex items-center justify-center bg-white/[0.16] border border-white/[0.16] rounded-full text-white hover:bg-white/30 " style={{ width: '42px', height: '42px' }}>
                        <Link href="#" >
                            <Instagram />
                        </Link>
                    </div>

                    <div className="w-42 h-42 flex items-center justify-center bg-white/[0.16] border border-white/[0.16] rounded-full text-white hover:bg-white/30 " style={{ width: '42px', height: '42px' }}>
                        <Link href="#" >
                            <LinkedIn />
                        </Link>                    </div>

                    <div className="w-42 h-42 flex items-center justify-center bg-white/[0.16] border border-white/[0.16] rounded-full text-white hover:bg-white/30 " style={{ width: '42px', height: '42px' }}>
                        <Link href="#" >
                            <BE />
                        </Link>
                    </div>

                </div>

            </div>
        </nav>
    );
}