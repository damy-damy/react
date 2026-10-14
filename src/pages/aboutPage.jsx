import React from 'react'
import AboutHero from '../component/AboutPageContent/aboutHero'
import AboutStory from '../component/AboutPageContent/aboutStory'
import AboutTeam from '../component/AboutPageContent/aboutTeam'
import AboutCta from '../component/AboutPageContent/aboutCta'
import AboutWhy from '../component/AboutPageContent/aboutWhy'
const AboutPage = () => {
    return (
        <div>
            <AboutHero />
            <AboutStory />
            <AboutTeam />
            <AboutCta />
            <AboutWhy />
        </div>
    )
}

export default AboutPage