import React from 'react'
import { Stack } from '@mui/material';

import { categories } from "../utils/constants";



const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((Famous) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(Famous.name)}
          style={{
            background: Famous.name === selectedCategory && "#008B8B",
            color: "white",
          }}
        >
          <span style={{color: Famous.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{Famous.icon}</span>
          <span style={{opacity: Famous.name === selectedCategory ? '1' : '0.8'}}>{Famous.name}</span>

        </button>
      ))}
    </Stack>
  )
}

export default SideBar