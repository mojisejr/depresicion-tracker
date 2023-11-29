import React from "react";

const SearchBar = () => {
  return (
    <div className="join join-vertical md:join-horizontal">
      <input
        type="text"
        className="input input-bordered join-item"
        placeholder="Search"
      ></input>
      <select className="select select-bordered join-item">
        <option disabled selected>
          Filter
        </option>
        <option>Beacon Mac</option>
        <option>Gateway Mac</option>
        <option>Room Id</option>
        <option>Room Name</option>
      </select>
      <button className="join-item btn btn-primary">Search</button>
    </div>
  );
};

export default SearchBar;
