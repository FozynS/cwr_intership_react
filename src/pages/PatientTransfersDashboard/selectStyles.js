import { getSelectStyles } from "../../utilities/react-select-styles";

const defaultSelectStyles = getSelectStyles();

const getBorderStyle = (state) => {
    let color;

    if (state.selectProps.className === "has-error") {
        color = "#dc3545";
    } else if (state.isFocused) {
        color = "#A4C9E5";
    } else if (state.isDisabled) {
        color = "#e6e6e6";
    } else {
        color = '#ccc';
    }

    return `1px solid ${color}`;
}

export const selectStyles = {
    ...defaultSelectStyles,
    control: (baseStyles, state) => ({
        ...baseStyles,
        ...defaultSelectStyles.control(baseStyles, state),
        minWidth: "115px",
        width: "200px",
        minHeight: "38px",
        height: "auto",
        border: getBorderStyle(state),
        "&:hover": {
            border: "1px solid " + (state.selectProps.className === "has-error" ? "#dc3545" : "#b3b3b3"),
        }
    }),
};