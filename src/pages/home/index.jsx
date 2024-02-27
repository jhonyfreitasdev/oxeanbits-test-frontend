import { MoviesList } from "../../components/movies-list";
import "./index.sass";

export const Home = () => {
    return ( 
        <main className="home-container">
            <MoviesList />
        </main>
    );
};