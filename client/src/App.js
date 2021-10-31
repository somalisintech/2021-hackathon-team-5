import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SomaliAbout from "./pages/Somali/About";
import AboutServices from "./pages/AboutServices";
import SomaliAboutServices from "./pages/Somali/AboutServices";
import Locations from "./pages/Locations";
import SomaliLocations from "./pages/Somali/Locations";

// import English from "./pages/English";
// import Somali from "./pages/Somali";
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact component={Landing} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/somali/about" component={SomaliAbout} />
        <Route path="/about-services" component={AboutServices} />
        <Route path="/somali/ushaqeeynta" component={SomaliAboutServices} />
        <Route path="/locations" component={Locations} />
        <Route path="/magalooyinka" component={SomaliLocations} />

        {/* <Route path="/english" component={English} />
        <Route path="/somali" exact component={Somali} /> */}
      </Switch>
    </Router>
  );
}

export default App;
