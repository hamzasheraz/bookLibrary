import Navigation from './navigation';
import ThemeToggle from './theme/theme';

const Navbar = ({ route, name }) => {
  return (
    <header className="bg-info text-white py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h2">Book Library</h1>
        <ThemeToggle />
        <Navigation route={route} name={name} />
      </div>
    </header>
  )
}

export default Navbar;