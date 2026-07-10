import Image from "next/image";
import ArrowUpRight from "../Icons/arrowupright";
export default function AboutUsHeader() {
  return (
    <div className="max-w-7xl mx-auto md:h-screen flex flex-col md:grid md:gap-25 px-4 md:px-0 md:pt-8">
      <div className="flex flex-col gap-6 mb-8 md:mb-0">
        <h2 className="text-black text-[40px] md:text-[80px] font-semibold leading-[120%] tracking-[-4%] font-sora text-center md:text-left">
          We provides a range of services related to{" "}
          <span className="text-primary">
            digital marketing, online presence, & technology.
          </span>
        </h2>
      </div>
      <div className="relative w-full mb-2.5">
        <Image
          src="/Subtract.png"
          alt="group"
          width={1216}
          height={480}
          className="w-full h-auto "
        />

        <div className="absolute top-[-19%] md:-top-12 right-[17%] md:right-62.5 w-12.5 h-12.5 sm:w-25 sm:h-25 md:w-30 cursor-pointer md:h-30 group">
          <div className="bg-primary rounded-full w-full h-full flex flex-col justify-center items-center shadow-lg">
            <div className="md:block hidden group-hover:rotate-45 duration-300">
              <ArrowUpRight />
            </div>
            <p className="text-white text-[10px] sm:text-[10px] md:text-[16px] leading-tight px-2 text-center pt-1">
              Get In Touch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
