import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { useContext } from "react";
import { ThemeContext } from "@/theme";

const InformationPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme === "light" ? "bg-light text-dark" : "bg-dark text-white"} min-vh-100`}>
            <Navbar route='/' name='Home' />
            <div className="container mt-5">
                <div><h2>Information Page</h2><p>Welcome to the information section.</p></div>;
            </div>
            <Footer />
        </div>
    )
}

export default InformationPage