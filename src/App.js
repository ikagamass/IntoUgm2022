import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/try-out" component={TryOut} />
        <Route exact path="/live" component={Live} />
        <Route exact path="/tour-de-faculty" component={TourDeFaculty} />
      </Switch>
    </Router>
  );
}

export default App;
