import React from "react";
import "../styles/about.css";

export default function About() {
    return (
        <div className="about">
            <section>
                <h1>About This Project</h1>
                <p>
                    Student Dropout Analytics – India is a data visualization project designed to
                    explore student dropout rates across Indian states.
                </p>

                <p>
                    The platform focuses on comparing dropout trends between boys and girls at
                    different education levels, helping users understand regional and gender-based
                    disparities in education.
                </p>
            </section>

            <section>
                <h2>Why This Project</h2>
                <p>
                    Student dropout rates reflect deeper challenges such as access to education,
                    economic conditions, and social inequality.
                </p>

                <p>
                    This project aims to make educational data more accessible and easier to
                    understand through interactive dashboards and visual insights.
                </p>
            </section>

            <section>
                <h3>Data Source</h3>
                <p>
                    All data used in this project is sourced from the Unified District Information
                    System for Education (UDISE), provided by the Government of India.
                </p>
                <p>The dataset used corresponds to the academic year 2021–22.</p>
            </section>

            {/* <section>
                <h3>Technologies Used</h3>
                <ul>
                    <li>React (UI development)</li>
                    <li>React Router (multi-page navigation)</li>
                    <li>Context API (state management)</li>
                    <li>Recharts (data visualization)</li>
                    <li>Axios (API requests)</li>
                    <li>html-to-image (download graph as .png)</li>
                </ul>
            </section> */}

            <section>
                <h3>Project Scope</h3>
                <p>
                    This project is built for educational and data visualization purposes and does
                    not aim to provide policy recommendations. The focus is on learning, analysis,
                    and presentation of publicly available data.
                </p>
            </section>
        </div>
    );
}
