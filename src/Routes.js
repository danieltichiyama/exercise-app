import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExercisePage from "./pages/ExercisePage";
import NutritionPage from "./pages/NutritionPage";
import CommunityPage from "./pages/CommunityPage";
import UserPage from "./pages/UserPage";
import AuthorizationPage from "./pages/AuthorizationPage";
import AddBreakfastPage from "./pages/AddBreakfastPage";
import AddLunchPage from "./pages/AddLunchPage";
import AddDinnerPage from "./pages/AddDinnerPage";
import AddSnackPage from "./pages/AddSnackPage";
import UserEditPage from "./pages/UserEditPage";

import Playground from "./pages/Playground";
import ExerciseInfoPage from "./pages/ExerciseInfoPage";
import WorkoutLogPage from "./pages/WorkoutLogPage";
import FourOhFourPage from "./pages/FourOhFourPage";

export const routes = [
  {
    path: "/home",
    exact: true,
    component: HomePage
  },
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/exercise",
    exact: true,
    component: ExercisePage
  },
  {
    path: "/nutrition",
    exact: true,
    component: NutritionPage
  },
  {
    path: "/nutrition/add_breakfast",
    exact: true,
    component: AddBreakfastPage
  },
  {
    path: "/nutrition/add_lunch",
    exact: true,
    component: AddLunchPage
  },
  {
    path: "/nutrition/add_dinner",
    exact: true,
    component: AddDinnerPage
  },
  {
    path: "/nutrition/add_snack",
    exact: true,
    component: AddSnackPage
  },
  {
    path: "/community",
    exact: true,
    component: CommunityPage
  },
  {
    path: "/user/:id/edit",
    exact: true,
    component: UserEditPage
  },
  {
    path: "/user",
    exact: true,
    component: UserPage
  },
  {
    path: "/authorization",
    exact: true,
    component: AuthorizationPage
  },
  {
    path: "/playground",
    exact: true,
    component: Playground
  },
  {
    path: "/exercise/:id",
    exact: true,
    component: ExerciseInfoPage
  },
  {
    path: "/workout",
    exact: true,
    component: WorkoutLogPage
  }
];

const Routes = () => {
  let session = localStorage.getItem("session");

  if (!session) {
    return (
      <>
        {routes.map((route, i) => (
          <Route
            key={`global_routes_${i}`}
            path={route.path}
            exact={route.exact}
            component={AuthorizationPage}
          />
        ))}
        {/* <Route path="/*" exact={false} component={FourOhFourPage} /> */}
      </>
    );
  } else {
    return (
      <>
        {routes.map((route, i) => (
          <Route
            key={`global_routes_${i}`}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        {/* <Route path="/*" exact={false} component={FourOhFourPage} /> */}
      </>
    );
  }
};

export default Routes;
