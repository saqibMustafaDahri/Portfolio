import Business from "../Icons/business";
import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import Image from "next/image";
import Target from "../Icons/target";
export default function MaryAnnOverViewSection() {
    const ROLES = [
        "Brand Development",
        "Creative Direction",
        "Packaging Design",
        "Retail Marketing",
        "Catalog Design",
        "Print Production",
        "Vendor Coordination",
    ];
    const SCOPE = [
        "Brand Development",
        "Creative Direction",
        "Packaging Design",
        "Retail Marketing",
        "Catalog Design",
        "Print Production",
        "Vendor Coordination",
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
                    <div className="grid gap-[14px]">
                        <p className="text-[20px]">Mary Ann's Chocolates needed a cohesive brand system that could support retail growth, strengthen shelf presence, and create consistency across packaging, merchandising, and marketing materials.</p>
                        <p className="text-[20px]">I led the development and execution of a consumer-facing brand program spanning packaging, retail displays, catalogs, promotional campaigns, and supporting collateral.</p>

                    </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[24px]">
                    <div className="flex items-center gap-[10px]">
                        <Setting />
                        <h1 className="text-[32px] md:text-[42px] font-semibold">My<span className="text-primary"> Role.</span></h1>
                    </div>
                    <div className="flex flex-wrap gap-[16px] mt-4">
                        {ROLES.map((role) => (
                            <RolePill key={role} label={role} />
                        ))}
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row justify-between gap-[42px]">
                            <Image src="/maryann0.png" alt="packaging" width={640} height={448} className="w-full h-auto" />
                            <Image src="/maryann00.png" alt="packaging" width={640} height={448} className="w-full h-[300px] md:h-auto  " />
                        </div>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[42px]">
                    <div className="grid gap-[24px]">
                        <div className="flex items-center gap-[10px]">
                            <Business />
                            <h1 className="text-[32px] md:text-[42px] font-semibold">Scope<span className="text-primary">.</span></h1>
                        </div>
                        <div className="flex flex-wrap gap-[16px] mt-4">
                            {SCOPE.map((scope) => (
                                <RolePill key={scope} label={scope} />
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-[40px]">
                        <div className="border-[1px] border-[#D4D4D4]">
                            <Image src="/scope1.jpg" alt="packaging" width={640} height={448} className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-[42px]">
                            <div className="border-[1px] border-[#D4D4D4]">
                                <Image src="/scope2.jpg" alt="packaging" width={640} height={448} className="w-full h-auto" />
                            </div>
                            <div className="border-[1px] border-[#D4D4D4]">
                                <Image src="/scope3.jpg" alt="packaging" width={640} height={448} className="w-full h-auto" />
                            </div>
                        </div>
                        <div className="border-[1px] border-[#D4D4D4]">
                            <Image src="/scope4.jpg" alt="packaging" width={640} height={448} className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-[42px]">
                            <div className="border-[1px] border-[#D4D4D4]">
                                <Image src="/scope5.png" alt="packaging" width={640} height={448} className="w-full h-auto" />
                            </div>
                            <div className="border-[1px] border-[#D4D4D4]">
                                <Image src="/scope6.jpg" alt="packaging" width={640} height={448} className="w-full h-auto" />
                            </div>
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
                        <p className="text-[20px]">The project established a unified visual system that connected packaging, retail merchandising, wholesale marketing, and promotional communications. The resulting brand architecture improved consistency across customer touchpoints while supporting both retail and wholesale sales efforts.</p>
                    </div>
                </div>


            </div>
        </>
    );
}