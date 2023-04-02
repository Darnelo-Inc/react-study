import React, { } from 'react'
import PostItem from './PostItem'
import styles from "../styles/PostList.module.css"
import "../styles/vendor.css"
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const PostList = ({ searchPosts, deletePost }) => {

  if (!searchPosts.length) return <h2 className={`center ${styles.post__list}`}>There are no posts</h2>

  return <div className={styles.post__list}>
    <h2 className="center">Posts</h2>
    <TransitionGroup>
      {searchPosts.map((post) =>
        <CSSTransition key={post.id} classNames="post" timeout={500}>
          <PostItem {...post} deletePost={deletePost} />
        </CSSTransition>
      )}
    </TransitionGroup>
  </div>
}

export default PostList