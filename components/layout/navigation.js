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
        <button className="btn btn-outline-light" onClick={() => handleViewGenres()}>
            {name}
        </button>
    )
}

export default Navigation