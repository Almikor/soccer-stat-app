import { Pagination, Stack, Box } from "@mui/material";
import Searchbar from "../Components/Searchbar";
import { useState } from "react";
import ListTeams from "./ListTeams";
import Filter from "../Utils/Filter";

function PaginatorTeams({ teams }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const update = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  };
  
  const filtred = Filter(query, teams);
  const contentPerPage = 10;
  const lastIndex = page * contentPerPage;
  const firstIndex = lastIndex - contentPerPage;
  const pageTeamCount = Math.ceil(filtred.length / contentPerPage);
  const teamArray = filtred.slice(firstIndex, lastIndex);

  return (
    <Stack spacing={3} sx={{ backgroundColor: "#ffffff", p: 2, borderRadius: 2 }}>
      <Searchbar query={query} update={update} />
      
      <ListTeams paginatedTeams={teamArray} />
      
      {pageTeamCount > 1 && (
        <Box 
          sx={{ 
            display: "flex", 
            justifyContent: "center", 
            width: "100%", 
            mt: 3 
          }}
        >
          <Pagination
            shape="circular"
            size="large"
            count={pageTeamCount}
            page={page}
            onChange={handleChange}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#000000",
                fontWeight: "bold",
                border: "1px solid rgba(0, 0, 0, 0.23)",
                "&:hover": {
                  backgroundColor: "rgba(218, 165, 32, 0.1)",
                }
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#DAA520",
                color: "#ffffff",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#C69500",
                }
              },
              "& .MuiSvgIcon-root": {
                color: "#000000",
                fontSize: "1.8rem"
              }
            }}
          />
        </Box>
      )}
    </Stack>
  );
}

export default PaginatorTeams;