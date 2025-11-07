'use client';
import About from '@/sections/About';
import Hero from '@/sections/Hero';
import Navigation from '@/sections/Navigation';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';
import React from 'react'
import Footer from './components/Footer';

const Page = () => {
  return (
    <>
      <div className='relative'>
        <Navigation />
        <Hero />
        <About />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

export default Page