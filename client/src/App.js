import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import UserHome from "./pages/UserHome";
import UserRewards from "./pages/UserRewards";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" exact component={SignIn} />
        <Route path="/login" exact component={Login} />
        <Route path="/user-home" exact component={UserHome} />{" "}
        <Route path="/user-rewards" exact component={UserRewards} />
      </Switch>
    </Router>
  );
}

export default App;
