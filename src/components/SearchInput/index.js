import React from "react";
import searchIcon from "../../assets/icons/search-icon.svg";
import classNames from "classnames";
import styles from "./index.module.scss";

const SearchInput = ({ value, onChange, placeholder, style }) => {
    return (
        <div className="position-relative d-flex align-items-center h-100">
            <img
                src={searchIcon}
                alt="search-icon"
                className={styles.searchIcon}
            />
            <input
                value={value}
                onChange={onChange}
                className={classNames(styles.searchInput, "form-control")}
                style={style}
                placeholder={placeholder}
            />
        </div>
    );
};

export default SearchInput;
