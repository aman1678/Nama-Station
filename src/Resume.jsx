import resume from './assets/AmanAhmedResume (6).pdf'
function Resume() {
    return(
        <section id="resume">
            <div className="resume-pdf">
                <h2>Resume</h2>
                <iframe
                src= {resume}
                width="100%"
                height="100%"
                title="Resume"
                />
            </div>
        </section>
    )
}

export default Resume