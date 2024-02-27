import { useState } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { moviesList } from "../../services/movies-api";
import { filterBy } from "@progress/kendo-data-query";
import '@progress/kendo-theme-default/dist/all.css';
import "./index.sass";

export const MoviesList = () => {
    const [filter, serFilter] = useState();
    const [skip, setSkip] = useState(0);
    const [take, setTake] = useState(8);

    const onPageChange = (e) => {
        setSkip(e.page.skip);
        setTake(e.page.take);
    };

    return (
        <Grid
            className="grid"
            data={filterBy(moviesList.slice(skip, skip + take), filter)}
            filterable={true}
            filter={filter}
            onFilterChange={e => serFilter(e.filter)}
            pageable={true}
            skip={skip}
            take={take}
            onPageChange={onPageChange}
            total={moviesList.length}
        >
            <Column className="column" field="title" title="Título" />
            <Column className="column" field="overview" filterable={false} title="Visão geral" />
            <Column className="column" field="releaseDate" filter="date" title="Data de lançamento" />
            <Column className="column" field="voteAverage" filter="numeric" title="Nota" />
            <Column className="column" field="originalLanguage" title="Linguagem original" />
        </Grid>
    );
};