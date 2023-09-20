import React from "react";
import MyBtn from "../components/UI/button/MyBtn";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context/context";

function Login() {
    const { setIsAuth } = React.useContext(AuthContext)

    const submit = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return <>
        <h2 className="center">Auth page</h2>
        <form>
            <MyInput type="text" placeholder="Type login" />
            <MyInput type="password" placeholder="Type password" />

            <MyBtn onClick={submit}>Log in</MyBtn>
        </form>
    </>
}

export default Login