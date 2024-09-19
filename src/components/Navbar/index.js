import './index.css'
const Navbar = () => {
    return (
        <nav className='nav-container'>
            <div className='logo-container'>
                <h1 className='logo'> GRT Portfolio </h1>
            </div>

            <div className='nav-links-container'>
                <button type='button'>
                    About
                </button>
                <button>
                    Skills
                </button>
                <button>
                    My Work
                </button>

            </div>

        </nav>
    )
}

export default Navbar

// <img src="https://res.cloudinary.com/dhvmbmaar/image/upload/v1725515477/DALL_E_2024-09-04_15.43.49_-_A_minimalistic_rectangular_logo_for_a_portfolio_website._The_logo_features_the_initials_GRT_prominently_centered_with_the_word_PORTFOLIO_undernea_fmwmll.webp" alt="profile-logo" className='logo'/>