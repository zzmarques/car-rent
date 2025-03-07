import '../../sass/components/_Footer.scss'



const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-title">
                <h1>MORENT</h1>
                <p>Our vision is to provide convenience and help increase your sales business.</p>
            </div>

            <nav className="footer-navbar">

                <div className="container-navbar">
                    <h2>About</h2>
                    <ul>
                        <li>How it works</li>
                        <li>Featured</li>
                        <li>Partnership</li>
                        <li>Bussiness Relation</li>
                    </ul>
                </div>
                
                <div className="container-navbar">
                    <h2>Socials</h2>
                    <ul>
                        <li>Discord</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                    </ul>
                </div>

                <div className="container-navbar">
                    <h2>Community</h2>
                    <ul>
                        <li>Events</li>
                        <li>Blog</li>
                        <li>Podcast</li>
                        <li>Invite a friend</li>
                    </ul>
                </div>


            </nav>

            <div className="container-cops">
                <span className="cop-1">Privacy & Policy</span>
                <span className="cop-2">Terms & Condition</span>
                <span className="cop-3">©2022 MORENT. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;