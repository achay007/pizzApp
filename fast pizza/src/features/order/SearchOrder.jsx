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
      />
    </form>
  );
}

export default SearchOrder;
