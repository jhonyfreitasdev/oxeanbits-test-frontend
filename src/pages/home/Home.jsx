import { MoviesGrid } from "../../components/movies-grid/MoviesGrid";
import "./index.sass";

export const Home = () => {
    return ( 
        <main className="home-container">
            <MoviesGrid />
        </main>
    );
};