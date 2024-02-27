import { useState } from "react";
import { Grid, GridToolbar, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import { GridPDFExport } from "@progress/kendo-react-pdf";
import { moviesList } from "../../services/movies-api";
import '@progress/kendo-theme-default/dist/all.css';
import "./index.sass";

export const MoviesGrid = () => {
    const [dataState, setDataState] = useState({ take: 10, skip: 0 });
    let gridPDFExport;

    const exportPDF = () => { gridPDFExport.save() }
    const onDataStateChange = e => { setDataState(e.dataState) };

    const grid = (
        <Grid
            className="grid"
            data={process(moviesList, dataState)}
            filterable={true}
            pageable={true}
            {...dataState}
            onDataStateChange={onDataStateChange}
            total={moviesList.length}
        >
            <GridToolbar>
                <button
                    title="Export PDF" onClick={exportPDF}
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                >
                    Export PDF
                </button>
            </GridToolbar>
            <Column className="column" field="title" filter="text" title="Title" />
            <Column className="column" field="overview" filterable={false} title="Overview" />
            <Column className="column" field="releaseDate" filter="date" title="Release Date" />
            <Column className="column" field="voteAverage" filter="numeric" title="Note" />
            <Column className="column" field="originalLanguage" filter="text" title="Original Lang" />
        </Grid>
    )

    return (
        <div className="grid-container">
            {grid}
            <GridPDFExport ref={(pdfExport) => (gridPDFExport = pdfExport)} fileName="movies-export.pdf">
                {grid}
            </GridPDFExport>
        </div>
    );
};