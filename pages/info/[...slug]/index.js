import { useRouter } from 'next/router';
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

const InfoPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const renderContent = () => {
        if (!slug) return <h2>Loading...</h2>;

        switch (slug.join('/')) {
            case '':
                return <div><h2>Information Page</h2><p>Welcome to the information section.</p></div>;
            case 'faqs':
                return <div><h2>Frequently Asked Questions</h2><p>Here are some common questions...</p></div>;
            case 'support':
                return <div><h2>Support</h2><p>Contact us for support...</p></div>;
            default:
                return <div><h2>404 - Page Not Found</h2><p>The requested information page does not exist.</p></div>;
        }
    };

    return (
        <div>
            <Navbar route='/' name='Home' />
            <div className="container mt-5">
                {renderContent()}
            </div>
            <Footer />
        </div>
    );
};

export default InfoPage;

