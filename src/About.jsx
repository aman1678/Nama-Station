import profilePic from './assets/pictureofAman.jpg'

function About() {
    return (
        <section id="about">
            <img src={profilePic} alt="profile picture" className="profile-img"/>
            <div className="intro-body">
                <h2>Who is Aman?</h2>
                <p>
                    I am a passionate and enthusiastic person who deeply loves technological 
                    inovation and problem solving. Which essentially means I like building stuff
                    and fixing stuff. I studied physics at the University of California, San Diego
                    (Go Tritons!) and recieved my B.S. from there in June of 2025. Since then, I have
                    embarked on a vast adventure of technological exploration. Inlcuding but not limited
                    to software engineering (full-stack), physics simulation, quantum computing, and more!
                </p>
                <p>
                    When I want to take a break from technology, I enjoy spending time outside. Some of the things I enjoy 
                    are walking, hiking, playing basketball, or simply looking at nature. I believe it is important to 
                    take time to rewind in this ever so accelerating universe. A calm mind is a strong one.  

                </p>
            </div>
        </section>
    );
}

export default About