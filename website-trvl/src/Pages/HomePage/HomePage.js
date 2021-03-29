import React from 'react'
import '../../App.css'
import Card from '../../components/CardItem/Card'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Card />
            <Footer />
        </>
    )
}
