// import { Tabs, Tab } from "@material-ui/core";
// import { Link } from "react-router-dom";
import { Tabs } from "antd";
import { BrowserRouter } from "react-router-dom";

import CloneCounter from "./pages/counter_clone/CloneCounter";
import CounterApp from "./pages/counter_clone/CounterApp";
import ItemPrice from "./pages/price_calculator/ItemPrice";
import Temperature from "./pages/temperature_converter/Temperature";
import ToggleButton from "./pages/toggle_button/ToggleButton";
import AntdComponents from "./antd/AntdComponents";
import AgGridMenu from "./agGrid/AgGridMenu";
import CounterTesting from "./jest/CounterTesting";

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
        <TabPane tab="Antd Components" key="tab5">
          <BrowserRouter>
            <AntdComponents />
          </BrowserRouter>
        </TabPane>
        <TabPane tab="Ag Grid" key="tab6">
          <BrowserRouter>
            <AgGridMenu />
          </BrowserRouter>
        </TabPane>
        <TabPane tab="Jest" key="tab7">
          <CounterTesting initialCount={0} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Navbar;
