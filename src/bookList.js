import { useContext } from "react"
import { BookContext } from "./BookContext"


function BookList() {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div>
            <div>
                {books.map(book => {
                    return (
                        <div className="book-item" key={ book.id }>
                            <h3>{ book.title }</h3>
                            <p>{ book.desc }</p>
                        </div>
                    )
                })}
            </div>
        </div>) : (<div>
            No Books Found
        </div>)
}

export default BookList