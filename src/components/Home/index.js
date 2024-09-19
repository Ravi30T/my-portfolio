import {useState, useEffect} from "react";
import { FaArrowRight } from "react-icons/fa";
import './index.css'

const roleList = ["Web Developer", "Software Developer", "Freelancer", "Full Stack Developer"]
const resumeData = "https://drive.google.com/file/d/1ks6MzW94Xmj9YMLrS4hNr7_tNc6goPne/view?usp=sharing"

const Home = () => {
    const [count, setCount] = useState(0)
    const [resumeLink] = useState(resumeData)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => (prev < roleList.length - 1 ? prev + 1 : 0));
        }, 3000);
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <>
        <div className='home-bg-img' id='homeSection'>
            <div className="home-card">
                <h1 className="home-name">HI,<br/>
                    I’M RAVITEJA GATLA
                </h1>
                <h2 className="home-role">
                    I’M A <span className="role-name">{roleList[count]} </span>
                </h2>
                
                <a href={resumeLink} rel="noreferrer" target="_blank" className='anchor-el'>
                    <button className="home-resume-btn resume-btn-container"> 
                                <p className="resume-text"> RESUME </p> 
                                <p className="right-arrow"> <FaArrowRight/> </p>
                    </button>
                </a>    
            </div>
        </div>
    </>
    )
}

export default Home