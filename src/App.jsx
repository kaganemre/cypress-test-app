import "./components/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Success from "./components/Success";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <>
      <header className="bg-primary text-white text-start p-3">
        CypressTest App
      </header>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
