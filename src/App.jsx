import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const About = React.lazy(() => import("./components/About"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));
const Education = React.lazy(() => import("./components/Education"));
const Volunteering = React.lazy(() => import("./components/Volunteering"));
const Sports = React.lazy(() => import("./components/Sports"));
const Awards = React.lazy(() => import("./components/Awards"));
const Courses = React.lazy(() => import("./components/Courses"));
const Timeline = React.lazy(() => import("./components/Timeline"));
const Contact = React.lazy(() => import("./components/Contact"));
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-white">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <React.Suspense
          fallback={
            <div className="text-center py-10 text-gray-400">Loading...</div>
          }
        >
          <About />
          <Timeline />
          <Education />
          <Skills />
          <Projects />
          <Courses />
          <Volunteering />
          <Sports />
          <Awards />
          <Contact />
        </React.Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
