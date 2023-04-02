import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import "./styles/reset.css"
import MyNav from "./components/UI/MyNav"
import AppRouter from "./components/AppRouter"
import { AuthContext } from "./context/context"

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <MyNav />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
