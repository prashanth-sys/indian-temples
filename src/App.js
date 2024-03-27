import { Switch, Route } from "react-router-dom";
import TempleHomePage from "./components/TempleHomePage";
import Temples from "./components/Temples";
import AboutUs from "./components/About Us";
import Location from "./components/Location";
import MeenakshiTemple from "./components/MeenakshiTemple";
import BrihadeeswararTemple from "./components/BrihadeeswararTemple";
import KapaleeshwararTemple from "./components/KapaleeshwararTemple";
import RamanathaswamyTemple from "./components/RamanathaswamyTemple";
import ArunachalamTemple from "./components/ArunachalesvaraTemple";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={TempleHomePage} />
    <Route exact path="/temples" component={Temples} />
    <Route exact path="/about/us" component={AboutUs} />
    <Route exact path="/location" component={Location} />
    <Route exact path="/meenakshi/temple" component={MeenakshiTemple} />
    <Route
      exact
      path="/brihadeeswarar/temple"
      component={BrihadeeswararTemple}
    />
    <Route
      exact
      path="/kapaleeshwarar/temple"
      component={KapaleeshwararTemple}
    />
    <Route
      exact
      path="/ramanathaswamy/temple"
      component={RamanathaswamyTemple}
    />
    <Route exact path="/arunachalam/temple" component={ArunachalamTemple} />
  </Switch>
);

export default App;
