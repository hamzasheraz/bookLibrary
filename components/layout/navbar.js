import Navigation from './navigation';

const Navbar = () => {
  return (  
    <header className="bg-info text-white py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h2">Book Library</h1>
        <Navigation route='genres' name='View Genres'/>
      </div>
    </header>
  )
}

export default Navbar;