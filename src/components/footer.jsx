import React from "react";
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    <strong>Data Source:</strong> Unified District Information System for
                    Education (UDISE), Government of India
                </p>

                <p>
                    <strong>Academic Year:</strong> 2021–22
                </p>

                <p className="footer-note">
                    This project is built for educational and data visualization purposes.
                </p>

                <p className="footer-credit">
                    © {new Date().getFullYear()} Student Dropout Analytics – India
                </p>
            </div>
        </footer>
    );
}
