import { useEffect, useState } from "react";
import { fetchUdiseData } from "../udiseAPI/api";
import DropoutChart from "./DropoutChart";
import StatsCards from "./StatsCards";
import { regionMap } from '../components/region'
import "../App.css";

export default function Dashboard() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("2021-22");
  const [level, setLevel] = useState("primary");
  const [sortOrder, setsortOrder] = useState("none")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [region, setRegion] = useState('all')


  useEffect(() => {
    const loadData = async () => {
      try {

        setLoading(true);
        setError(null);
        const records = await fetchUdiseData()
        setData(records)
      } catch (e) {
        setError("Failed to load data. please try again.")
      } finally {
        setLoading(false)
      }
    }
    loadData();
  }, []);

  let processedData = [...data];

  // Search filter
  processedData = processedData.filter(d =>
    d.state_ut.toLowerCase().includes(search.toLowerCase())
  );

  // Region filter
  if (region !== "all") {
    processedData = processedData.filter(d =>
      regionMap[region]?.some(
        state =>
          state.toLowerCase().trim() === d.state_ut.toLowerCase().trim()
      )
    );
  }


  // Sorting filter
  if (sortOrder === "high") {
    processedData.sort((a, b) => b[overallKey] - a[overallKey]);
  }
  if (sortOrder === "low") {
    processedData.sort((a, b) => a[overallKey] - b[overallKey]);
  }



  let boysKey, girlsKey, overallKey;

  if (level === "primary") {
    boysKey = "primary_drop_out_rate___boys_"
    girlsKey = "primary_drop_out_rate___girls"
    overallKey = "primary_drop_out_rate___overall"
  }

  if (level === "upper") {
    boysKey = "upper_primary_drop_out_rate___boys"
    girlsKey = "upper_primary_drop_out_rate___girls"
    overallKey = "upper_primary_drop_out_rate___overall"
  }

  if (level === "secondary") {
    boysKey = "secondary_drop_out_rate___boys_"
    girlsKey = "secondary_drop_out_rate___girls"
    overallKey = "secondary_drop_out_rate___overall"
  }

  if (loading) return <h2>Loading UDISE data...</h2>

  if (error) {
    return (
      <div className="center error">
        <h2>{error}</h2>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    )
  }

  console.log("Selected region:", region);
  console.log(
    "States from API:",
    data.map(d => d.state_ut)
  );


  return (
    <div className="dashboard">

      <div className="tabs">
        <button className={level === "primary" ? "active" : ""} onClick={(e) => setLevel("primary")}>Primary</button>
        <button className={level === "upper" ? "active" : ""} onClick={(e) => setLevel("upper")}>Upper Primary</button>
        <button className={level === "secondary" ? "active" : ""} onClick={(e) => setLevel("secondary")}>Secondary</button>
      </div>

      <StatsCards data={processedData} overallKey={overallKey} level={level} />

      <div className="controls">
        <input
          type="text"
          placeholder="Search state..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="2021-22">2021-22</option>
        </select>

        <select value={sortOrder} onChange={(e) => setsortOrder(e.target.value)}>
          <option value="none">No Sorting</option>
          <option value="high">Highest Dropout</option>
          <option value="low">Lowest Dropout</option>
        </select>

        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="all">All Regions</option>
          <option value="south">South</option>
          <option value="north">North</option>
          <option value="east">East</option>
          <option value="west">West</option>
          <option value="northeast">North East</option>
        </select>

      </div>
      {processedData.length === 0 && (
        <p>No data available for selected region.</p>
      )}

      <DropoutChart data={processedData} boysKey={boysKey} girlsKey={girlsKey} level={level} />
    </div>
  );
}
