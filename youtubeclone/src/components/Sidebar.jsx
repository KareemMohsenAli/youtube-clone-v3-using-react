import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";
function Sidebar({setSelectedCategory,selectedCategory}) {
  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
      direction="row"
    >
      {categories.map((category) => {
        return (
          <button
          onClick={(e)=>{
            setSelectedCategory(category.name);
          }}
            key={category.name}
            className="category-btn"
            style={{
              background: category.name === selectedCategory && "#FC1503",
              color: "white",
            }}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Sidebar;
