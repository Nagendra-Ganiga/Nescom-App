import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { ImagesIndex } from "../../../assets/images/image_index/ImageIndex";

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
            <img src={ImagesIndex.Search} alt="Search" />
          </InputAdornment>
        ),
      }}
    />
  );
}
