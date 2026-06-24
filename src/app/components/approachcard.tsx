interface StepCardProps {
    stepNumber: string;
    title: string;
    description: string;
}

export default function ApproachCard({ stepNumber, title, description }: StepCardProps) {
    return (
        <div
            className="w-full pt-[32px] pr-[28px] pb-[32px] pl-[28px] flex flex-col gap-[18px] rounded-lg border border-[#FFFFFF52] bg-[#FFFFFF0F] backdrop-blur-[7px] text-white "
        >
            <div className="w-fit px-[18px] py-[6px] rounded-full border border-[#FFFFFF33] bg-[#222222]/50 flex items-center justify-center">
                <span className="text-20px] font-normal tracking-wide text-[#EAEAEA]">
                    {stepNumber}
                </span>
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-[24px] font-bold tracking-tight leading-tight">
                    {title}
                </h4>
                <p className="text-[20px] text-[#BCBCBC] font-light leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}