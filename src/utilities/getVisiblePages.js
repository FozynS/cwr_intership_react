const filterPages = (visiblePages, totalPages) => {
    return visiblePages.filter((page) => page <= totalPages);
};

const getVisiblePages = (currentPage, total) => {
    if (total < 6) {
        return filterPages([1, 2, 3, 4, 5], total);
    } else if (
        currentPage % 6 >= 0 &&
        currentPage > 4 &&
        currentPage + 2 < total
    ) {
        return [
            currentPage - 3,
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            total,
        ];
    } else if (
        currentPage % 6 >= 0 &&
        currentPage > 4 &&
        currentPage + 2 >= total
    ) {
        return [total - 4, total - 3, total - 2, total - 1, total];
    } else {
        return [1, 2, 3, 4, 5, "...", total];
    }
};

export default getVisiblePages;
