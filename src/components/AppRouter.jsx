import { Routes, Route } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../routers/router"
import { useContext } from "react"
import { AuthContext } from "../context/context"
import Loader from "./Loader"

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) return <Loader />

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map(elem => <Route key={elem.path} {...elem} />)
                : publicRoutes.map(elem => <Route key={elem.path} {...elem} />)}
        </Routes>
    )
}

export default AppRouter