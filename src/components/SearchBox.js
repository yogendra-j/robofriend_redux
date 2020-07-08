import React from "react";

const SearchBox = ({ searchfielf, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--green bg-lightest-green"
        type="search"
        placeholder="Search Robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
