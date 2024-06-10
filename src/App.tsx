import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  Button  from "./pages/bouton";
import Acceuil from "./pages/acceuil";
import Fils from "./pages/fils";
import Clavier from "./pages/clavier";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Acceuil/>,
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