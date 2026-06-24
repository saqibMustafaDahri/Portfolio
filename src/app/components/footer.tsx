import Image from "next/image";
import FooterNav from "./footernav";
import MailArrow from "../Icons/mailarrow";
export default function Footer() {
    return (
        <div className="min-h-[526px] h-auto w-full bg-black pt-[48px] md:pt-[96px] pb-[48px] md:pb-0 grid gap-[38px] px-6 lg:px-0">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-60">
                <div className="h-auto md:h-[216px] grid gap-[20px]">
                    <div>
                        <Image src="logowhite.svg" alt="Logo" width={100} height={100} />

                    </div>
                    <div>
                        <p className="text-[18px] text-[#D4D4D4] leading-[160%] tracking-[0px]">Explore selected case studies showing how strategy, creative direction, and marketing execution come together to support business growth.
                            Explore selected case studies showing how strategy, creative direction, and marketing execution come together to support business growth.
                        </p>
                    </div>
                </div>
                <div >
                    <label className="font-['Poppins'] font-medium text-[20px] leading-[19px] tracking-[-0.32px] text-white uppercase inline-block mb-[23px]">
                        Subscribe
                    </label>
                    <div
                        className="w-full sm:w-[368px] h-[52px] pl-6 pr-2 pt-2 pb-2 flex items-center justify-between gap-[18px] rounded-[99px] border border-[#FFFFFF33] bg-[#FFFFFF29] backdrop-blur-[7px] transition-all duration-300 focus-within:border-primary/80"
                    >
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-transparent border-none outline-none text-white font-['Poppins'] font-medium text-[18px] placeholder-[#FFFFFF99] placeholder:font-normal"
                        />
                        <button
                            type="submit"
                            aria-label="Submit Email Address"
                            className="w-[36px] h-[36px] bg-primary flex-shrink-0 flex items-center justify-center rounded-full text-white shadow-md transition-transform active:scale-95"
                        >
                            <MailArrow />
                        </button>

                    </div>
                </div>
            </div>
            <div className="  grid gap-[42px]">
                <div >
                    <FooterNav />

                </div>

                <div className="px-6 lg:px-0 pb-6 md:pb-0">
                    <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto gap-4">
                        <p className="text-white text-center md:text-left text-sm md:text-base">© 2026 TR Portfolio. All rights reserved.</p>

                        <div >
                            <ul className="flex flex-wrap justify-center md:justify-end gap-[10px] md:gap-[20px] text-sm md:text-base">
                                <li className="text-white border-b border-white">Terms & Conditions</li>
                                <li className="text-white border-b border-white">Privacy Policy</li>
                                <li className="text-white border-b border-white">Cookies Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}