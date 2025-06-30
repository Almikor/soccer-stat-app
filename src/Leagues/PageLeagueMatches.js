import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { SelectedLeagueMatches } from "../Utils/Selection";
import DataGridMatches from "../Components/DataGridMatches";
import DatePickerMatches from "../Components/DatePicker";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function PageLeagueMatches({ league }) {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [dateFromString, setDateFromString] = useState("");
  const [dateToString, setDateToString] = useState("");
  const [leagueMatches, setLeagueMatches] = useState([]);

  useEffect(() => {
    const get = async () => {
      const getMatches = await SelectedLeagueMatches(
        league.id,
        dateFromString,
        dateToString
      );
      if (!getMatches) return;
      setLeagueMatches(getMatches.matches);
    };
    get();
  }, [league.id, dateFromString, dateToString]);

  const convertDate = (value) => {
    if (Math.floor(value / 10) === 0) {
      return `0${value}`;
    } else return value;
  };

  const updateDateFrom = (newDateFrom) => {
    setDateFrom(newDateFrom);
    if (newDateFrom !== null) {
      setDateFromString(
        `${newDateFrom.$y}-${convertDate(newDateFrom.$M + 1)}-${convertDate(
          newDateFrom.$D
        )}`
      );
    }
  };
  const updateDateTo = (newDateTo) => {
    setDateTo(newDateTo);
    if (newDateTo !== null) {
      setDateToString(
        `${newDateTo.$y}-${convertDate(newDateTo.$M + 1)}-${convertDate(
          newDateTo.$D
        )}`
      );
    }
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh", p: 3 }}>
      <Box margin={2}>
        <Breadcrumbs
          separator={
            <NavigateNextIcon 
              fontSize="small" 
              sx={{ color: "rgba(0, 0, 0, 0.54)" }} 
            />
          }
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link 
            to="/Football_Stat" 
            style={{ textDecoration: "none" }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: "#000000",
                fontWeight: "bold",
                "&:hover": {
                  color: "#DAA520",
                  transition: "color 0.3s ease"
                }
              }}
            >
              Лиги
            </Typography>
          </Link>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "#000000",
              fontWeight: "bold"
            }}
          >
            {league.name}
          </Typography>
        </Breadcrumbs>

        <Box 
          display="flex" 
          gap={2} 
          sx={{ 
            mb: 4,
            "& .MuiFormControl-root": {
              "& .MuiInputBase-root": {
                color: "#000000",
                "& fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.23)"
                },
                "&:hover fieldset": {
                  borderColor: "#000000"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#DAA520",
                  borderWidth: "2px"
                }
              },
              "& .MuiInputLabel-root": {
                color: "rgba(0, 0, 0, 0.6)",
                "&.Mui-focused": {
                  color: "#DAA520"
                }
              }
            }
          }}
        >
          <DatePickerMatches
            label="с"
            date={dateFrom}
            update={updateDateFrom}
            maxDate={dateTo}
          />
          <DatePickerMatches
            label="по"
            date={dateTo}
            update={updateDateTo}
            minDate={dateFrom}
          />
        </Box>

        <Typography 
          variant="h4" 
          sx={{ 
            color: "#000000",
            fontWeight: "bold",
            mb: 3,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: 0,
              width: "100%",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #DAA520, transparent)"
            }
          }}
        >
          Матчи
        </Typography>
      </Box>

      <Box
        sx={{
          "& .MuiDataGrid-root": {
            borderColor: "rgba(0, 0, 0, 0.12)",
            color: "#000000",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "rgba(218, 165, 32, 0.1)",
              color: "#000000",
              fontWeight: "bold"
            },
            "& .MuiDataGrid-cell": {
              borderBottomColor: "rgba(0, 0, 0, 0.08)"
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "rgba(218, 165, 32, 0.05)"
            },
            "& .MuiDataGrid-cell:focus": {
              outline: "none"
            },
            "& .MuiDataGrid-columnHeader:focus": {
              outline: "none"
            }
          }
        }}
      >
        <DataGridMatches matches={leagueMatches} />
      </Box>
    </Box>
  );
}

export default PageLeagueMatches;