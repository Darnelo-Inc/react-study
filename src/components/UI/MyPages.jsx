import usePages from '../../hooks/usePages'
import MyBtn from './MyBtn'

const MyPages = ({ totalPages, page, setPage }) => {
    const pages = usePages(totalPages)

    return (
        <footer className="footer">
            {pages.map((elem) => (
                <MyBtn
                    key={elem}
                    onClick={() => {
                        setPage(elem)
                    }}
                    style={page === elem ? { color: "white", backgroundColor: "darkorange" } : {}}
                >
                    {elem}
                </MyBtn>
            ))}
        </footer>
    )
}

export default MyPages