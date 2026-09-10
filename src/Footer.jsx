import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

function Footer() {
    return(
        <footer>
            <div className="social-med">
                <div className="social-med-links">
                    <a id="instagram" href="https://www.instagram.com/amen_ahead/" target="_blank" ><FaInstagram size={50}/></a>
                    <a id="github" href="https://github.com/aman1678" target="_blank"><FaGithub size={50}/></a>
                    <a id="linkedin" href="https://www.linkedin.com/in/amanahmed212/" target="_blank"><FaLinkedin size={50}/></a>
                </div>
            </div>
            <p>&copy; Nama Station</p>
        </footer>
    );
}

export default Footer