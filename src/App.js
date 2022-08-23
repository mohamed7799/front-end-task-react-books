import { BooksList } from './components/booksList';
import { Pagination } from './components/pagination';

import { useEffect, useState } from 'react';
import axios from "axios";
import { LoaddingIcon } from './components/loaddingIcon';
const App = () => {

  const [books, setbooks] = useState([]);
  const [nextPage, setnextPage] = useState(null);
  const [prevPage, setprevPage] = useState(null);
  const [totalLength, settotalLength] = useState(0);
  const [pageNumber,setpageNumber]=useState(0);
  const [loading, setloading] = useState(false);
  async function getBooks(url="https://gutendex.com/books") {
    setloading(true);
    const req = await axios(url);
    setbooks(req.data.results);
    setnextPage(req.data.next);
    setprevPage(req.data.previous);
    settotalLength(req.data.count);
    if((url.indexOf("=")+1)!==0){
      setpageNumber(url.substring(url.indexOf("=")+1));
    }
    else{
      setpageNumber(1);
    }
    setloading(false);
  }

  useEffect(() => {
    getBooks();
  }, [])

  return (
    <div className="App p-4 min-h-screen">
      <h1 className="text-center font-bold capitalize text-3xl md:text-5xl">React books</h1>
      <Pagination totalLength={totalLength} pageNumber={pageNumber} getBooks={getBooks} next={nextPage} prev={prevPage}></Pagination>
     {!loading && <BooksList loading={loading} books={books}></BooksList>}
      {loading && <LoaddingIcon></LoaddingIcon>}
    </div>
  );
}

export default App;
