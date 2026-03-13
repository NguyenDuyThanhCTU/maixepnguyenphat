"use client";

import React from "react";

export default function CategoryFilter({
  totalResults,
}: {
  totalResults: number;
}) {
  const handleSortChange = (e: any) => {
    const sortValue = e.target.value;
    console.log("Người dùng đang muốn sắp xếp theo:", sortValue);
    // Tại đây, bạn có thể dùng useRouter() để push URL params
    // VD: router.push(`?sort=${sortValue}`)
  };

  return (
    <div className="flex items-center space-x-4 mt-3 md:mt-0">
      <span className="text-gray-600 hidden md:inline">
        Showing all {totalResults} results
      </span>
      <select
        onChange={handleSortChange}
        className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:border-[#002651] cursor-pointer"
      >
        <option value="popularity">Sort by popularity</option>
        <option value="date">Sort by latest</option>
        <option value="price-asc">Sort by price: low to high</option>
        <option value="price-desc">Sort by price: high to low</option>
      </select>
    </div>
  );
}
