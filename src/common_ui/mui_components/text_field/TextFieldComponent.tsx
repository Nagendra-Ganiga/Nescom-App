import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "../../../assets/images/Search.svg";

interface CustomTextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function TextFieldComponent({
  value,
  onChange,
  placeholder,
}: CustomTextFieldProps) {
  return (
    <TextField
      placeholder={placeholder}
      variant="outlined"
      size="small"
      fullWidth
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src={Search} alt="Search" />
          </InputAdornment>
        ),
      }}
    />
  );
}
