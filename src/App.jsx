import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Dashboards from './components/Dashboards'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain relative bg-ink-0 text-bone-0 min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="relative z-[2]">
        <Hero />
        <Skills />
        <Projects />
        <Dashboards />
        <Footer />
      </main>
    </div>
  )
}
