import {BookInfo} from './bookInfo';
export const Book = ({book}) => {
  return (
    <div className='border p-2 rounded'>
        <img alt='cover' className='m-auto min-h-[300px]' src={book.formats["image/jpeg"]}></img>
        <hr className="my-2"></hr>
        <h2 className="text-center font-bold capitalize text-xl py-2">{book.title}</h2>
        <hr className="my-2"></hr>
        <h3><BookInfo>authors</BookInfo>: {book.authors.map(item=>item.name).join(",")|| "-"}</h3>
        <h3><BookInfo>languages</BookInfo> : {book.languages.join(",")|| "-"}</h3>
        <h3><BookInfo>subjects</BookInfo>: {book.subjects.join(",")|| "-"}</h3>
        <h3><BookInfo>media type</BookInfo>: {book.media_type|| "-"}</h3>
        <h3><BookInfo>download coutns</BookInfo>: {book.download_count|| "-"}</h3>
    </div>
  )
}
