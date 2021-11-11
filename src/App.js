import TryOutKlaster from "pages/TryOutKlaster";
import TryOutPendaftaran from "pages/TryOutPendaftaran";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/Home";
import Live from "./pages/Live";
import TourDeFaculty from "./pages/TourDeFaculty";
import TryOut from "./pages/TryOut.jsx";

import Login from "pages/Login";
import Profile from "pages/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* tryout */}
        <Route exact path="/try-out" component={TryOut} />
        <Route exact path="/try-out/kluster" component={TryOutKlaster} />
        <Route path="/try-out/daftar/:kluster" component={TryOutPendaftaran} />

        {/* Login */}
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile}/>


        <Route exact path="/live" component={Live} />
        <Route exact path="/tour-de-faculty" component={TourDeFaculty} />
      </Switch>
    </Router>
  );
}

export default App;
