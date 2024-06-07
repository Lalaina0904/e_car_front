const fetchData = async (pageNumber: number) => {
    const res = await fetch(
        `http://localhost:8080/brands?pageNumber=${pageNumber}`
    );
    if (!res.ok) {
        throw new Error("error while retrieving data");
    }
    return res.json();
};

export { fetchData };
