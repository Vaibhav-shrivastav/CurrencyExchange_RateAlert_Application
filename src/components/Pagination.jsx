import React, { useState } from "react";
import Prev from "../media/HomeScreens/Dashboard/Prev.png";
import Next from "../media/HomeScreens/Dashboard/Next.png";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [current, setCurrent] = useState(currentPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrent(page);
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    if (totalPages === 1) return [1];

    const pageNumbers = [];
    const maxPageNumbersToShow = 2;

    pageNumbers.push(1);

    if (current > maxPageNumbersToShow + 1) {
      pageNumbers.push("...");
    }

    for (
      let i = Math.max(2, current - maxPageNumbersToShow);
      i <= Math.min(totalPages - 1, current + maxPageNumbersToShow);
      i++
    ) {
      pageNumbers.push(i);
    }

    if (current < totalPages - maxPageNumbersToShow) {
      pageNumbers.push("...");
    }

    pageNumbers.push(totalPages);

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        onClick={() => handlePageChange(current - 1)}
        className={`w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-600 ${
          current === 1 ? "opacity-50 cursor-not-allowed" : "text-white"
        }`}
        disabled={current === 1}
      >
        <img src={Prev} alt="Previous" />
      </button>

      {renderPageNumbers().map((number, index) => (
        <button
          key={index}
          onClick={() => typeof number === "number" && handlePageChange(number)}
          className={`px-3 py-1 rounded-lg transition-colors duration-200 ${
            number === current
              ? "bg-[#7265EE] text-white font-bold"
              : "bg-transparent text-white hover:bg-gray-600"
          }`}
          disabled={number === "..."}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(current + 1)}
        className={`w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-600 ${
          current === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "text-white"
        }`}
        disabled={current === totalPages}
      >
        <img src={Next} alt="Next" />
      </button>
    </div>
  );
};

export default Pagination;
