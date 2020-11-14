import React from 'react'
import selfie from './selfie-masha.png'
import './homeSection.css'

const HomeSection = () => {
    return(
        <div>
            <p>Hello. This website is WIP. Thanks.</p>
            <img className="selfie" src={selfie} alt="Masha's Selfie" />
        </div>
    )
}

export default HomeSection;