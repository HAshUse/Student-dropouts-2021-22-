import { useMemo } from "react";

export function useNationalSnapshot(data, level) {

  //cache memory, re-render, expensive calculations
  return useMemo(() => {
    if (!data || data.length === 0) {
      return { overall: null, boys: null, girls: null };
    }

    let boysKey, girlsKey, overallKey;

    if (level === "primary") {
      boysKey = "primary_drop_out_rate___boys_";
      girlsKey = "primary_drop_out_rate___girls";
      overallKey = "primary_drop_out_rate___overall";
    }

    if (level === "upper") {
      boysKey = "upper_primary_drop_out_rate___boys";
      girlsKey = "upper_primary_drop_out_rate___girls";
      overallKey = "upper_primary_drop_out_rate___overall";
    }

    if (level === "secondary") {
      boysKey = "secondary_drop_out_rate___boys_";
      girlsKey = "secondary_drop_out_rate___girls";
      overallKey = "secondary_drop_out_rate___overall";
    }

    //Filter out non-numeric data, NaN,undefined
    const valid = data.filter(d =>
      Number.isFinite(Number(d[boysKey])) &&
      Number.isFinite(Number(d[girlsKey])) &&
      Number.isFinite(Number(d[overallKey]))
    );

    //if data is not available or zero we return null instead of crashing the site
    if (valid.length === 0) {
      console.warn("No valid snapshot data found");
      return { overall: null, boys: null, girls: null };
    }

    // calculating the average of boys, girls, overall seperately
    const avg = key =>
      (
        valid.reduce((sum, d) => sum + Number(d[key]), 0) /
        valid.length
      ).toFixed(1); //converts decimal to string and rounds to single decimal

    const boysAvg = Number(avg(boysKey)); //converting to number again
    const girlsAvg = Number(avg(girlsKey));

    return {
      overall: avg(overallKey),
      boys: avg(boysKey),
      girls: avg(girlsKey),
      gap: (boysAvg - girlsAvg).toFixed(1)
    };
  }, [data, level]);    //dep arr, recalculate only when data or level changes
}
