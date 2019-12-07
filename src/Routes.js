import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExercisePage from "./pages/ExercisePage";
import NutritionPage from "./pages/NutritionPage";
import CommunityPage from "./pages/CommunityPage";
import UserPage from "./pages/UserPage";
import AuthorizationPage from "./pages/AuthorizationPage";
import AddFoodPage from "./pages/AddFoodPage";

export const routes = [
  {
    path: "/home",
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
    path: "/nutrition/add_food",
    exact: true,
    component: AddFoodPage
  },
  {
    path: "/community",
    exact: true,
    component: CommunityPage
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
  }
];

const Routes = () => {
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
    </>
  );
};

export default Routes;
