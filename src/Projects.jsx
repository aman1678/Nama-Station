import Card from './Card.jsx'
function Project() {
    return(
        <section id="projects">
            <h2 className="projects-header">Cool Stuff I Built &#9786;</h2>
            <div className="project-cards">
                <a href="" target="_blank"><Card title="Project 1" description="Desc 1"/></a>
                <a href="" target="_blank"><Card title="Project 2" description="Desc 2"/></a>
                <a href="" target="_blank"><Card title="Project 3" description="Desc 3"/></a>
                <a href="" target="_blank"><Card title="Project 4" description="Desc 4"/></a>
            </div>
        </section>
    );
}

export default Project