import { Button } from "antd";
import { useState, useMemo } from "react";

import { AgGridReact } from "ag-grid-react";

const ExportData = () => {
  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const [columnDefs, setColumnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
  }));

  let gridApi;
  const onGridReady = (params) => {
    gridApi = params.api;
  };

  const onExportClick = () => {
    gridApi.exportDataAsCsv();
  };

  return (
    <div>
      <Button onClick={() => onExportClick()}>Export</Button>
      <div className="ag-theme-alpine" style={{ height: 500, width: 700 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default ExportData;
