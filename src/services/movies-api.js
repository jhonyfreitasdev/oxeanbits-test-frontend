const getMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=68197ad6888a74a0bb8ccd6014383763&page=1') ;
    const { results } = await response.json();

    return results.map(movie => {
        return {
            title: movie.title,
            overview: movie.overview,
            releaseDate: movie.release_date,
            voteAverage: movie.vote_average,
            originalLanguage: movie.original_language
        };
    });
};

export const moviesList = await getMovies();