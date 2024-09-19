import {useState} from 'react'
import './index.css'

const skillsList = [
    {
        id:  1,
        skillName: 'HTML'
    },
    {
        id:  2,
        skillName: 'CSS'
    },
    {
        id:  3,
        skillName: 'Bootstrap'
    },
    {
        id:  4,
        skillName: 'Python'
    },
    {
        id:  5,
        skillName: 'JavaScript'
    },
    {
        id:  6,
        skillName: 'React JS'
    },
    {
        id:  1,
        skillName: 'Node JS'
    },
    {
        id:  1,
        skillName: 'SQLite'
    },
]

const Skills = () => {
    const [skills] = useState(skillsList)

    return (
        <div className="skills-main-container" id="skillsSection">
            <div className="skills-details-container">
            <h1 className='my-knowledge-heading'> MY KNOWLEDGE </h1> 
                <ul className='skills-list-container'>
                    {
                        skills.map(each => (
                            <li key={each.id} className='skill-list'> {each.skillName} </li> 
                        ))
                    }
                </ul>
            </div>
            
            <div className='skills-img-container'>
                <img src='https://res.cloudinary.com/dhvmbmaar/image/upload/v1725359382/development-4536630_1280_qe2txj.png' alt="skills img" className='skills-img' />
            </div>
        </div>
    )

}

export default Skills