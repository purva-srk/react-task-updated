import { Button } from "antd";
import { useMemo } from "react";

import { AgGridReact } from "ag-grid-react";

const ExportData = () => {
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ];

  const columnDefs = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ];

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
      <Button type="primary" onClick={() => onExportClick()}>
        Export
      </Button>
      <div className="ag-theme-alpine">
        <div className="export-data">
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
          />
        </div>
      </div>
    </div>
  );
};

export default ExportData;
