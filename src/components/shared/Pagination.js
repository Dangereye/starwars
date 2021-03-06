import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ count, page, setPage }) => {
  const pages = Math.ceil(count / 10);
  return (
    <section className="pagination">
      <div className="container">
        {page > 1 && (
          <div onClick={() => setPage((page) => page - 1)}>
            <FiChevronLeft />
          </div>
        )}
        {page > 3 && <div onClick={() => setPage(1)}>1</div>}
        {page > 2 && <span>...</span>}
        {page > 1 && (
          <div onClick={() => setPage((page) => page - 1)}>{page - 1}</div>
        )}
        <div className="active">{page}</div>
        {page < pages && (
          <div onClick={() => setPage((page) => page + 1)}>{page + 1}</div>
        )}
        {page < pages - 2 && <span>...</span>}
        {page < pages - 2 && (
          <div onClick={() => setPage((page) => page + 1)}>{pages}</div>
        )}
        {page < pages && (
          <div onClick={() => setPage((page) => page + 1)}>
            <FiChevronRight />
          </div>
        )}
      </div>
    </section>
  );
};

export default Pagination;
