import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import AntdDynamicForm from "./AntdDynamicForm";
import AntdFileUpload from "./AntdFileUpload";
import AntdFormValidation from "./AntdFormValidation";
import AntdTable from "./AntdTable";
import AntdTableOperations from "./AntdTableOperations";
import MultiStepForm from "./MultiStepForm";

const AntdComponents = () => {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Menu
        onClick={handleMenuClick}
        items={[
          {
            label: "Table",
            key: "/table",
          },
          {
            label: "Form Validation",
            key: "/formValidation",
          },
          {
            label: "Table Operations",
            key: "/tableOperations",
          },
          {
            label: "File Upload",
            key: "/fileUpload",
          },
          {
            label: "Multi Step Form",
            key: "/multiStepForm",
          },
          {
            label: "Dynamic Form",
            key: "/dynamicForm",
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
        <Route path="/table" element={<AntdTable />}></Route>
        <Route path="/formValidation" element={<AntdFormValidation />}></Route>
        <Route
          path="/tableOperations"
          element={<AntdTableOperations />}
        ></Route>
        <Route path="/fileUpload" element={<AntdFileUpload />}></Route>
        <Route path="/multiStepForm" element={<MultiStepForm />}></Route>
        <Route path="/dynamicForm" element={<AntdDynamicForm />}></Route>
      </Routes>
    </div>
  );
}

export default AntdComponents;
