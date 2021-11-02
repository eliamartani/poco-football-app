// libraries
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Header from "../../components/Header";
import ScrollToTop from "../../components/ScrollToTop";
import Table from "../Table";
import Team from "../Team";
import Weeks from "../Weeks";

const Main = () => {
  return (
    <HashRouter>
      <ScrollToTop />

      <Header />

      <Switch>
        <Route path="/weeks/:index" component={Weeks} />
        <Route path="/teams/:index" component={Team} />
        <Route path="/table" component={Table} />

        <Redirect from="/" to="/weeks/1" />
      </Switch>
    </HashRouter>
  );
};

export default Main;
