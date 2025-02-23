import React from 'react'

export const Expert = () => {
    return (
        <>
            <div className="containers">
                <div className="left">
                    <div className="experts">
                        <button className="experts-btn">
                            Experts
                        </button>
                        <div className="heading">
                            <h1>Meet Our <span class="highlight">Team</span></h1>
                        </div>
                        <div className="description1">
                            <h5> Dev's Inn Technologies, your gateway to cutting-edge IT services for businesses and brands. We are
                                your
                                strategic partner in navigating the ever-evolving digital landscape. With a relentless commitment to
                                innovation and excellence.
                                We provide tailored IT solutions that empower your organization to thrive in the modern world.</h5>
                        </div>
                        <button className="btn2">
                            Our Services
                        </button>
                    </div>
                </div>

                <div className="right">
                    <div className="carousel-container">
                        <div className="team-slide">
                            <img src="/android.png" alt="Azan Asim" />
                            <div className="team-info">
                                <h3>Azan Asim</h3>
                                <p>Frontend Developer</p>
                            </div>
                        </div>

                        <div className="team-slide">
                            <img src="/images/team2.jpg" alt="Ahsan Khan" />
                            <div className="team-info">
                                <h3>Ahsan Khan</h3>
                                <p>Flutter Developer</p>
                            </div>
                        </div>

                        <div className="team-slide">
                            <img src="/images/team3.jpg" alt="Ubaid Ullah Asim" />
                            <div className="team-info">
                                <h3>Ubaid Ullah Asim</h3>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
export default Expert;



