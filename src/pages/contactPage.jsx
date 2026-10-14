import React from 'react'
import ContactHero from '../component/contactPage/contacthero'
import ContactForm from '../component/contactPage/contactform'
import ContactMap from '../component/contactPage/contactmap'

const ContactPage = () => {
    return (
        <div>
            <ContactHero />
            <ContactForm />
            <ContactMap />
        </div>
    )
}

export default ContactPage