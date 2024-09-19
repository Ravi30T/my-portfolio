import './index.css'

const About = () => {

    return (
        <div className="about-section" id="aboutSection">
        <img src='https://res.cloudinary.com/sree4441/image/upload/v1725354925/gatla_sdn0dc.jpg' alt="profile-photo" className="pro-pic"/>
        <div className="about-details-card">
            <h1 className="about-heading">Who am, <span className="highlight-text">I ?</span></h1>
            <p className="about-description">
                Hello, I'm Raviteja Gatla, a B.Tech graduate in Computer Science and Engineering from Malla Reddy College of Engineering, 
                Hyderabad. My passion for computers naturally led me into the IT field, where I thrive on learning new technologies. 
                I'm particularly enthusiastic about web development, and I love turning ideas into interactive, responsive websites. 
                My eagerness to continuously learn and grow in this dynamic industry drives me to stay updated with the latest trends and tools.
            </p>
        </div>
    </div>
    )
}

export default About

