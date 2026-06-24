import CaseStudyWork from "../components/casestudywork";
import Footer from "../components/footer";
import Marketing from "../components/marketing";
import Navbar from "../components/navbar";

export default function CaseStudy() {
    return (
        <div>
            <Navbar />
            <div className="px-4 py-8 md:px-[116px] md:py-[64px]">

                <Marketing />
            </div>
            <Footer />
        </div>
    );
}