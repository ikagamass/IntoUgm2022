import TryOutKlaster from "pages/TryOutKlaster";
import TryOutPendaftaran from "pages/TryOutPendaftaran";
import TryoutMenu from "parts/TryoutMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/Home";
import Live from "./pages/Live";
import TourDeFaculty from "./pages/TourDeFaculty";
import TryOut from "./pages/TryOut.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/try-out" component={TryOut} />
        <Route exact path="/try-out/kluster" component={TryOutKlaster} />
        <Route path="/try-out/daftar/:kluster" component={TryOutPendaftaran} />
        
        <Route exact path="/live" component={Live} />
        <Route exact path="/tour-de-faculty" component={TourDeFaculty} />
      </Switch>
    </Router>
  );
}

export default App;
