import { BrowserRouter, Routes, Route } from "react-router";
import { ROUTES } from "./routes";

export const ApplicationRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route) => {
          return (
            <Route
              index={route.index}
              element={route.element}
              path={route.path}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
