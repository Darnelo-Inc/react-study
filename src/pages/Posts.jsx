import { useState, useEffect, useRef } from "react"
import { useSortPosts, useSearchPosts } from "../hooks/usePosts"
import useFetching from "../hooks/useFetching"
import { getTotalPages } from "../utils/calcPages"
import PostService from "../API/PostService"
import styles from "../styles/Posts.module.css"
import MyModal from "../components/UI/MyModal"
import MyBtn from "../components/UI/MyBtn"
import MySelect from "../components/UI/MySelect"
import MyInput from "../components/UI/MyInput"
import Loader from "../components/Loader"
import PostList from "../components/PostList"
import MyPages from "../components/UI/MyPages"
import useObserver from "../hooks/useObserver"

function Posts() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({ sort: "", search: "" })

    const sortPosts = useSortPosts(posts, filter.sort)

    const searchPosts = useSearchPosts(sortPosts, filter.search)

    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const [fetching, isLoading, error] = useFetching(async (limit, page) => {
        const res = await PostService.getAll(limit, page)
        setPosts([...posts, ...res.data])
        setTotalPages(getTotalPages(res.headers["x-total-count"], limit))
    })

    const [visible, setVisible] = useState(false)

    const lastRef = useRef()

    useEffect(() => {
        fetching(limit, page)
    }, [page, limit]) // eslint-disable-line

    useObserver(isLoading, lastRef, page < totalPages, () => setPage(page => page + 1))

    function changeSort(newSort) {
        setFilter({ ...filter, sort: newSort })
    }

    function changeSearch(newSearch) {
        setFilter({ ...filter, search: newSearch })
    }

    function addPost(newPost) {
        setPosts([...posts, newPost])
        setVisible(false)
    }

    function deletePost(id) {
        setPosts([...posts].filter((elem) => elem.id !== id))
    }

    return (
        <div className={styles.posts}>
            <MyModal
                visible={visible}
                setVisible={setVisible}
                addPost={addPost}
                len={limit}
            />

            <MyBtn
                style={{ display: "block", marginTop: "30px" }}
                onClick={() => setVisible(true)}
            >
                Post Form
            </MyBtn>

            <MySelect
                sort={filter.sort}
                defaultValue="Sort by"
                changeSort={changeSort}
                options={[
                    { value: "title", name: "by Title" },
                    { value: "body", name: "by Content" },
                    { value: "id", name: "by Id" }
                ]}
            />

            <MyInput
                type="text"
                placeholder="Search for..."
                value={filter.search}
                onChange={(e) => changeSearch(e.target.value)}
            />

            <MySelect
                sort={limit}
                defaultValue="Posts limit"
                changeSort={(val) => {
                    setLimit(val)
                    setPage(1)
                }}
                options={[
                    { value: 5, name: "5" },
                    { value: 10, name: "10" },
                    { value: 25, name: "25" },
                    { value: -1, name: "All" }
                ]}
            />

            {isLoading ? (
                <Loader />
            ) : error ? (
                <h2 className="center" style={{ marginTop: "50px" }}>
                    {error}
                </h2>
            ) : (
                <></>
            )}

            <PostList searchPosts={searchPosts} deletePost={deletePost} />

            <div ref={lastRef} style={{ height: "20px", backgroundColor: "lime" }}></div>

            <MyPages totalPages={totalPages} page={page} setPage={setPage} />
        </div>
    )
}

export default Posts
