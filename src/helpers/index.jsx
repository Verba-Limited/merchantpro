import { useState } from "react";

export const usePagination = (data, initialPage = 0, itemsPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const paginateData = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayedData = paginateData();

  return {
    displayedData,
    handlePageChange,
  };
};
