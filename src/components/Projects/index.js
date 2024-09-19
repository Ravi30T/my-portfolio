import {useState} from 'react'
import { FaArrowRight } from "react-icons/fa";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.css'

const projectsList = [
    {
        id: 1,
        projectName: 'Movies App',
        projectImg: 'https://res.cloudinary.com/dhvmbmaar/image/upload/v1725367549/movies-app-logo_wngya6.jpg',
        projectLiveLink: 'https://ravimoviesapp.ccbp.tech',
        gitHubLink: 'https://github.com/Ravi30T/React-Js-Netflix-Clone.git',
    },
    {
        id: 2,
        projectName: 'NxtWatch App',
        projectImg: 'https://res.cloudinary.com/dhvmbmaar/image/upload/v1725367941/nxtwatch-app-logo_tbifl5.jpg',
        projectLiveLink: 'https://ravinxtwatch30.ccbp.tech',
        gitHubLink: 'https://github.com/Ravi30T/React-js-Youtube-Clone-App.git',
    },
    {
        id: 3,
        projectName: 'Jobby App',
        projectImg: 'https://res.cloudinary.com/dhvmbmaar/image/upload/v1725368327/jobby-app-logo_wom4fa.jpg',
        projectLiveLink: 'https://ravijobbyapp01.ccbp.tech',
        gitHubLink: 'https://github.com/Ravi30T/React-js-Enhanced-Jobby-App.git',
    },
]



const Projects = () => {
    const [projectsData] = useState(projectsList)

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };   
    
    return (
    
        <div className='projects-main-container' id="projectsSection">
            <h1 className='my-work-main-heading'> MY WORK </h1>

            <div className='lg-projects-container'>
                <ul className='projects-list-container'>
                    {
                        projectsData.map(each => (
                            <li key={each.id} className='project-item'>
                                <div className='project-img-name-container'>
                                    <img src={each.projectImg} alt={each.projectName} className='project-img'/>
                                    <p className='project-name'> {each.projectName} </p>
                                </div>
                                <div className='project-details-container'>
                                    <div className='buttons-container'>
                                    <a href={each.projectLiveLink} rel="noreferrer" target="_blank" className='anchor-el'>
                                        <button className="project-btn btn-container" type="button"> 
                                                <p> LIVE </p>
                                                <p className='arrow-bg'> <FaArrowRight /> </p>
                                        </button>
                                        </a>

                                        <a href={each.gitHubLink} rel='noreferrer' target='_blank' className='anchor-el'>
                                                <button className="github-btn btn-container" type="button"> 
                                                            <p> GITHUB </p>
                                                            <p className='arrow-bg'> <FaArrowRight /> </p>
                                                    
                                                </button>
                                            </a>
                                        
                                    </div>
                                    </div>
                                
                            </li> 
                        ))
                    }
                </ul>
            </div>

            <div className="sm-projects-container">
                    <Slider {...settings}>
                        {projectsList.map(each => (
                            <div key={each.id} className='each-project-container'>
                                <div className='project-img-name-container'>
                                    <img src={each.projectImg} alt={each.projectName} className='project-img' />
                                    <p className='project-name'> {each.projectName} </p>
                                </div>
                                <div className='project-details-container'>  
                                    <div className='buttons-container'>
                                    <a href={each.projectLiveLink} rel="noreferrer" target="_blank" className='anchor-el'>
                                        <button className="project-btn btn-container" type="button">
                                            
                                                
                                                    <p> LIVE </p>
                                                    <p className='arrow-bg'> <FaArrowRight/> </p> 
                                                
                                            
                                        </button>
                                    </a>
                                    <a href={each.gitHubLink} rel='noreferrer' target='_blank' className='anchor-el'>
                                        <button className="github-btn btn-container" type="button">
                                                <p> GITHUB </p>
                                                <p className='arrow-bg'> <FaArrowRight/> </p>  
                                        </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>            

    )
    
}

export default Projects

/*
{
                            projectsData.map(each => (
                                <li key={each.id}>
                                    <img src={each.projectImg} alt={each.projectName} className='project-img'/>
                                <div className='project-details-container'>
                                    <p className='project-name'> {each.projectName} </p>
                                    <div className='buttons-container'>
                                        <button className="project-btn"> <a href={each.projectLiveLink} rel="noreferrer" target="_blank"> Live </a> </button>
                                        <button className="github-btn"> <a href={each.gitHubLink} rel='noreferrer' target='_blank'> GitHub </a> </button>
                                    </div>
                                </div>
                                </li>
                            ))
                        }
                            */

/* 


<Slider {...settings}>
                {
                    projectsData.map(each => (
                                <div key={each.id}>
                                    <img src={each.projectImg} alt={each.projectName} className='project-img'/>
                                    <div className='project-details-container'>
                                        <p className='project-name'> {each.projectName} </p>
                                        <div className='buttons-container'>
                                            <button className="project-btn"> <a href={each.projectLiveLink} rel="noreferrer" target="_blank"> Live </a> </button>
                                            <button className="github-btn"> <a href={each.gitHubLink} rel='noreferrer' target='_blank'> GitHub </a> </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                </Slider> */