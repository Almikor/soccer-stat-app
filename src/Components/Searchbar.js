import { Stack } from "@mui/system";
import { TextField } from "@mui/material";

function SearchName({ query, update }) {
  return (
    <Stack direction="row">
      <TextField
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(0, 0, 0, 0.23)", // стандартная серая рамка
            },
            "&:hover fieldset": {
              borderColor: "#000000", // черная рамка при наведении
            },
            "&.Mui-focused fieldset": {
              borderColor: "#DAA520", // золотая рамка при фокусе
              borderWidth: "2px"
            }
          },
          "& .MuiInputLabel-root": {
            color: "rgba(0, 0, 0, 0.6)", // серый цвет label
            "&.Mui-focused": {
              color: "#DAA520", // золотой цвет label при фокусе
            }
          },
          input: { 
            color: "#000000", // черный цвет текста
          },
          margin: 3,
          width: 235,
          backgroundColor: "#ffffff", // белый фон
          "& .MuiOutlinedInput-input": {
            "&::placeholder": {
              color: "rgba(0, 0, 0, 0.4)", // полупрозрачный черный для placeholder
              opacity: 1
            }
          }
        }}
        label="Поиск"
        variant="outlined"
        size="small"
        value={query}
        onChange={(e) => update(e.target.value)}
        placeholder="Введите название..."
      />
    </Stack>
  );
}

export default SearchName;