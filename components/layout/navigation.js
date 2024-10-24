import { useRouter } from 'next/router';

const Navigation = ({ route,name }) => {
    const router = useRouter();
    const handleViewGenres = () => {
        if(name === 'View Genres'){
            router.push('/' + route);
            return;
        }
        else
        router.back();
    };
    return (
        <>
        <button className="btn btn-outline-light me-2" onClick={() => handleViewGenres()}>
            {name}
        </button>
        <button className="btn btn-outline-light me-2" onClick={() =>router.push('/authors')}>View Authors</button>
        <button className="btn btn-outline-light" onClick={() =>router.push('/search')}>Search Books</button>
        </>
    )
}

export default Navigation