import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import English from "./pages/English";
import Somali from "./pages/Somali";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/english" component={English} />
        <Route path="/somali" exact component={Somali} />
      </Switch>
    </Router>
  );
}

export default App;
