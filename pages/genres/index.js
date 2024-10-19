import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { getAllGenres } from "@/helper";

const Genres = ({ genres }) => {
    return (
        <div className="min-vh-100 bg-light">
            <Navbar route='' name='Back to Home' />
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
            <Footer />
        </div>
    );
}

export async function getServerSideProps() {
    const genres = await getAllGenres();

    if (!genres) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            genres
        }
    }
}

export default Genres