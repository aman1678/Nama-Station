import Card from './Card.jsx'
import gravSimPic from './assets/gravSim.png'
import driewPic from './assets/driew.png'
import cowbowApocPic from './assets/cowbowApoc.png'
import namaStation from './assets/namaStation.png'

function Project() {
    return(
        <section id="projects">
            <h2 className="projects-header">Cool Stuff I Built &#9786;</h2>
            <div className="project-cards">
                <a href="https://github.com/ibrahimahmd/Newtonian-Two-Body-Problem-Simulation" target="_blank">
                    <Card 
                        title="Gravitational Simulation Engine" 
                        description="Desc 1" 
                        image={gravSimPic}
                    />
                </a>
                <a href="https://github.com/aman1678/Driew" target="_blank">
                    <Card 
                        title="Driew" 
                        description="Desc 2"
                        image={driewPic}
                    />
                </a>
                <a href="https://github.com/aman1678/Cowboy-Apocalypse" target="_blank">
                    <Card 
                        title="Cowboy Apocalypse" 
                        description="Desc 3"
                        image={cowbowApocPic}
                    />
                </a>
                <a href="https://github.com/aman1678/Nama-Station" target="_blank">
                    <Card 
                        title="This Page: Nama Station!" 
                        description="Desc 4"
                        image={namaStation}
                    />
                </a>
            </div>
        </section>
    );
}

export default Project