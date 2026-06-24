import ArrowRight from "../Icons/arrowright";
import Location from "../Icons/location";
import Mail from "../Icons/mail";
import Phone from "../Icons/phone";
import Link from "next/link";
export default function ContactUsForm() {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-0">
            <div className="w-full lg:w-auto text-center lg:text-left">
                <h2 className="text-black text-[32px] md:text-[48px] font-bold">General <span className="text-primary">Enquiries.</span></h2>
                <p className="text-[16px] md:text-[20px] text-[#374151]">For customer questions, feedback or store information.</p>
                <div className="py-[20px] px-[16px] md:py-[32px] md:px-[28px] border-[1px] border-primary bg-[#FCEBEB] mt-[20px]">
                    <ul className="flex flex-col gap-[12px]">
                        <div className="flex gap-[12px]">
                            <Phone />
                            <li className="text-primary text-[20px]">+092-177-234 5432</li>
                        </div>
                        <div className="flex gap-[12px]">
                            <Mail />
                            <li className="text-primary text-[20px]">infoexample@gmail.com</li>
                        </div>
                        <div className="flex gap-[12px]">
                            <Location />
                            <li className="text-primary text-[20px]">Canada City, Office-02, Road-11, House-3B/B</li>
                        </div>

                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-[24px] w-full lg:w-[576px]">
                <div className="w-full">
                    <p className="text-black text-[18px] font-semibold">Full Name</p>
                    <input type="text" placeholder="jane cooper" className="border-b-[2px]  w-full" />
                </div>
                <div className="flex flex-col md:flex-row gap-[30px]">
                    <div className="w-full">
                        <p className="text-black text-[18px] font-semibold">Company name</p>
                        <input type="text" placeholder="Company name" className="border-b-[2px] w-full" />
                    </div>
                    <div className="w-full">
                        <p className="text-black text-[18px] font-semibold">Email</p>
                        <input type="text" placeholder="you@example.com" className="border-b-[2px] w-full" />
                    </div>

                </div>
                <div>
                    <p className="text-black text-[18px] font-semibold">Project Budget</p>
                    <input type="text" placeholder="Project Budget" className="border-b-[2px]  w-full" />
                </div>
                <div >
                    <p className="text-black text-[18px] font-semibold">Project Detail</p>
                    <textarea placeholder="Project Detail" className=" border-b-[2px] w-full" />
                </div>
                <Link
                    href="/casestudy"
                    className=" w-[200px]  inline-flex items-center gap-[12px] bg-primary  text-white font-medium px-[24px] py-[16px] rounded-full md:mx-0 mx-auto "
                >
                    <span >Send Message</span>
                    <ArrowRight />
                </Link>
            </div>
        </div>
    );
}