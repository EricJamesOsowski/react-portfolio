import React from "react";
import "./style.css"

const FooterPage = () => {
    return (
        <div>
            <footer className="footer">
                <div className="row" id="footer-row">
                    <div className="footer-text">
                        <a href="https://github.com/EricJamesOsowski" className="footer-text">GitHub</a>
                    </div>
                    <div className="footer-text">
                        <a href="https://www.linkedin.com/in/eric-osowski-155716137/" className="footer-text">LinkedIn</a>
                    </div>
                    <div className="footer-text">
                        <a href="mailto:eric.j.osowski@icloud.com" className="footer-text">Eric.J.Osowski@icloud.com</a>
                    </div>
                    <div className="footer-text">
                        <a href="#" />763-482-4325
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterPage;