// import { Tabs, Tab } from "@material-ui/core";
// import { Link } from "react-router-dom";
import { Tabs } from "antd";
import AntdTable from "./antd/AntdTable";
import AntdForm from "./antd/AntdForm";
import AntdFormValidation from "./antd/AntdFormValidation";

import CloneCounter from "./pages/counter_clone/CloneCounter";
import CounterApp from "./pages/counter_clone/CounterApp";
import ItemPrice from "./pages/price_calculator/ItemPrice";
import Temperature from "./pages/temperature_converter/Temperature";
import ToggleButton from "./pages/toggle_button/ToggleButton";
import AntdTableOperations from "./antd/AntdTableOperations";
import AntdFileUpload from "./antd/AntdFileUpload";
import MultiStepForm from "./antd/MultiStepForm";

const Navbar = () => {
  const { TabPane } = Tabs;
  // const routes = [
  //   { label: "Toggle Button", path: "/toggle-button" },
  //   { label: "Price Calculator", path: "/price-calculator" },
  //   { label: "Temperature Converter", path: "/tempereture-converter" },
  //   { label: "Counter Clone", path: "/counter-clone" },
  // ];
  return (
    <div>
      {/* <Tabs>
        {routes.map((route) => (
          <Tab
            label={route.label}
            value={route.path}
            component={Link}
            to={route.path}
          />
        ))}
      </Tabs> */}

      <Tabs className="links" defaultActiveKey="tab1">
        <TabPane tab="Toggle Button" key="tab1">
          <ToggleButton />
        </TabPane>
        <TabPane tab="Price Calculator" key="tab2">
          <ItemPrice />
        </TabPane>
        <TabPane tab="Temperature Converter" key="tab3">
          <Temperature />
        </TabPane>
        <TabPane tab="Clone Counter" key="tab4">
          <CounterApp />
          <CloneCounter />
        </TabPane>
        <TabPane tab="Antd Table" key="tab5">
          <AntdTable />
        </TabPane>
        <TabPane tab="Antd Form" key="tab6">
          <AntdForm />
        </TabPane>
        <TabPane tab="Antd Form Validation" key="tab7">
          <AntdFormValidation />
        </TabPane>
        <TabPane tab="Antd Table Operations" key="tab8">
          <AntdTableOperations />
        </TabPane>
        <TabPane tab="Antd File Upload" key="tab9">
          <AntdFileUpload />
        </TabPane>
        <TabPane tab="Multi Step Form" key="tab10">
          <MultiStepForm />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Navbar;
