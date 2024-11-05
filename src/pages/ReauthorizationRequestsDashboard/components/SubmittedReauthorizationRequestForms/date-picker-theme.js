import { createTheme } from "@mui/material";

export const datepickerTheme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    height: "44px",
                    backgroundColor: "#fcfcfc",
                    fontSize: "14px",
                    color: "inherit",
                    font: "inherit",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.focused && {
                        boxShadow: "0 0 0 0.25rem rgba(45, 133, 201, 0.25)",
                    }),
                }),
                notchedOutline: ({ ownerState }) => ({
                    border: "1px solid #ced4da !important",
                }),
            },
        },
    },
});
