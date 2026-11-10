import Card from './Card.jsx'
import gravSimPic from './assets/gravSim.png'
import driewPic from './assets/driew.png'
import cowbowApocPic from './assets/cowbowApoc.png'
import namaStation from './assets/namaStation.png'
import { FaGithub } from 'react-icons/fa'

function Project() {
    return(
        <section id="projects">
            <h2 className="projects-header">Cool Stuff I Built &#9786;</h2>
            <div className="project-cards">
                <a href="https://github.com/ibrahimahmd/Newtonian-Two-Body-Problem-Simulation" target="_blank">
                    <Card 
                        title="Gravitational Simulation Engine" 
                        description="Stack: Python, NumPy, Pygame" 
                        image={gravSimPic}
                    />
                </a>
                <a href="https://github.com/aman1678/Driew" target="_blank">
                    <Card 
                        title="Driew: A Pakistani drama review platform" 
                        description="Stack: Python, Flask, TypeScript, React, Node.js, Vercel, SQLite"
                        image={driewPic}
                    />
                </a>
                <a href="https://github.com/aman1678/Cowboy-Apocalypse" target="_blank">
                    <Card 
                        title="Cowboy Apocalypse" 
                        description="Stack: Python, Pygame"
                        image={cowbowApocPic}
                    />
                </a>
                <a href="https://github.com/aman1678/Nama-Station" target="_blank">
                    <Card 
                        title="This Page: Nama Station!" 
                        description="Stack: React, JavaScript, Vercel"
                        image={namaStation}
                    />
                </a>
            </div>
            <h3 className="projects-header">Check out more on my <a href="https://github.com/aman1678">github</a> <FaGithub/></h3>
        </section>
    );
}

export default Project