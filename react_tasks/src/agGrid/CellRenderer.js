import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  Component,
} from "react";

const PushComp = (p) => {
  const onAt = useCallback(() => window.alert("Push"));
  return (
    <>
      <button onClick={onAt}>Push</button>
      {p.value}
    </>
  );
};

const PullComp = (p) => {
  const onAt = useCallback(() => window.alert("Push"));
  return (
    <>
      <button onClick={onAt}>Push</button>
      {p.value}
    </>
  );
};

const CellRenderer = () => {
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
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
          return { component: PushComp, params: {} };
        }
        if (p.value == 2004) {
          return { component: PullComp };
        }
      },
    },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ]);
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
    <div className="ag-theme-alpine" style={{ height: 500, width: 900 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
      />
    </div>
  );
};

export default CellRenderer;
