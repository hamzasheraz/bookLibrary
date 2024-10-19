import { useRouter } from 'next/router';

const Navbar = () => {
  const router=useRouter();
  const handleViewGenres = () => {
    router.push('/genres');
  };
  return (
    <header className="bg-info text-white py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h2">Book Library</h1>
        <button className="btn btn-outline-light" onClick={()=>handleViewGenres}>
            View Genres
          </button>
      </div>
    </header>
  )
}

export default Navbar;