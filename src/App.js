import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/components/header";

const Home = lazy(() => import("../src/pages/home"));
const Schedules = lazy(() => import("../src/pages/schedules"));
const Admin = lazy(() => import("../src/pages/admin"));
const CheckSchedule = lazy(() => import("../src/pages/checkSchedule"));
const EditBurgers = lazy(() => import("../src/pages/editBurgers"));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route
            path="/"
            exact={true}
            component={(props) => <Home {...props} />}
          />
          <Route
            path="/admin"
            exact={true}
            component={(props) => <Admin {...props} />}
          />
          <Route
            path="/admin/scheduleForToday"
            exact={true}
            component={(props) => <CheckSchedule {...props} />}
          />
          <Route
            path="/admin/scheduleForWeek"
            exact={true}
            component={(props) => <Schedules {...props} />}
          />
          <Route
            path="/editBurgers"
            exact={true}
            component={(props) => <EditBurgers {...props} />}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
