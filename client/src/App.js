import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import English from "./pages/English";
import Somali from "./pages/Somali";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import UserHome from "./pages/UserHome";
import UserRewards from "./pages/UserRewards";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/english" component={English} />
        <Route path="/somali" exact component={Somali} />
        <Route path="/signup" exact component={SignIn} />
        <Route path="/login" exact component={Login} />
        <Route path="/user-home" exact component={UserHome} />
        <Route path="/user-rewards" exact component={UserRewards} />
      </Switch>
    </Router>
  );
}

export default App;
