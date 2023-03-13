import React from "react"
import PostService from "../API/PostService"
import PostForm from "../components/PostForm"
import PostList from "../components/PostList"
import PostFilter from "../components/PostFilter"
import MyModal from "../components/UI/MyModal/MyModal"
import "../styles/App.css"
import MyBtn from "../components/UI/button/MyBtn"
import Loader from "../components/UI/Loader/Loader"
import useFetching from "../hooks/useFetching"
import { useSortedPosts, useSearchedPosts } from ".././hooks/usePosts"
import getPagesCount from "../utils/pages"
import Pagination from "../components/UI/pagination/Pagination"
import useObserver from "../hooks/useObserver"
import MySelect from "../components/UI/select/MySelect"

function Posts() {
    const [posts, setPosts] = React.useState([
        // { id: 1, title: "React", body: "Lorem ipsum 3" },
        // { id: 2, title: "Vue", body: "Lorem ipsum 1" },
        // { id: 3, title: "Angular", body: "Lorem ipsum 2" },
    ])

    const [filter, setFilter] = React.useState({ sort: "", search: "" })

    const [visible, setVisible] = React.useState(false)

    const sortedPosts = useSortedPosts(posts, filter.sort)

    const searchedPosts = useSearchedPosts(sortedPosts, filter.search)

    const [totalPages, setTotalPages] = React.useState(0)
    const [limit, setLimit] = React.useState(10)
    const [currentPage, setCurrentPage] = React.useState(1)

    const lastElem = React.useRef()

    const [fetching, isLoading, error] = useFetching(async () => {
        const response = await PostService.getAll(limit, currentPage)
        setPosts([...posts, ...response.data])
        setTotalPages(getPagesCount(response.headers["x-total-count"], limit))
    })

    useObserver(lastElem, () => {
        setCurrentPage(currentPage + 1)
    }, isLoading, currentPage < totalPages)

    React.useEffect(() => {
        fetching()
    }, [currentPage, limit]) // eslint-disable-line

    const changePage = (page) => {
        setCurrentPage(page)
    }

    return (
        <div className="App">
            <MyBtn onClick={() => setVisible(true)}>Create a post</MyBtn>
            <MyModal visible={visible} setVisible={setVisible}>
                <PostForm posts={posts} setPosts={setPosts} setVisible={setVisible} />
            </MyModal>
            <hr />
            <PostFilter filter={filter} setFilter={setFilter} />
            <MySelect
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                defaultValue={"Posts per page"}
                options={[
                    { value: 5, name: "5" },
                    { value: 10, name: "10" },
                    { value: 25, name: "25" },
                    { value: 50, name: "50" },
                    { value: -1, name: "All" }
                ]} />
            <PostList
                posts={searchedPosts}
                allPosts={posts}
                setPosts={setPosts}
                title={"Post list"}
            />
            <div ref={lastElem} style={{ height: "0", background: "orange", borderRadius: "8px" }} />
            {
                isLoading && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "200px",
                        }}
                    >
                        <Loader />
                    </div>
                )

            }

            {error && <h2 className="center">{error}</h2>}

            <Pagination
                changePage={changePage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </div >
    )
}

export default Posts
