import FaceBook from "../Icons/facebook";
import LongArrow from "../Icons/longarrow";
import Instagram from "../Icons/instagram";
import LinkedIn from "../Icons/linkedin";
import BE from "../Icons/BE";
import ArrowUpRight from "../Icons/arrowupright";
import Link from "next/link";
export default function Talk() {
  return (
    <div className="max-w-7xl mx-auto py-10.5 px-4 md:px-0 flex flex-col md:flex-row items-center gap-10 md:gap-0">
      <div className="w-full md:w-[60%] flex flex-col gap-7.5 md:gap-12">
        <div className="text-center md:text-left">
          <p className="text-[50px] font-sora md:text-[100px] font-bold leading-none">
            Let's <span className="text-primary font-normal">TALK</span>
          </p>
        </div>
        <div className="md:ml-[35%] text-center md:text-left">
          <p className="text-base md:text-xl text-gray-800 font-sora">
            Crafting a contact text for a digital agency involvesproviding
            esential information for potential clients or collaborators to reach
            out.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
          <p className="text-base font-sora md:text-xl font-semibold text-primary">
            Lets Connect!
          </p>
          <div className="hidden md:block">
            <LongArrow />
          </div>
          <div className="flex gap-4">
            <Link
              href={"/"}
              className="w-10.5 h-10.5 bg-white border hover:text-white hover:bg-black cursor-pointer text-black border-neutral-200 rounded-full flex justify-center items-center"
            >
              <FaceBook fill="currentColor" />
            </Link>
            <Link
              href={"/"}
              className="w-10.5 h-10.5 bg-white border hover:text-white hover:bg-black cursor-pointer text-black border-neutral-200 rounded-full flex justify-center items-center"
            >
              <Instagram fill="currentColor" />
            </Link>
            <Link
              href={"/"}
              className="w-10.5 h-10.5 bg-white border hover:text-white hover:bg-black cursor-pointer text-black border-neutral-200 rounded-full flex justify-center items-center"
            >
              <LinkedIn fill="currentColor" />
            </Link>
            <Link
              href={"/"}
              className="w-10.5 h-10.5 bg-white border hover:text-white hover:bg-black cursor-pointer text-black border-neutral-200 rounded-full flex justify-center items-center"
            >
              <BE fill="currentColor" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[40%] flex items-center justify-center md:justify-end">
        <Link href="/contactus">
          <div className="w-20 h-20 md:w-30 md:h-30 group flex items-end justify-center ">
            <div className="bg-primary rounded-full w-20 h-20 md:w-30 md:h-30 flex flex-col justify-center items-center   ">
              <span className="group-hover:rotate-45 duration-300">
                <ArrowUpRight />
              </span>
              <p className="text-white text-[12px] md:text-[16px] leading-3.75 w-14 text-center pt-1">
                Contact Now
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
