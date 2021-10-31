import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SomaliAbout from "./pages/Somali/About";
import AboutServices from "./pages/AboutServices";
import SomaliAboutServices from "./pages/Somali/AboutServices";
import Locations from "./pages/Locations";
import SomaliLocations from "./pages/Somali/Locations";
import UserPickup from "./pages/UserPickup";
// mahads components below
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import UserHome from "./pages/UserHome";
import UserRewards from "./pages/UserRewards";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/somali/about" component={SomaliAbout} />
        <Route path="/about-services" component={AboutServices} />
        <Route path="/somali/ushaqeeynta" component={SomaliAboutServices} />
        <Route path="/locations" component={Locations} />
        <Route path="/magalooyinka" component={SomaliLocations} />
        <Route path="/user-pickup" component={UserPickup} />
        {/* Mahad components below */}
        <Route path="/signup" exact component={SignIn} />
        <Route path="/login" exact component={Login} />
        <Route path="/user-home" exact component={UserHome} />{" "}
        <Route path="/user-rewards" exact component={UserRewards} />
      </Switch>
    </Router>
  );
}

export default App;
