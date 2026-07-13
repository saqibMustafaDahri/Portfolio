// import ArrowRight from "../Icons/arrowright";
// import Location from "../Icons/location";
// import Mail from "../Icons/mail";
// import Phone from "../Icons/phone";
// import Link from "next/link";
// export default function ContactUsForm() {
//     return (
//         <div className="flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-0">
//             <div className="w-full lg:w-auto text-center lg:text-left">
//                 <h2 className="text-black text-[32px] md:text-[48px] font-bold">General <span className="text-primary">Enquiries.</span></h2>
//                 <p className="text-[16px] md:text-[20px] text-[#374151]">For customer questions, feedback or store information.</p>
//                 <div className="py-[20px] px-[16px] md:py-[32px] md:px-[28px] border-[1px] border-primary bg-[#FCEBEB] mt-[20px]">
//                     <ul className="flex flex-col gap-[12px]">
//                         <div className="flex gap-[12px]">
//                             <Phone />
//                             <li className="text-primary text-[20px]">+092-177-234 5432</li>
//                         </div>
//                         <div className="flex gap-[12px]">
//                             <Mail />
//                             <li className="text-primary text-[20px]">infoexample@gmail.com</li>
//                         </div>
//                         <div className="flex gap-[12px]">
//                             <Location />
//                             <li className="text-primary text-[20px]">Canada City, Office-02, Road-11, House-3B/B</li>
//                         </div>

//                     </ul>
//                 </div>
//             </div>
//             <div className="flex flex-col gap-[24px] w-full lg:w-[576px]">
//                 <div className="w-full">
//                     <p className="text-black text-[18px] font-semibold">Full Name</p>
//                     <input type="text" placeholder="jane cooper" className="border-b-[2px]  w-full" />
//                 </div>
//                 <div className="flex flex-col md:flex-row gap-[30px]">
//                     <div className="w-full">
//                         <p className="text-black text-[18px] font-semibold">Company name</p>
//                         <input type="text" placeholder="Company name" className="border-b-[2px] w-full" />
//                     </div>
//                     <div className="w-full">
//                         <p className="text-black text-[18px] font-semibold">Email</p>
//                         <input type="text" placeholder="you@example.com" className="border-b-[2px] w-full" />
//                     </div>

//                 </div>
//                 <div>
//                     <p className="text-black text-[18px] font-semibold">Project Budget</p>
//                     <input type="text" placeholder="Project Budget" className="border-b-[2px]  w-full" />
//                 </div>
//                 <div >
//                     <p className="text-black text-[18px] font-semibold">Project Detail</p>
//                     <textarea placeholder="Project Detail" className=" border-b-[2px] w-full" />
//                 </div>
//                 <Link
//                     href="/casestudy"
//                     className=" w-[200px]  inline-flex items-center gap-[12px] bg-primary  text-white font-medium px-[24px] py-[16px] rounded-full md:mx-0 mx-auto "
//                 >
//                     <span >Send Message</span>
//                     <ArrowRight />
//                 </Link>
//             </div>
//         </div>
//     );
// }

"use client";
import { useState } from "react";
import ArrowRight from "../Icons/arrowright";
import Location from "../Icons/location";
import Mail from "../Icons/mail";
import Phone from "../Icons/phone";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  projectBudget: string;
  projectDetail: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  projectBudget?: string;
  projectDetail?: string;
}

export default function ContactUsForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    projectBudget: "",
    projectDetail: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name required";

    if (!formData.companyName.trim())
      newErrors.companyName = "Company name required";

    if (!formData.email.trim()) {
      newErrors.email = "Email required hai";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email enter karein";
    }

    if (!formData.projectBudget.trim())
      newErrors.projectBudget = "Project budget required";

    if (!formData.projectDetail.trim())
      newErrors.projectDetail = "Project detail required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
      <div className="w-full lg:w-auto text-center lg:text-left space-y-7">
        <div className="space-y-2.5">
          <h2 className="text-black font-sora text-3xl md:text-5xl leading-none font-bold">
            General <span className="text-primary">Enquiries.</span>
          </h2>
          <p className="text-[16px] md:text-[20px] text-gray-700">
            For customer questions, feedback or store information.
          </p>
        </div>
        <div className="py-5 px-4 md:py-8 md:px-7 border border-primary bg-[#FCEBEB] ">
          <ul className="flex flex-col gap-3 divide-y divide-white font-sora">
            <div className="flex gap-3 pb-3">
              <Phone />
              <li className="text-primary text-[20px]">+092-177-234 5432</li>
            </div>
            <div className="flex gap-3 pb-3">
              <Mail />
              <li className="text-primary text-[20px]">
                infoexample@gmail.com
              </li>
            </div>
            <div className="flex gap-3">
              <Location />
              <li className="text-primary text-[20px]">
                Canada City, Office-02, Road-11, House-3B/B
              </li>
            </div>
          </ul>
        </div>
      </div>

      {/* {submitted ? (
                <div className="flex flex-col justify-center gap-4 w-full lg:w-[576px]">
                    <p className="text-2xl font-semibold text-black">Message Sent ✅</p>
                </div>
            ) : ( */}
      <div className="flex flex-col gap-[24px] w-full lg:w-[576px]">
        <div className="w-full">
          <p className="text-black text-[18px] font-semibold">Full Name</p>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your name"
            className={`border-b-[2px] w-full outline-none py-1 ${errors.fullName ? "border-red-500" : "border-black"}`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-[13px] mt-1">{errors.fullName}</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-[30px]">
          <div className="w-full">
            <p className="text-black text-[18px] font-semibold">Company name</p>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company name"
              className={`border-b-[2px] w-full outline-none py-1 ${errors.companyName ? "border-red-500" : "border-black"}`}
            />
            {errors.companyName && (
              <p className="text-red-500 text-[13px] mt-1">
                {errors.companyName}
              </p>
            )}
          </div>
          <div className="w-full">
            <p className="text-black text-[18px] font-semibold">Email</p>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`border-b-[2px] w-full outline-none py-1 ${errors.email ? "border-red-500" : "border-black"}`}
            />
            {errors.email && (
              <p className="text-red-500 text-[13px] mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <p className="text-black text-[18px] font-semibold">Project Budget</p>
          <input
            type="text"
            name="projectBudget"
            value={formData.projectBudget}
            onChange={handleChange}
            placeholder="Project Budget"
            className={`border-b-[2px] w-full outline-none py-1 ${errors.projectBudget ? "border-red-500" : "border-black"}`}
          />
          {errors.projectBudget && (
            <p className="text-red-500 text-[13px] mt-1">
              {errors.projectBudget}
            </p>
          )}
        </div>

        <div>
          <p className="text-black text-[18px] font-semibold">Project Detail</p>
          <textarea
            name="projectDetail"
            value={formData.projectDetail}
            onChange={handleChange}
            placeholder="Project Detail"
            rows={4}
            className={`border-b-[2px] w-full outline-none py-1 resize-none ${errors.projectDetail ? "border-red-500" : "border-black"}`}
          />
          {errors.projectDetail && (
            <p className="text-red-500 text-[13px] mt-1">
              {errors.projectDetail}
            </p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="w-[200px] inline-flex items-center gap-[12px] bg-primary text-white font-medium px-[24px] py-[16px] rounded-full md:mx-0 mx-auto"
        >
          <span>Send Message</span>
          <ArrowRight />
        </button>
      </div>
      {/* )} */}
    </div>
  );
}
