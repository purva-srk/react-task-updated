import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { useState, useEffect, useMemo, useCallback } from "react";

const Year2000 = (p) => {
  const onClickYear2000 = useCallback(() => window.alert("Year 2000"));
  return (
    <>
      <button onClick={onClickYear2000}>Year 2000</button>
      {p.value}
    </>
  );
};

const Year2004 = (p) => {
  const onClickYear2004 = useCallback(() => window.alert("Year 2004"));
  return (
    <>
      <button onClick={onClickYear2004}>Year 2004</button>
      {p.value}
    </>
  );
};

const CellRenderer = () => {
  const [rowData, setRowData] = useState();
  const columnDefs = [
    { field: "athlete" },
    {
      field: "age",
      cellRenderer: (p) => (
        <>
          <b>Age is: </b>
          {p.value}
        </>
      ),
    },
    { field: "country" },
    {
      field: "year",
      cellRendererSelector: (p) => {
        if (p.value == 2000) {
          return { component: Year2000 };
        }
        if (p.value == 2004) {
          return { component: Year2004 };
        }
      },
    },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ];
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <div className="ag-theme-alpine">
      <div className="cell-renderer">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};

export default CellRenderer;
