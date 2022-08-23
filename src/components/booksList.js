import { Book } from "./book";

export const BooksList = ({ books }) => {
    return (
        <div className="max-w-7xl mx-auto my-8 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]">

            {books.map(book => (<Book key={book.id} book={book}></Book>))}

        </div>
    )
}
