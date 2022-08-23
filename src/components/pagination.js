export const Pagination = ({ getBooks, prev, next, pageNumber, totalLength }) => {
    return (

        <div className="flex flex-col items-center my-4">

            <span className="text-lg text-gray-700 dark:text-gray-400">
                page <span className="font-semibold text-gray-900 dark:text-white">{pageNumber} </span>
                out of <span className="font-semibold text-gray-900 dark:text-white">{Math.ceil(totalLength / 32)}</span>
            </span>
            <div className="inline-flex gap-4 mt-2 xs:mt-0">

                <button onClick={() => getBooks(prev)} className="p-4 hover:bg-black hover:text-white rounded border border-slate-400">

                    Prev
                </button>
                <button onClick={() => getBooks(next)} className="p-4 hover:bg-black hover:text-white rounded border border-slate-400">

                    Next
                </button>
            </div>
        </div>

    )
}
