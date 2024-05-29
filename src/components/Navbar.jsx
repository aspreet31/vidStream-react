import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <Stack
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        flexDirection: { sx: "cloumn", md: "row" },
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <PlayCircleIcon sx={{ color: "blue", fontSize: "50px" }} />
        <Typography variant="h3" fontWeight="bold" sx={{ color: "blue" }}>
          VidStream
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
