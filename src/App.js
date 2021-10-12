import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoute from "./components/router";
import routes from "./config/routing/route";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {routes.map((route) => (
            <AppRoute key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
