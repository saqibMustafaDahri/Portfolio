import ContactUsForm from "./contactusform";

export default function ContactUsHeader() {
    return (
        <div className="max-w-7xl mx-auto py-[32px] grid gap-[40px] md:gap-[90px]">
            <div>
                <div className="w-full flex flex-col gap-[16px] md:gap-[24px]">
                    <h1 className="text-black text-[40px] md:text-[80px] font-semibold text-center md:text-left">Contact <span className="text-primary">Us.</span></h1>

                </div>
                <div className="flex flex-col md:flex-row items-center mt-[20px] md:mt-0">
                    <div className="w-full h-[1px] bg-gradient-to-r from-[#A4A4A4] to-white opacity-100 hidden md:block" />

                    <h3 className="text-black text-[18px] md:text-[24px] leading-[144%] text-center md:text-left md:pl-[20px]">Creating a concise and effective design studio brief is crucial for outlining your business, its services.
                    </h3>
                </div>
            </div>
            <div>
                <ContactUsForm />
            </div>
        </div>
    );
}