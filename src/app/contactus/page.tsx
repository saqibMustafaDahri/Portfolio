import ContactUsHeader from "../components/contactusheader";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ContactUs() {
    return (
        <div>
            <Navbar />
            <div className="px-4 py-8 md:p-[116px]">
                <ContactUsHeader />
            </div>
            <Footer />
        </div>
    )
}