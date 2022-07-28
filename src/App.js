import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/team", element: <Team /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/contact", element: <Contact /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((routeItem) => {
          return (
            <Route
              path={routeItem.path}
              element={<Layout>{routeItem.element}</Layout>}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
