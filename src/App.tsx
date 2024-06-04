import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  Button  from "./pages/bouton";
import Acceuil from "./pages/acceuil";

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
    //,{
    //  path: "/fils",
    //  element: <Fils/>,
    //},{
    //  path: "/",
    //  element: <Clavier/>,
    //}
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;