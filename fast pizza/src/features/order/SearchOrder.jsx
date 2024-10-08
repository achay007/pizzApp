/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    if(!query) return
    navigate(`/order/${query}`)
    setQuery("")  // clear the search input after navigation to prevent re-searching the same order
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py-2 text-sm placeholder:text-stone-400 w-28 sm:w-64 sm-focus:w-72 transition-all duration-200 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
      />
    </form>
  );
}

export default SearchOrder;
