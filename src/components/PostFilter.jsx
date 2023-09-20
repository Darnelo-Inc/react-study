import React from "react"
import MyInput from "./UI/input/MyInput"
import MySelect from "./UI/select/MySelect"

function PostFilter({ filter, setFilter }) {
  const options = [
    { value: "title", name: "by Title" },
    { value: "body", name: "by Content" },
    { value: "id", name: "by Id" },
  ]
  return (
    <>
      <MyInput
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        type="text"
        placeholder="Search..."
      />
      <MySelect
        value={filter.sort}
        onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
        options={options}
        defaultValue={"Sort"}
      />
    </>
  )
}

export default PostFilter
