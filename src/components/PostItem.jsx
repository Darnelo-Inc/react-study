import React from "react"
import MyBtn from "./UI/button/MyBtn"
import styles from "./PostItem.module.css"
import { useNavigate } from "react-router-dom"

function PostItem(props) {
  const route = useNavigate()
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className={styles.post__btn}>
        <MyBtn onClick={() => route(`/posts/${props.id}`)}>Open</MyBtn>
        <MyBtn onClick={() => props.delPost(props.id)}>Delete</MyBtn>
      </div>
    </div>
  )
}

export default PostItem