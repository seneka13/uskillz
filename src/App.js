import React, { useEffect, useCallback } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./store/actions";
import routes from "./routes/routes";
import MainPage from "./pages/MainPage";
import Auth from "./pages/Auth";
import Skillz from "./pages/Skillz";
import Loader from "./components/Loader";
import OnboardStep from "./pages/Skillz/OnboardStep";
import AboutUs from "./pages/Secondary/AboutUs";
import Privacy from "./pages/Secondary/Privacy";
import Terms from "./pages/Secondary/Terms";
import Dashboard from "./pages/Dashboard";

function App() {
  const dispatch = useDispatch();
  const getUser = useCallback(() => dispatch(getUserData()), [dispatch]);

  const { success, dataLoading } = useSelector((state) => ({
    success: state.authReducers.login.success,
    dataLoading: state.authReducers.data.loading,
  }));

  useEffect(() => {
    getUser();
  }, [success, getUser]);

  return (
    <>
      {dataLoading && <Loader />}
      <BrowserRouter basename="/uskillz">
        <Route path={routes.index.landing} exact component={MainPage} />
        <Route path={routes.index.aboutUs} exact component={AboutUs} />
        <Route path={routes.index.privacy} exact component={Privacy} />
        <Route path={routes.index.termsOfService} exact component={Terms} />
        <Auth />
        <Route path={routes.skillz.onboarding} component={OnboardStep} />
        <Route path={routes.skillz.skillzPage}>
          <Skillz />
        </Route>
        <Route path={routes.dashboard.dasboardPage}>
          <Dashboard />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
