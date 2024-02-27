import { useState } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import { moviesList } from "../../services/movies-api";
import '@progress/kendo-theme-default/dist/all.css';
import "./index.sass";

export const MoviesList = () => {
    const [dataState, setDataState] = useState({take: 5,skip: 0});
    const [filterResult, setFilterResult] = useState(process(moviesList, dataState));

    function onDataStateChange(e) {
        setDataState(e.dataState);
        setFilterResult(process(moviesList, e.dataState));
    };

    return (
        <Grid
            className="grid"
            data={filterResult}
            filterable={true}
            pageable={true}
            onDataStateChange={onDataStateChange}
            total={moviesList.length}
            {...dataState}
        >
            <Column className="column" field="title" filter="text" title="Título" />
            <Column className="column" field="overview" filterable={false} title="Visão geral" />
            <Column className="column" field="releaseDate" filter="date" title="Data de lançamento" />
            <Column className="column" field="voteAverage" filter="numeric" title="Nota" />
            <Column className="column" field="originalLanguage" title="Linguagem original" />
        </Grid>
    );
};