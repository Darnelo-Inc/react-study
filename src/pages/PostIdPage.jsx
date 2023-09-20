import React from "react"
import { useParams } from "react-router-dom"
import PostService from "../API/PostService"
import Loader from "../components/UI/Loader/Loader"
import useFetching from "../hooks/useFetching"

function PostIdPage() {
    const params = useParams()

    const [post, setPost] = React.useState({})
    const [comments, setComments] = React.useState([])

    const [fetchGetPost, isLoading, error] = useFetching(async (id) => { // eslint-disable-line
        const response = await PostService.getPost(id)
        setPost(response.data)
    })

    const [fetchGetComments, commIsLoading, comError] = useFetching(async (id) => { // eslint-disable-line
        const response = await PostService.getComments(id)
        setComments(response.data)
    })

    React.useEffect(() => {
        fetchGetPost(params.id)
        fetchGetComments(params.id)
    }, []) // eslint-disable-line

    return (
        <>
            <h2 className="center">Post {params.id}</h2>

            {isLoading
                ? <Loader />
                : <p>{post.body}</p>
            }

            <h4>Comments:</h4>

            {commIsLoading
                ? <Loader />
                : <ol>{comments.map((elem) => {
                    return (
                        <li style={{ marginBottom: "30px" }} key={elem.id}>
                            <div>{elem.email}</div>
                            <i>{elem.body}</i>
                        </li>
                    )
                }
                )}</ol>
            }
        </>
    )
}

export default PostIdPage