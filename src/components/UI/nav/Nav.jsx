import React from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../context/context"
import MyBtn from "../button/MyBtn"

function Nav() {
    const { setIsAuth } = React.useContext(AuthContext)

    const logout = (e) => {
        e.preventDefault()
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <nav className="nav">
            <Link className="nav__link" to="/posts">
                Posts
            </Link>
            <Link className="nav__link" to="/about">
                About
            </Link>
            <Link className="nav__link" to="/error">
                Error
            </Link>
            <MyBtn onClick={e => logout(e)}>Log out</MyBtn>
        </nav>
    )
}

export default Nav