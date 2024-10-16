// import React, { useState } from "react";
import "../styles/pagination.css";

// Pagination Component
const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const pages = [...Array(totalPages)].map((_, i) => i + 1);

  return (
    <div className={pages.length>1 ? "pagination" : "hide"}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;