import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home/Home";
import Main from "../components/Layout/Main";
import ErrorPage from "../components/404/ErrorPage";
import Login from "../components/pages/Login/Login/Login";
import Register from "../components/pages/Login/Register/Register";
import Blog from "../components/pages/Blog/Blog";
import About from "../components/pages/About/About";
import RecipeLayout from "../components/Layout/RecipeLayout";
import PrivateRoute from "./PrivateRoute";
import ChefRecipe from "../components/pages/ChefRecipe/ChefRecipePage/ChefRecipe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/login",
                element: <Login></Login>,

            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
        ],
    },
    {
        path: "recipe",
        element: <RecipeLayout></RecipeLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
                //loader:({params})=> fetch(`http://localhost:5000/chefs/${params.id}`)
                loader: ({ params }) => fetch(`https://food-bangla-server-amanda-reahana-gomes-projects.vercel.app/chefs/${params.id}`)
            },
        ]
    }
]);

export default router;