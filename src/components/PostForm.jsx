import React from "react"
import MyBtn from "./UI/button/MyBtn"
import MyInput from "./UI/input/MyInput"

function PostForm({ posts, setPosts, setVisible }) {
  const [data, setData] = React.useState({ title: "", body: "" })
  const countRef = React.useRef(1)

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, { ...data, id: countRef.current }])
    countRef.current++
    setData({ title: "", body: "" })
    setVisible(false)
  }
  return (
    <form>
      <MyInput
        onChange={(e) => setData({ ...data, title: e.target.value })}
        type="text"
        value={data.title}
        placeholder="Title"
      />
      <MyInput
        onChange={(e) => setData({ ...data, body: e.target.value })}
        type="text"
        value={data.body}
        placeholder="Body"
      />
      <MyBtn type="submit" onClick={addNewPost}>
        Create a post
      </MyBtn>
    </form>
  )
}

export default PostForm
