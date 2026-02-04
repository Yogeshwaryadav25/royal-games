export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h4>Games</h4>
                    <p>Fortnite</p>
                    <p>Fall guys</p>
                    <p>Rocket League</p>
                    <p>Unreal Tournament</p>
                    <p>Infinity Blade</p>
                </div>
                <div className="footer-col">
                    <h4>MarketPlace</h4>
                    <p>Royal Games</p>
                    <p>Fab</p>
                    <p>Sketchfab</p>
                    <p>ArtStation</p>
                </div>
                <div className="footer-col">
                    <h4>Tools</h4>
                    <p>Unreal Engine</p>
                    <p>Unity</p>
                    <p>MetaHuman</p>
                </div>
                <div className="footer-col">
                    <h4>Online Services</h4>
                    <p>Kids Web Service</p>
                    <p>Services Agreement</p>
                    <p>Acceptable Use Policy</p>
                </div>
                <div className="footer-col">
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Newroom</p>
                    <p>Careers</p>
                    <p>Students</p>
                </div>
                <div className="footer-col">
                    <h4>Resources</h4>
                    <p>Dev Community</p>
                    <p>Support</p>
                    <p>Safety and Security</p>
                    <p>Community Rules</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>©️ 2026 Royal Games. All rights reserved.</p>
                <button className="back-top" onClick={()=> window.scrollTo({
                    top:0,
                    behavior: "smooth"
                })}>Back to top</button>
            </div>
        </footer>
    )
}