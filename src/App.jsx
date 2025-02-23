import React from 'react';
import './App.css'; // Import your CSS file
import Landing from './components/Landing';
import Empower from './components/Empower';
// import Service from './components/Service';
import Expert from './components/Expert';
import Tecnologies from './components/Tecnologies';
import Stories from './components/Stories';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footers from './components/Footers';
import Logo from './components/Logo';
import Header from './components/Header';
import Services from './components/Services';

const App = () => {
    return (
        <>
            <div className="image-container">
                <img src="backcover.png" alt="Img"

                    className="background-img" />
            </div>
<Header/>

            <Landing />
            <Empower />
            {/* <Service /> */}
            <Services/>
            <Expert />
            <Tecnologies />
            <Stories />
            <Reviews />
            <Contact />
            <Footers />
            <Logo />
        </>
    );
}

export default App;

