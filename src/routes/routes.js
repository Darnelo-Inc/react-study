import About from "../pages/About"
import Posts from "../pages/Posts"
import PostIdPage from "../pages/PostIdPage"
import Error from "../pages/Error"
import Login from "../pages/Login"

const privateRoutes = [
  { path: "/about", element: About },
  { path: "/posts", element: Posts },
  { path: "/posts/:id", element: PostIdPage },
  { path: "/error", element: Error },
]

const publicRoutes = [
  { path: "/about", element: About },
  { path: "/login", element: Login },
]

export { privateRoutes, publicRoutes }
