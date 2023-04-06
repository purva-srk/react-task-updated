import { Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  const routes = [
    { label: "Toggle Button", path: "/toggle-button" },
    { label: "Price Calculator", path: "/price-calculator" },
    { label: "Temperature Converter", path: "/tempereture-converter" },
    { label: "Counter Clone", path: "/counter-clone" },
  ];
  return (
    <div className="links">
      <Tabs>
        {routes.map((route) => (
          <Tab
            label={route.label}
            value={route.path}
            component={Link}
            to={route.path}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default Navbar;
