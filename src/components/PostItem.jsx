import React from 'react'
import styles from "../styles/PostItem.module.css"
import MyBtn from './UI/MyBtn'
import { useNavigate } from 'react-router-dom'

const PostItem = ({ id, title, body, deletePost }) => {
    const nav = useNavigate()

    return (
        <div className={styles.post__item}>
            <div className={styles.post__content}>
                <span>{id}. </span>
                <strong>{title}</strong>
                <p>{body}</p>
            </div>
            <div className={styles.post__btn}>
                <MyBtn onClick={() => nav(`/posts/${id}`)}>Open</MyBtn>
                <MyBtn onClick={() => deletePost(id)}>Delete</MyBtn>
            </div>
        </div>
    )
}

export default PostItem