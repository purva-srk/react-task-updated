import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./Navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
}

export default App;
