import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  Typography
} from "@mui/material";

type Field = {
  id: number;
  name: string;
  fieldType: "TEXT" | "LIST" | "RADIO";
  defaultValue?: string;
  required?: boolean;
  listOfValues1?: string[];
  minLength?: number;
  maxLength?: number;
};

export default function DynamicForm({ fields, onSubmit }: { fields: Field[]; onSubmit: (data: any) => void }) {
  const { control, handleSubmit } = useForm();

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "auto",
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Signup Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <Controller
            key={field.id}
            name={field.name}
            control={control}
            defaultValue={field.defaultValue || ""}
            rules={{
              required: field.required,
              minLength: field.minLength,
              maxLength: field.maxLength,
            }}
            render={({ field: controllerField }) => {
              switch (field.fieldType) {
                case "TEXT":
                  return (
                    <TextField
                      {...controllerField}
                      label={field.name}
                      fullWidth
                      margin="normal"
                    />
                  );
                case "LIST":
                  return (
                    <TextField
                      {...controllerField}
                      select
                      label={field.name}
                      fullWidth
                      margin="normal"
                    >
                      {field.listOfValues1?.map((value) => (
                        <MenuItem key={value} value={value}>
                          {value}
                        </MenuItem>
                      ))}
                    </TextField>
                  );
                case "RADIO":
                  return (
                    <RadioGroup {...controllerField} row>
                      {field.listOfValues1?.map((value) => (
                        <FormControlLabel
                          key={value}
                          value={value}
                          control={<Radio />}
                          label={value}
                        />
                      ))}
                    </RadioGroup>
                  );
                default:
                  return <div />;
              }
            }}
          />
        ))}
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}