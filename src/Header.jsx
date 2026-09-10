
function Header() {

    return(
        <header>
            <h1 className="header">Nama Station</h1>
            <nav>
                <ul className="navigation-links">
                    <li className="about-nav"><a href="#about">About</a></li>
                    <li className="projects-nav"><a href="#projects">Projects</a></li>
                    <li className="resume-nav"><a href="#resume">Resume</a></li>
                    <li className="contact-nav"><a href="#contact">Contact</a></li>

                </ul>
            </nav>
        </header>
    );
}

export default Header