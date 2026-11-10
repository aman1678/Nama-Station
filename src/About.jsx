import profilePic from './assets/pictureofAman.jpg'

function About() {
    return (
        <section id="about">
            <img src={profilePic} alt="profile picture" className="profile-img"/>
            <div className="intro-body">
                <h2>Who is Aman?</h2>
                <p>
                    I am a person who loves math, physics, and computer science related things. 
                    Which basically just means I enjoy building things and solving problems.
                    I studied physics at the University of California, San Diego
                    (Go Tritons!) and received my B.S. from there in June of 2025. Since then, 
                    I have embarked on a vast adventure of post-grad life. 
                </p>
                <p>
                    These days, most of my building happens in Python and TypeScript. I have built
                    full-stack web apps with React, Flask, and SQLite, including a platform I developed
                    as a freelancer for a UCSD startup and Driew, a site for sharing reviews and discussions
                    about Pakistani dramas. On the physics side, I wrote a real-time gravitational simulation
                    engine that uses NumPy and numerical integration to model orbits, and I spent a good
                    amount of time hunting down the numerical drift that crept into my trajectories.
                    Turns out the universe is much better at conserving energy than my first draft was.
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