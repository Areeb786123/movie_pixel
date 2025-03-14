import HomeList from "../components/HomeList";
import { useFetchMovies } from "../hooks/useFetchMovies";

export const Home = () => {
    const { data, loading, error } = useFetchMovies()
    console.log(data)
    return (
        <div className="bg-amber-300 w-full z-[1] h-full overflow-scroll" >
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            <ul className="mt-4 flex-row flex flex-wrap gap-3 pb-2 justify-center">
                {data && data.map((movie) => (
                    <HomeList movie={movie} key={"movie-id-" + movie.id} />
                ))}
            </ul>
        </div>
    );
};