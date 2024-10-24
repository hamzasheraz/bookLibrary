import Navigation from "@/components/layout/navigation";

const Navbar = ({ route, name, toggleTheme, theme }) => {
  return (
    <header className="bg-info text-white py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h2">Book Library</h1>

        {/* Add the theme toggle button */}
        <div className="d-flex align-items-center">
          <button
            className="btn btn-outline-light me-3"
            onClick={toggleTheme}
          >
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          </button>

          {/* Navigation Links */}
          <Navigation route={route} name={name} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
