import { getSelectStyles } from "../../utilities/react-select-styles";

const defaultSelectStyles = getSelectStyles();

export const selectStyles = {
    ...defaultSelectStyles,
    control: (baseStyles, state) => ({
        ...baseStyles,
        ...defaultSelectStyles.control(baseStyles, state),
        minWidth: "115px",
        width: "200px",
        minHeight: "38px",
        height: 'auto',
    }),
};