import React from 'react'

export const Tecnologies = () => {
  return (
    <>
<div className="technologies">
        <div className="core-technologies-title">
            <h2>Our Core Technologies</h2>
        </div>
        <div className="description2">
            <div className="description">
                <h5>Dev's Inn works under various modern technologies for effective, scalable, and
                    future-proof custom software development.</h5>
            </div>
            <div className="tabs-container">
                <div className="tab">
                    <button className="tab-button">Graphic and Illustration</button>
                </div>
                <div className="tab">
                    <button className="tab-button">Full stack</button>
                </div>
                <div className="tab">
                    <button className="tab-button">Artificial Intelligence</button>
                </div>
            </div>
            <div class="tab-content">
                <div class="grid-container">
                    <div class="tab-item">
                        <img src="apple.png" alt="Django"/>
                    </div>
                    <div class="tab-item">
                        <img src="android.png" alt=".NET"/>
                    </div>
                    <div class="tab-item">
                        <img src="angular.png" alt="Express"/>
                    </div>
                    <div class="tab-item">
                        <img src="node.png" alt="Laravel"/>
                    </div>
                    <div class="tab-item">
                        <img src="netcore.png" alt="NestJS"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
export default Tecnologies;
