import usePagination from "../../../hooks/usePagination"
import React from "react"

function Pagination({ changePage, currentPage, totalPages }) {
    let pagesArray = usePagination(totalPages)

    return <>{pagesArray.map((elem) => (
        <span
            className={currentPage === elem ? "pagination active" : "pagination"}
            key={elem}
            onClick={() => changePage(elem)}
        >
            {elem}
        </span>
    ))}</>
}

export default Pagination