import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  Button  from "./pages/bouton";
import GameLandingPage from "./pages/acceuil";
import Fils from "./pages/fils";
import Clavier from "./pages/clavier";
import Practice from "./pages/practice";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GameLandingPage/>,
    },
    {
      path: "/practice",
      element: <Practice/>,
    },
    {
      path: "/bouton",
      element: <Button/>,
    }
    ,{
      path: "/fils",
      element: <Fils/>,
    },
    {
      path: "/clavier",
      element: <Clavier/>,
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;