import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

const InformationPage = () => {
    return (
        <div>
            <Navbar route='/' name='Home' />
            <div className="container mt-5">
                <div><h2>Information Page</h2><p>Welcome to the information section.</p></div>;
            </div>
            <Footer />
        </div>
    )
}

export default InformationPage