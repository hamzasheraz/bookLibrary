import { genres } from "@/helper"; 
import Link from "next/link";
import Navigation from "@/components/layout/navigation";    

const Genres = () => {
  return (
        <div className="min-vh-100 bg-light">
          <header className="bg-info text-white py-4">
            <div className="container d-flex justify-content-between align-items-center">
              <h1 className="h2">Book Genres</h1>
              <Navigation route='' name='Back to Home'/>
            </div>
          </header>
    
          <main className="container my-5">
            <h2 className="h3 mb-4">Available Genres</h2>
            <div className="list-group">
              {genres.map((genre) => (
                <Link href={`/genres/${genre.id}`} key={genre.id} className="list-group-item list-group-item-action">
                  {genre.name}
                </Link>
              ))}
            </div>
          </main>
        </div>
      );
}

export default Genres