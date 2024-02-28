export const fetchMoviesData = async () => {
    const renderPages = 2;
    let moviesList = [];

    for (let i = 1; i < renderPages + 1; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=68197ad6888a74a0bb8ccd6014383763&page=${i}`);
        const { results } = await response.json();

        const currentList = results.map(movie => {
            return {
                title: movie.title,
                overview: movie.overview,
                releaseDate: movie.release_date,
                voteAverage: movie.vote_average,
                originalLanguage: movie.original_language
            };
        });
        moviesList = [...moviesList, ...currentList];
    };

    return moviesList;
};