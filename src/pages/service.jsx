import React from 'react'
import ServiceHero from '../component/ServicePage/serviceHero'
import ServiceList from '../component/ServicePage/servicelist'
import ServiceProcess from '../component/ServicePage/serviceprocess'
import ServicePricing from '../component/ServicePage/serviceprice'
import ServiceCta from '../component/ServicePage/servicecta'
import ServiceD from '../component/ServicePage/serviceD'
const Service = () => {
    return (
        <div>
            <ServiceHero />
            <ServiceList />
            <ServiceProcess />
            <ServicePricing />
            <ServiceCta />
            <ServiceD />
        </div>
    )
}

export default Service