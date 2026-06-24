import About from "../components/about";
import AboutUsHeader from "../components/aboutusheader";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Talk from "../components/talk";
export default function Aboutpage() {
    return (
        <div>
            <Navbar />
            <AboutUsHeader />
            <About
                badgeText="Who We Are"
                heading="Axleo is a business that provides services related to online marketing."
                description="Digital agencies can vary in size andspecialization. Some may focusonspecificniches, such as healthcare ore-commerce, while others may offeracomprehensive." />
            <Talk />

            <Footer />
        </div>
    );
}