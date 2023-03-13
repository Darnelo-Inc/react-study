import React from "react"
import PostItem from "./PostItem"
import { TransitionGroup, CSSTransition } from "react-transition-group"

function PostList({ title, posts, setPosts, allPosts }) {

  const delPost = (id) => {
    setPosts(allPosts.filter((elem) => elem.id !== id))
  }

  return posts.length ? (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      <TransitionGroup>
        {posts.map((elem) =>
          <CSSTransition
            key={elem.id}
            timeout={500}
            classNames="post"
          >
            <PostItem id={elem.id} key={elem.id} post={elem} delPost={delPost} />
          </CSSTransition>)}
      </TransitionGroup>
    </>
  ) : (
    <h1 style={{ textAlign: "center" }}>There are no posts</h1>
  )
}

export default PostList
