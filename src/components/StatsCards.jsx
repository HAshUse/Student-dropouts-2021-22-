export default function StatsCards({ data, overallKey, level }) {
  if (!data.length){
    return <p>No data to display</p>;
  } else if(data.length < 2){
    return <p>Not enough data to calculate Highest & Lowest</p>
  } 
    const sorted = [...data].sort(
      (a, b) => a[overallKey] - b[overallKey]);
  
      const lowest = sorted[0];
      const highest = sorted[sorted.length - 1];
      // console.log("Data length:", data.length);


  return (
    <div className="cards">
      <div className="card">
        <h3>
          {level === "primary" && "Highest Primary Dropout"}
          {level === "upper" && "Highest Upper Primary Dropout"}
          {level === "secondary" && "Highest Secondary Dropout"}
        </h3>

        <p>{highest.state_ut}</p>
        <strong>{highest[overallKey]}%</strong>
      </div>

      <div className="card">
        <h3>
          {level === "primary" && "Lowest Primary Dropout"}
          {level === "upper" && "Lowest Upper Primary Dropout"}
          {level === "secondary" && "Lowest Secondary Dropout"}
        </h3>

        <p>{lowest.state_ut}</p>
        <strong>{lowest[overallKey]}%</strong>
      </div>
    </div>
  );
}