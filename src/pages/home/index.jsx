import { MoviesGrid } from "../../components/movies-grid";
import "./index.sass";

export const Home = () => {
    return ( 
        <main className="home-container">
            <MoviesGrid />
        </main>
    );
};