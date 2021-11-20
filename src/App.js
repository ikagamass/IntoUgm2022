import TryOutKlaster from "views/pages/TryOutKlaster";
import TryOutPendaftaran from "views/pages/TryOutPendaftaran";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/pages/Home";
import Live from "./views/pages/Live";
import TourDeFaculty from "./views/pages/TourDeFaculty";
import TryOut from "./views/pages/TryOut.jsx";

import Login from "views/pages/Login";
import Profile from "views/pages/Profile";
import badutPage from "views/badut/BadutPage";

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
        <Route path="/profile" component={Profile} />

        <Route exact path="/live" component={Live} />
        <Route exact path="/tour-de-faculty" component={TourDeFaculty} />

        {/* Badut */}
        <Route exact path="/badut" component={badutPage} />
      </Switch>
    </Router>
  );
}

export default App;
