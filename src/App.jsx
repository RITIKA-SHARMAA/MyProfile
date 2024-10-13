import { useState } from 'react'
import reactLogo from './assets/react.svg'

import {About , Contact ,Experience, Feedbacks, Navbar, Tech, StarsCanvas, Hero  , Works,Work2, useWindowSize} from './components'
import {BrowserRouter} from "react-router-dom";

const App = () => {
    const { width } = useWindowSize();
    const isLargeScreen = width >= 1024; // Adjust the breakpoint as needed

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                {isLargeScreen && <StarsCanvas />} {/* Render StarsCanvas only on large screens */}
                {isLargeScreen && <Tech />}

                <Experience />

                {/* Conditional rendering based on isLargeScreen */}
                {isLargeScreen ? <Works /> : <Work2 />}

                {/* <Feedbacks /> */}
                <div className="relative z-0">
                    <Contact />
                </div>
            </div>
        </BrowserRouter>

// <BrowserRouter>
    //     <div className='relative z-0 bg-primary'>
    //         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    //             <Navbar />
    //             <Hero />
    //         </div>
    //         <About />
    //         <Experience />
    //         <Tech />
    //         <Works />
    //         {/*<Feedbacks />*/}
    //         <div className='relative z-0'>
    //             <Contact />
    //             <StarsCanvas />
    //         </div>
    //     </div>
    // </BrowserRouter>

  )
}

export default App
