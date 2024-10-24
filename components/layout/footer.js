import Link from "next/link"
import { useContext } from "react";
import { ThemeContext } from "@/theme";

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <footer className={`bg-${theme === 'dark' ? 'white' : 'dark'} ${theme === "dark" ? "text-dark" : "text-white"} text-center py-4 mt-auto navbar fixed-bottom`}>
            <div className="container">
                <p className="mb-0">&copy; {new Date().getFullYear()} BookLibrary. All Rights Reserved.</p>
                <div>
                    <Link
                        href="/info/faqs"
                        className={`me-3 ${theme === "dark" ? "text-dark" : "text-white"}`}
                    >
                        FAQS
                    </Link>
                    <Link
                        href="/info/support"
                        className={`${theme === "dark" ? "text-dark" : "text-white"}`}
                    >
                        Support
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer