import { useEffect, useState } from "react";
import { fetchUdiseData } from "../udiseAPI/api";

export function useApiData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);
                setError(null);
                const records = await fetchUdiseData();
                setData(records);
            } catch {
                setError("Failed to load data. Please try again.");
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []); //fetches data on first render not on every re-render

    return { data, loading, error };
}
