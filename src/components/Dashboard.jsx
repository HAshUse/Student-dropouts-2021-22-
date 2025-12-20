import { useDashboard } from '../context/DashboardContext';
import { useApiData } from "../hooks/useApiData";
import useProcessedApiData from '../hooks/useProcessedApiData'
import DropoutChart from "./DropoutChart";
import StatsCards from "./StatsCards";
import "../App.css";
import { useRef } from 'react';
import { toPng } from 'html-to-image';


export default function Dashboard() {


  const {
    search,
    setSearch,
    level,
    setLevel,
    sortOrder,
    setSortOrder,
    region,
    setRegion,
    year,
    setYear
  } = useDashboard()

  const { data, loading, error } = useApiData();

  const chartRef = useRef(null);

  const downloadChart = async () => {
    if (!chartRef.current) return;

    try {
      const dataUrl = await toPng(chartRef.current, {
        backgroundColor: '#ffffff',
        quality: 1
      })

      const link = document.createElement("a");
      link.download = `student-dropout-${level}.png`
      link.href = dataUrl;
      link.click();

    } catch (err) {
      console.error("Failed to download chart", err)
    }
  };

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

  const processedData = useProcessedApiData({ data, search, region, sortOrder, overallKey })

  if (loading) return <h2>Loading UDISE data...</h2>

  if (error) {
    return (
      <div className="center error">
        <h2>{error}</h2>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <section className='dashboard-section'>
        <div className="tabs">
          <button className={level === "primary" ? "active" : ""} onClick={(e) => setLevel("primary")}>Primary</button>
          <button className={level === "upper" ? "active" : ""} onClick={(e) => setLevel("upper")}>Upper Primary</button>
          <button className={level === "secondary" ? "active" : ""} onClick={(e) => setLevel("secondary")}>Secondary</button>
        </div>
      </section>
      <section className='dashboard-section insights'>
        <StatsCards data={processedData} overallKey={overallKey} level={level} />
      </section>
      {/* <h2>Filter By...</h2> */}
      <section className='dashboard-section controls-section'>
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

          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
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
      </section>
      {processedData.length === 0 && (
        <p>No data available for selected region.</p>
      )}
      <section className='dashboard-section chart-section'>
        <div className='chart-header'>
          <h3>State-wise Dropout Rates</h3>
          <button className='download-btn' onClick={downloadChart}>Download Chart</button>
        </div>
        <div ref={chartRef}>
          <DropoutChart data={processedData} boysKey={boysKey} girlsKey={girlsKey} level={level} />
        </div>
      </section>
    </div>
  );
}


