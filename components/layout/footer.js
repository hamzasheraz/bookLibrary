const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <p className="mb-0">&copy; {new Date().getFullYear()} BookLibrary. All Rights Reserved.</p>
                <div>
                    <a href="/privacy-policy" className="text-white me-3">Privacy Policy</a>
                    <a href="/terms-of-service" className="text-white">Terms of Service</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer