import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  const searchHandler = (e) => {
    setsearch(e.target.value);
  };
  const sumbitHandler = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
      setsearch("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={sumbitHandler}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        placeholder="Search..."
        className="search-bar"
        type="text"
        onChange={searchHandler}
        value={search}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
