import React, { useRef, useState } from 'react'
import MyInput from './MyInput'
import MyBtn from './MyBtn'

const MyForm = ({ addPost, len }) => {
    const [post, setPost] = useState({ title: "", body: "" })
    const idRef = useRef(len + 1)

    function submitHandler(e) {
        e.preventDefault()
        addPost({ id: idRef.current, ...post })
        idRef.current++
        setPost({ title: "", body: "" })
    }

    function changeHandler(e, name) {
        setPost({ ...post, [name]: e.target.value })
    }

    return (
        <form onSubmit={submitHandler}>
            <MyInput placeholder="Post title..." value={post.title} onChange={(e) => changeHandler(e, "title")} />
            <MyInput placeholder="Post content..." value={post.body} onChange={(e) => changeHandler(e, "body")} />

            <MyBtn type="submit" onSubmit={submitHandler}>Create post</MyBtn>
        </form>

    )
}

export default MyForm