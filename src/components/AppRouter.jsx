import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "../context/context"
import { privateRoutes, publicRoutes } from "../routes/routes"
import Loader from "./UI/Loader/Loader"

function AppRouter() {
    const { isAuth, isLoading } = React.useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((elem) => <Route key={elem.path} path={elem.path} element={<elem.element />} />)}

                < Route path="/*" element={< Navigate to="/posts" replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((elem) => <Route key={elem.path} path={elem.path} element={<elem.element />} />)}

                < Route path="/*" element={< Navigate to="/login" replace />} />
            </Routes>
    )

}

export default AppRouter