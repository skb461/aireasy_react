
import "./style.css";
import "./query.css";
import Component from "./components/Component";
import SideMenu from "./components/SideMenu/SideMenu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="row container-fluid body">
        <SideMenu className="col-lg-2" />
        <Component className="col-lg-10 z_index"/>
      </div>
    </div>
  );
}

export default App;