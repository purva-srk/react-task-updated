import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import AgGrid from "./AgGrid";
import CellRenderer from "./CellRenderer";
import ExportData from "./ExportData";
import RowGrouping from "./RowGrouping";

const AgGridMenu = () => {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <div style={{ display: "flex" }}>
      <Menu
        onClick={handleMenuClick}
        items={[
          {
            label: "Ag-Grid",
            key: "/agGrid",
          },
          {
            label: "Cell Renderer",
            key: "/cellRenderer",
          },
          {
            label: "Row Grouping",
            key: "/rowGrouping",
          },
          {
            label: "Export Data",
            key: "/exportData",
          },
        ]}
      ></Menu>
      <Content />
    </div>
  );
};

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/agGrid" element={<AgGrid />}></Route>
        <Route path="/cellRenderer" element={<CellRenderer />}></Route>
        <Route path="/rowGrouping" element={<RowGrouping />}></Route>
        <Route path="/exportData" element={<ExportData />}></Route>
      </Routes>
    </div>
  );
}

export default AgGridMenu;
