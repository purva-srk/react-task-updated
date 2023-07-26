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
import TableSearch from "./table_search/TableSearch";
import TodoRedux from "./todo_redux/TodoRedux";
import ReduxCounter from "./redux_counter/ReduxCounter";

const Navbar = () => {
  const { TabPane } = Tabs;
  return (
    <div>
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
        <TabPane tab="Table Search" key="tab8">
          <TableSearch />
        </TabPane>
        {/* <TabPane tab="Todo List" key="tab9">
          <TodoRedux />
        </TabPane> */}
        <TabPane tab="Redux Counter" key="tab9">
          <ReduxCounter />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Navbar;
