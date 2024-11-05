export const getSelectStyles = (style = {}) => {
    const { backgroundColor, fontSize } = style;

    return {
        control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: backgroundColor || "#FFFFFF",
            minWidth: "115px",
            border: state.isFocused
                ? "1px solid #A4C9E5"
                : "" || state.selectProps.className === "is-invalid"
                    ? "1px solid red"
                    : "",
            boxShadow: state.isFocused ? "0px 0px 1px 4px #CADEEF" : "",
        }),
        valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            fontSize: fontSize || "16px",
            fontWeight: "400",
            height: "fit-content",
            overflow: "hidden",
        }),
        menu: (baseStyles) => ({ ...baseStyles, zIndex: 9999 }),
    };
};
