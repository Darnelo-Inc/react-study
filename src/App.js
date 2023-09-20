import React from "react"
import { BrowserRouter } from "react-router-dom"
import Nav from "./components/UI/nav/Nav"
import AppRouter from "./components/AppRouter"
import { AuthContext } from "./context/context"

function App() {
  const [isAuth, setIsAuth] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Nav />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
