import React from 'react'
import { useApiData } from "../hooks/useApiData";
import { useDashboard } from "../context/DashboardContext";
import { useNationalSnapshot } from "../hooks/useNationalSnapshot";
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'

export default function Home() {

    const { data, loading } = useApiData();
    const { level } = useDashboard();
    const snapshot = useNationalSnapshot(data, level);

    const navigate = useNavigate()

    console.log("home data length", data?.length)
    console.log("selected value", level);
    console.log("API data sample:", data?.[0]);
    console.log("Snapshot result:", snapshot);


    return (
        <>
            <section className='hero'>
                <div className='hero-container'>
                    <h1>Visualizing Student Dropout Rates Across Indian States</h1>
                    <p>
                        Explore state-wise student dropout rates across India,
                        comparing boys and girls at different education levels using official UDISE data.
                    </p>
                </div>
                <div className='hero-actions'>
                    <button onClick={() => navigate("/dashboard")} className='dashboard-btn'>View Dashboard</button>
                    <button className='explore-btn' onClick={() => navigate('/about')}>Explore Data</button>
                </div>
            </section>
            <section className="snapshot" id='national-snapshot'>
                <h2>National Snapshot</h2>
                <p className="snapshot-subtitle">
                    A high-level overview of student dropout rates across India
                </p>

                <div className="snapshot-cards">
                    <div className="snapshot-card">
                        <h3>Overall Dropout Rate</h3>
                        <strong>{snapshot.overall ? `${snapshot.overall}%` : "--"}</strong>
                        <p>National average across all states</p>
                    </div>

                    <div className="snapshot-card boys">
                        <h3>Boys Dropout Rate</h3>
                        <strong>{snapshot.boys ? `${snapshot.boys}%` : "--"}</strong>
                        <p>Average dropout rate among boys</p>
                    </div>

                    <div className="snapshot-card girls">
                        <h3>Girls Dropout Rate</h3>
                        <strong>{snapshot.girls ? `${snapshot.girls}%` : "--"}</strong>
                        <p>Average dropout rate among girls</p>
                    </div>

                    <div className={`snapshot-card gap ${snapshot.gap > 0 ? "boys" : "girls"}`}>
                        <h3>Gender Dropout Gap</h3>
                        <strong>
                            {snapshot.gap ? `${snapshot.gap > 0 ? "+" : ""}${snapshot.gap}%` : "--"}
                        </strong>
                        <p>Boys minus girls dropout rate</p>
                    </div>

                </div>
            </section>

            <section className="why-section">
                <h2>Why This Data Matters</h2>
                <p>
                    Student dropout rates reflect deeper challenges such as access to education,
                    economic conditions, and social inequality.
                </p>
                <p>
                    By visualizing dropout trends across states and genders, this platform helps
                    identify regional disparities and encourages data-driven discussions around
                    educational improvement and policy planning.
                </p>
            </section>

        </>
    )
}
