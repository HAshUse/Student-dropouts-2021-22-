import { regionMap } from '../utils/region'

import React from 'react'

export default function useProcessedApiData({ data,search,region,sortOrder,overallKey }) {

let processed = [...data];

  // Search
  processed = processed.filter(d =>
    d.state_ut.toLowerCase().includes(search.toLowerCase())
  );

  // Region
  if (region !== "all") {
    processed = processed.filter(d =>
      regionMap[region]?.some(    //returns true if even one condition is matched
        state =>
          state.toLowerCase().trim() === d.state_ut.toLowerCase().trim()
      )
    );
  }

  // Sort 
  if (sortOrder === "high") {
    processed.sort((a, b) => b[overallKey] - a[overallKey]);
  }
  if (sortOrder === "low") {
    processed.sort((a, b) => a[overallKey] - b[overallKey]);
  }

  return processed;
}