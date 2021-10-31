import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutServices from "./pages/AboutServices";
// import English from "./pages/English";
// import Somali from "./pages/Somali";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/about-services" component={AboutServices} />
        {/* <Route path="/english" component={English} />
        <Route path="/somali" exact component={Somali} /> */}
      </Switch>
    </Router>
  );
}

export default App;
