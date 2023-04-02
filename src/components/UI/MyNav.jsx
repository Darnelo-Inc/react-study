import { Link } from "react-router-dom"
import styles from "../../styles/MyBtn.module.css"
import MyBtn from "./MyBtn"
import { useContext } from "react"
import { AuthContext } from "../../context/context"


const MyNav = () => {
    const { setIsAuth } = useContext(AuthContext)

    function logout() {
        localStorage.removeItem('auth')
        setIsAuth(false)
    }

    return (
        <nav className="nav">
            <Link className={styles.btn} to={"/about"}>
                About
            </Link>
            <Link className={styles.btn} to={"/posts"}>
                Posts
            </Link>
            <MyBtn onClick={logout}>Log Out</MyBtn>
        </nav>
    )
}

export default MyNav