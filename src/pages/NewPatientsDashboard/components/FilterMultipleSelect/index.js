import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { mdiMenuDown, mdiMenuUp } from "@mdi/js";
import Icon from "@mdi/react";
import classNames from "classnames";
import { useOnClickOutside } from "usehooks-ts";
import FilterIcon from "../../../../assets/icons/filter.svg";

import styles from "./index.module.scss";
import _ from "lodash";

const FilterMultipleSelect = ({ filters, setFilters }) => {
    const titleRef = useRef(null);
    const optionsRef = useRef(null);

    const { sources } = useSelector((state) => state.newPatientsDashboard);

    const [showOptions, setShowOptions] = useState(false);

    const groupedSources = sources.reduce((groups, option) => {
        if (!groups[option.channel_id]) {
            groups[option.channel_id] = {
                channelName: option.channel.name,
                options: [],
            };
        }
        groups[option.channel_id].options.push(option);
        return groups;
    }, {});

    const filteredSources = filters.source.map((id) => {
        const source = sources.find((s) => s.id === id);
        return source ? source.name : "";
    });

    const sourcesString = filteredSources.join(", ");

    const addOptionToFilter = (filterKey, value) => {
        let newFilters = _.cloneDeep(filters);
        newFilters[filterKey].push(value);
        setFilters(newFilters);
    };

    const removeOptionFromFilter = (filterKey, value) => {
        let newFilters = _.cloneDeep(filters);
        newFilters[filterKey] = newFilters[filterKey].filter(
            (item) => item !== value,
        );
        setFilters(newFilters);
    };

    const handleOptionChange = (e, filterKey) => {
        const value = Number(e.target.value);
        if (e.target.checked) {
            addOptionToFilter(filterKey, value);
        } else {
            removeOptionFromFilter(filterKey, value);
        }
    };

    useOnClickOutside(optionsRef, (e) => {
        if (!titleRef.current || !titleRef.current.contains(e.target)) {
            setShowOptions(false);
        }
    });

    const handleTitleClick = () => {
        setShowOptions(!showOptions);
    };

    const handleSelectAll = () => {
        const allSourceIds = sources.map((option) => option.id);

        if (filters.source.length !== sources.length) {
            setFilters({ ...filters, source: allSourceIds });
        } else {
            setFilters({ ...filters, source: [] });
        }
    };

    if (!sources) {
        return <></>;
    }

    return (
        <div className={styles.filterMultipleSelect}>
            <div
                ref={titleRef}
                className={classNames(
                    styles.title,
                    showOptions && styles.showOptions,
                )}
                onClick={handleTitleClick}>
                <span className="d-flex align-items-center gap-1">
                    <img src={FilterIcon} alt="filter-icon" /> Filter by:{" "}
                    <b> {sourcesString}</b>
                </span>
                <Icon
                    className={styles.arrow}
                    path={showOptions ? mdiMenuUp : mdiMenuDown}
                    size={1}
                />
            </div>
            {showOptions && (
                <div ref={optionsRef} className={styles.options}>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="select-all-checkbox"
                            checked={filters.source.length === sources.length}
                            onChange={handleSelectAll}
                        />
                        <label htmlFor="select-all-checkbox">Select all</label>
                    </div>
                    {Object.entries(groupedSources).map(
                        ([channelId, { channelName, options }]) => (
                            <div key={channelId}>
                                <h5 className="m-0 ps-2">{channelName}</h5>
                                {options.map((option, index) => (
                                    <div className={styles.option} key={index}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            value={option.id}
                                            id={option.id}
                                            checked={filters.source.includes(
                                                option.id,
                                            )}
                                            onChange={(e) =>
                                                handleOptionChange(e, "source")
                                            }
                                        />
                                        <label htmlFor={option.id}>
                                            {option.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        ),
                    )}
                </div>
            )}
        </div>
    );
};

export default FilterMultipleSelect;
