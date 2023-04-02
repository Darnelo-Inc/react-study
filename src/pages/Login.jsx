import { useContext } from 'react'
import MyInput from '../components/UI/MyInput'
import styles from "../styles/Login.module.css"
import MyBtn from '../components/UI/MyBtn'
import { AuthContext } from '../context/context'

const Login = () => {
    const { setIsAuth } = useContext(AuthContext)

    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('auth', 'true')
        setIsAuth(true)
    }

    return (
        <div className={styles.login}>
            <h2 className={styles.login__header}>Login</h2>
            <form onSubmit={onSubmit}>
                <MyInput type="text" placeholder="Login..." />
                <MyInput type="password" placeholder="Password..." />

                <MyBtn>Log In</MyBtn>
            </form>
        </div>
    )
}

export default Login