import Business from "../Icons/business";
import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import Image from "next/image";
import Target from "../Icons/target";
import Idea from "../Icons/idea";
import Product from "../Icons/product";
export default function OverViewSection() {
    const ROLES = [
        "Brand Strategy",
        "Creative Direction",
        "Product Marketing",
        "Sales Enablement",
        "Website & Ecommerce",
        "Website & Ecommerce Support",
        "Content Development",
    ];
    function RolePill({ label }: { label: string }) {
        return (
            <div className=" px-[18px] py-[10px] rounded-full bg-white shadow-[0_0_25px_0_rgba(0,0,0,0.12)] flex items-center justify-center whitespace-nowrap">
                <p className="text-[18px]">{label}</p>
            </div>
        );
    }

    return (
        <>
            <div className="max-w-7xl mx-auto ">
                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[24px]">
                    <div className="flex items-center gap-[10px]">
                        <OverView />
                        <h1 className="text-[32px] md:text-[42px] font-semibold">Overview.</h1>
                    </div>
                    <div>
                        <p className="text-[20px]">Developed and supported a portfolio of industrial brands including Elite Abrasives, Lehigh Valley Abrasives, Conical Tool, Global Cutting Tools, and Industrial Tool Crib. Work spanned brand development, ecommerce, product marketing, sales enablement, and digital marketing across multiple channels.</p>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[24px]">
                    <div className="flex items-center gap-[10px]">
                        <Setting />
                        <h1 className="text-[32px] md:text-[42px] font-semibold">My<span className="text-primary"> Role.</span></h1>
                    </div>
                    <div className="flex flex-wrap gap-[16px]">
                        {ROLES.map((role) => (
                            <RolePill key={role} label={role} />
                        ))}
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[24px]">
                    <div className="flex items-center gap-[10px]">
                        <Business />
                        <h1 className="text-[32px] md:text-[42px] font-semibold">Business <span className="text-primary">Challenge.</span></h1>
                    </div>
                    <div className="grid gap-[40px]">
                        <p className="text-[20px]">Each brand served a distinct industrial audience while sharing overlapping products, distributors, and customers. The challenge was creating marketing systems that strengthened brand visibility, supported sales, and maintained consistency across multiple brands and channels.</p>
                        <Image src="/business.jpg" alt="business challenge" width={1232} height={600} className="w-full h-auto" />
                    </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="md:flex items-center justify-between gap-[48px]">
                    <div className="md:w-[50%] w-full">
                        <Image src="/strategy.jpg" alt="business challenge" width={1232} height={600} className="w-full h-auto" />
                    </div>
                    <div className="grid gap-[24px] md:w-[50%] w-full">
                        <div className="flex items-center gap-[10px]">
                            <Target />
                            <h1 className="text-[32px] md:text-[42px] font-semibold">Strategic <span className="text-primary">Approach.</span></h1>
                        </div>
                        <p className="text-[20px]">Developed a scalable marketing framework across the portfolio by aligning brand messaging, improving digital experiences, supporting product marketing initiatives, and creating tools that helped customers and distributors evaluate products more effectively.</p>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[24px]">
                    <div className="flex items-center gap-[10px]">
                        <Idea />
                        <h1 className="text-[32px] md:text-[42px] font-semibold">Digital <span className="text-primary">& Ecommerce.</span></h1>
                    </div>
                    <div className="grid gap-[40px]">
                        <p className="text-[20px]">Supported multiple industrial websites and ecommerce experiences through responsive design, product merchandising, content development, and digital marketing initiatives.</p>
                        <Image src="/idea.jpg" alt="business challenge" width={1232} height={600} className="w-full h-auto" />
                    </div>
                </div>


                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="md:flex items-center justify-between gap-[48px]">
                    <div className="grid gap-[24px] md:w-[50%] w-full">
                        <div className="flex gap-[10px]">
                            <Product />
                            <h1 className="text-[32px] md:text-[42px] font-semibold">Product <span className="text-primary"> Marketing Campaigns.</span></h1>
                        </div>
                        <p className="text-[20px]">Created campaigns focused on product positioning, promotional marketing, customer engagement, and competitive differentiation across multiple brands.</p>
                    </div>
                    <div className="md:w-[50%] w-full">
                        <Image src="/product.jpg" alt="business challenge" width={1232} height={600} className="w-full h-auto" />
                    </div>
                </div>


                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="md:flex items-center justify-between gap-[48px]">
                    <div className="grid gap-[10px] md:w-[50%] w-full">
                        <Image src="/sales.png" alt="business challenge" width={1232} height={600} className="w-full h-auto" />
                        <div className="grid gap-[14px] pr-[20px] pl-[20px]">
                            <h2 className="text-[36px] font-semibold">Sales Enablement.</h2>
                            <p className="text-[20px]">Developed catalogs, line cards, product guides, and technical marketing materials that supported distributors, sales teams, and customers throughout the buying process.
                            </p>
                        </div>

                    </div>
                    <div className="grid gap-[10px] md:w-[50%] w-full">
                        <Image src="/sales.png" alt="business challenge" width={1232} height={600} className="w-full h-auto" />
                        <div className="grid gap-[14px] pr-[20px] pl-[20px]">
                            <h2 className="text-[36px] font-semibold">Sales Enablement.</h2>
                            <p className="text-[20px]">Developed catalogs, line cards, product guides, and technical marketing materials that supported distributors, sales teams, and customers throughout the buying process.
                            </p>
                        </div>

                    </div>
                </div>



                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[24px]">
                    <div className="flex items-center gap-[10px]">
                        <Target />
                        <h1 className="text-[32px] md:text-[42px] font-semibold">Outcomes<span className="text-primary"> & Impact.</span></h1>
                    </div>
                    <div>
                        <p className="text-[20px]">Built and maintained marketing systems that supported multiple industrial brands across digital channels, product marketing, sales enablement, and brand development. The result was a more cohesive brand ecosystem with stronger product communication, improved sales support, and a scalable foundation for ongoing marketing initiatives.</p>
                    </div>
                </div>


            </div>
        </>
    );
}