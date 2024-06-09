import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/Navbar";
import Asosiy from "./asosiy/Asosiy.jsx";
import Maktab from "./maktab/Maktab";
import Dastur from "./dastur/Dastur";
import Qabul from "./qabul/Qabul";
import Jamoa from "./jamoa/Jamoa";
import Notfound from "./notfound/Notfound";
import Uquvjarayoni from "./uquvjarayoni/Uquvjarayoni.jsx";
import { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import InfoCard from "./boxcad/InfoCard.jsx";
import 'animate.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Asosiy />} />
        <Route path="maktab" element={<Maktab />} />
        <Route path="dastur" element={<Dastur />} />
        <Route path="qabul" element={<Qabul />} />
        <Route path="jamoa" element={<Jamoa />} />
        <Route path="uquvjarayoni" element={<Uquvjarayoni />}>
          <Route path=":id" element={<InfoCard />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );

  return (
      <>
          <div className = "App h-100">
              {loading ? (
                  <GridLoader color = "#36d7b7" className = "loader" size = "40" />
              ) : (
                  <div className = "parenBox">
                      <SignedOut>
                          <RedirectToSignIn />
                      </SignedOut>
                      <SignedIn>
                          <RouterProvider router = {routes} />
                      </SignedIn>
                  </div>
              )}
          </div>
      </>
  );
}

export default App;
