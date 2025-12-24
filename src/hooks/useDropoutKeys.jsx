import { useMemo } from "react";

export default function useDropoutKeys(level) {
    return useMemo(() => {
        if (level === "primary") {
            return {
                boysKey: "primary_drop_out_rate___boys_",
                girlsKey: "primary_drop_out_rate___girls",
                overallKey: "primary_drop_out_rate___overall",
            };
        }

        if (level === "upper") {
            return {
                boysKey: "upper_primary_drop_out_rate___boys",
                girlsKey: "upper_primary_drop_out_rate___girls",
                overallKey: "upper_primary_drop_out_rate___overall",
            };
        }

        if (level === "secondary") {
            return {
                boysKey: "secondary_drop_out_rate___boys_",
                girlsKey: "secondary_drop_out_rate___girls",
                overallKey: "secondary_drop_out_rate___overall",
            };
        }

        return {};
    }, [level]);
}
