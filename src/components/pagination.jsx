import { useSearchParams } from "react-router-dom";
import { createArray } from "../utils/array-creator";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const Pagination = ({
  totalRecords,
  pageSize = import.meta.env.VITE_PAGE_SIZE,
}) => {
  const pages = Math.ceil(totalRecords / pageSize);
  const index = createArray(pages);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = +searchParams.get("page") || 1;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages) {
      setSearchParams({ page: currentPage + 1 });
    }
  };

  return (
    <div className="flex items-center mt-6">
      <button
        disabled={currentPage === 1}
        className={`px-2 py-2 border border-slate-600 rounded-r-md hover:bg-blue-600 ${
          currentPage === 1 &&
          "cursor-not-allowed hover:bg-blue-600/0 opacity-35"
        }`}
        onClick={handlePrevPage}
      >
        <MdOutlineChevronRight className="text-2xl" />
      </button>
      <div className="flex items-center justify-center">
        {index.map((item) => (
          <button
            onClick={() => setSearchParams({ page: item })}
            className={`border border-slate-600 px-3 py-2 hover:bg-blue-600 ${
              currentPage === item && "bg-blue-600 "
            }`}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage === pages}
        className={`px-2 py-2 border border-slate-600 rounded-l-md hover:bg-blue-600 ${
          currentPage === pages &&
          "cursor-not-allowed hover:bg-blue-600/0 opacity-35"
        }`}
        onClick={handleNextPage}
      >
        <MdOutlineChevronLeft className="text-2xl" />
      </button>
    </div>
  );
};

export default Pagination;
