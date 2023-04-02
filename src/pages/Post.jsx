import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PostService from "../API/PostService"
import useFetching from "../hooks/useFetching"
import styles from "../styles/Post.module.css"
import Loader from "../components/Loader"


const Post = () => {
    const params = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)


    const [fetchPost, isLoading, error] = useFetching(async () => {
        const res = await PostService.getPost(params.id)
        setPost(res.data)
    })

    const [fetchComments, comIsLoading, comError] = useFetching(async () => {
        const res = await PostService.getComments(params.id)
        setComments(res.data)
    })

    useEffect(() => {
        fetchPost()
        fetchComments()
    }, []) //eslint-disable-line

    return (
        <>
            <div className={styles.post}>
                <h2 className={styles.post__title}>Post {params.id}</h2>
                {isLoading ? <Loader /> : error ? <h2 className="center">{error}</h2> : <>
                    <div className={styles.post__header}>{post?.id}. {post?.title}</div>
                    <p className={styles.post__content}>{post?.body}</p>
                </>}


                <div className={styles.comments}>
                    <h2 className={styles.comments__header}>Comments:</h2>
                    {comIsLoading ? <Loader /> : comError ? <h2 className="center">{error}</h2> : comments?.map(elem => (
                        <ul key={elem.id}>
                            <b>{elem.id}. {elem.name}</b>
                            <p>Email: {elem.email}</p>
                            <i>{elem.body}</i>
                        </ul>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Post