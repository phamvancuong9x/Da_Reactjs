import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routers from "./components/Routers";
function App() {
  const params = useLocation();

  return (
    <div className="App">
      {params.pathname != "/admin" && <Header />}
      <Routers />
      {params.pathname != "/admin" && <Footer />}
    </div>
  );
}

export default App;
