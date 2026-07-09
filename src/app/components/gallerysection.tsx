import OverView from "../Icons/overview";
import Setting from "../Icons/setting";
import Image from "next/image";

export default function GallerySection() {
    const ROLES = [
        "Brand Identity",
        "Print Design",
        "Campaign Creative",
        "Digital",
        "Illustration",

    ];
    function RolePill({ label }: { label: string }) {
        return (
            <div className=" px-[18px] py-[10px] rounded-full bg-white shadow-[0_0_25px_0_rgba(0,0,0,0.12)] flex items-center justify-center ">
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
                        <p className="text-[20px]">A curated selection of creative work from across branding, print, editorial, advertising, illustration, nonprofit, and other visual communication projects.</p>

                    </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[24px]">
                    <div className="flex items-center gap-[10px]">
                        <Setting />
                        <h1 className="text-[32px] md:text-[42px] font-semibold">Capabilities<span className="text-primary">.</span></h1>
                    </div>
                    <div className="flex flex-wrap gap-[16px] mt-4">
                        {ROLES.map((role) => (
                            <RolePill key={role} label={role} />
                        ))}
                    </div>
                </div>


                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[24px]">
                    <div className="flex items-center gap-[10px]">
                        {/* <Laptop /> */}
                        <h1 className="text-[32px] md:text-[42px] font-semibold">Print & <span className="text-primary">Publication Design.</span></h1>
                    </div>

                    <div className="grid gap-[42px]">
                        <div className="">
                            <Image src="/gallery/gallery1.png" alt="box" width={1512} height={600} className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]" />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-[42px]">
                            <Image src="/gallery/gallery2.png" alt="box" width={1512} height={2064} className="w-full md:h-[400px]  border-[1px] border-[#D4D4D4]" />
                            <Image src="/gallery/gallery3.png" alt="box" width={1512} height={2064} className="w-full md:h-[400px]  border-[1px] border-[#D4D4D4]" />
                        </div>

                    </div>
                </div>


                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[24px]">
                    <div className="flex items-center gap-[10px]">
                        {/* <Laptop /> */}
                        <h1 className="text-[32px] md:text-[42px] font-semibold">Campaign &<span className="text-primary"> Marketing Creative.</span></h1>
                    </div>
                    <div className="grid gap-[42px]">
                        <div className="">
                            <Image src="/gallery/gallery4.png" alt="box" width={1512} height={600} className="w-full md:h-[600px]  border-[1px] border-[#D4D4D4]" />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-[42px]">
                            <Image src="/gallery/gallery5.png" alt="box" width={1512} height={2064} className="w-full md:h-[400px]  border-[1px] border-[#D4D4D4]" />
                            <Image src="/gallery/gallery6.png" alt="box" width={1512} height={2064} className="w-full md:h-[400px]  border-[1px] border-[#D4D4D4]" />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-[42px]">
                            <Image src="/gallery/gallery7.jpg" alt="box" width={1512} height={2064} className="w-full md:h-[400px]   border-[1px] border-[#D4D4D4]" />
                            <Image src="/gallery/gallery8.jpg" alt="box" width={1512} height={2064} className="w-full md:h-[400px]   border-[1px] border-[#D4D4D4]" />
                            <Image src="/gallery/gallery9.jpg" alt="box" width={1512} height={2064} className="w-full md:h-[400px]   border-[1px] border-[#D4D4D4]" />
                        </div>
                        <div className="">
                            <Image src="/gallery/gallery10.png" alt="box" width={1512} height={600} className="w-full md:h-[600px] border-[1px] border-[#D4D4D4]" />
                        </div>
                    </div>
                </div>


                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[24px]">
                    <div className="flex items-center gap-[10px]">
                        {/* <Laptop /> */}
                        <h1 className="text-[32px] md:text-[42px] font-semibold">Brand<span className="text-primary"> Identity.</span></h1>
                    </div>
                    <div className="grid gap-[42px] ">
                        <div className="border-[1px] border-[#D4D4D4]">
                            <Image src="/gallery/gallery11.png" alt="box" width={1512} height={600} className="w-[70%] mx-auto md:h-[600px] h-[200px]  " />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-[42px]">
                            <Image src="/gallery/gallery12.1.png" alt="box" width={1512} height={2064} className="w-full md:h-[400px] h-[200px] " />
                            <Image src="/gallery/gallery13.png" alt="box" width={1512} height={2064} className="w-full md:h-[400px] h-[200px] " />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-[42px]">
                            <Image src="/gallery/gallery14.png" alt="box" width={1512} height={2064} className="w-full md:h-[400px] h-[200px] " />
                            <Image src="/gallery/gallery15.png" alt="box" width={1512} height={2064} className="w-full md:h-[400px] h-[200px] " />
                            <Image src="/gallery/gallery16.png" alt="box" width={1512} height={2064} className="w-full md:h-[400px] h-[200px] " />
                        </div>
                    </div>
                </div>


                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[24px]">
                    <div className="flex items-center gap-[10px]">
                        {/* <Laptop /> */}
                        <h1 className="text-[32px] md:text-[42px] font-semibold">Illustration<span className="text-primary"> & Visual Systems.</span></h1>
                    </div>
                    <div className="grid gap-[42px] ">
                        <div className="">
                            <Image src="/gallery/gallery17.png" alt="box" width={1512} height={600} className="w-full h-[200px] md:h-[600px]" />
                        </div>
                    </div>
                </div>


                <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-[#FFFFFF] opacity-100 mt-[56px] mb-[56px]" />
                <div className="grid gap-[24px]">
                    <div className="flex items-center gap-[10px]">
                        {/* <Laptop /> */}
                        <h1 className="text-[32px] md:text-[42px] font-semibold">Cause-Based<span className="text-primary"> Campaigns.</span></h1>
                    </div>

                    <div className="grid gap-[42px]">
                        <div className="border-[1px] border-[#D4D4D4]">
                            <Image src="/gallery/gallery18.jpg" alt="box" width={1512} height={600} className="w-[60%] mx-auto md:h-[600px] " />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-[42px]">
                            <Image src="/gallery/gallery19.png" alt="box" width={1512} height={2064} className="w-full md:h-[400px] " />
                            <Image src="/gallery/gallery20.png" alt="box" width={1512} height={2064} className="w-full md:h-[400px] " />
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}