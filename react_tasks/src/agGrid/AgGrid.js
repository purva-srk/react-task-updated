import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { AgGridReact } from "ag-grid-react";
import { useState, useEffect } from "react";

const AgGrid = () => {
  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const columnDefs = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ];

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  const defaultColDef = {
    sortable: true,
    filter: true,
  };

  return (
    <div className="ag-theme-alpine">
      <div className="ag-grid">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          animateRows={true}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};

export default AgGrid;
