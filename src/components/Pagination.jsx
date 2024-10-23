import React, { useState } from 'react';
import Prev from '../media/HomeScreens/Dashboard/Prev.png'
import Next from '../media/HomeScreens/Dashboard/Next.png'

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [current, setCurrent] = useState(currentPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrent(page);
      onPageChange(page); // Call parent function to update page outside component
    }
  };

  // Function to render pagination buttons dynamically
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 3; // Number of pages to show before and after the current one

    // Always show the first and last pages
    pageNumbers.push(1);
    
    // Show ellipsis if necessary (if there are more than just the first page before the current set of pages)
    if (current > maxPageNumbersToShow + 1) {
      pageNumbers.push('...');
    }

    // Add middle page numbers (current +/- maxPageNumbersToShow)
    for (let i = Math.max(2, current - maxPageNumbersToShow); i <= Math.min(totalPages - 1, current + maxPageNumbersToShow); i++) {
      pageNumbers.push(i);
    }

    // Show ellipsis after the middle pages if necessary
    if (current < totalPages - maxPageNumbersToShow) {
      pageNumbers.push('...');
    }

    // Always show the last page
    pageNumbers.push(totalPages);

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      {/* Left Arrow */}
      <button
        onClick={() => handlePageChange(current - 1)}
        className="flex items-center justify-center w-8 h-8 text-white rounded-full hover:bg-gray-600"
        disabled={current === 1}
      >
        <img src={Prev} alt="" />
      </button>

      {/* Page Numbers */}
      {renderPageNumbers().map((number, index) => (
        <button
          key={index}
          onClick={() => typeof number === 'number' && handlePageChange(number)}
          className={`px-4 py-2 rounded-lg ${
            number === current
              ? 'bg-[#7265EE] text-white'
              : ' text-white'
          }`}
          disabled={number === '...'}
        >
          {number}
        </button>
      ))}

      {/* Right Arrow */}
      <button
        onClick={() => handlePageChange(current + 1)}
        className="flex items-center justify-center w-8 h-8 text-white rounded-full hover:bg-gray-600"
        disabled={current === totalPages}
      >
        <img src={Next} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
