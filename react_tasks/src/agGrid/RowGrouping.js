import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const RowGrouping = () => {
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota", model: "Supra", price: 55000 },
    { make: "Ford", model: "Mustang", price: 48000 },
    { make: "Porsche", model: "Cayman", price: 66000 },
  ];
  const columnDefs = [
    { field: "make", rowGroup: true },
    { field: "model" },
    { field: "price" },
  ];

  return (
    <div className="ag-theme-alpine">
      <div className="row-grouping">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          autoGroupColumnDef={{ minWidth: 200 }}
          animateRows={true}
        />
      </div>
    </div>
  );
};
export default RowGrouping;
