import React from 'react';

const Landing = () => {
  return (
    <div className="landing">
     <div className="image-container">
                <img src="backcover.png" alt="Img"

                    className="background-img" />
            </div>
      
    
        <div className="landing-content">
            <div className="para">
                <p>WE <span>BUILD</span> <span>&</span> REFINE <br /> <span>SMART</span> WEB <span>SOLUTIONS</span></p>
            </div>
            <div className="text-container">
                <p>Realize your vision securely, collaborating effortlessly with anyone, anywhere, on any device.</p>
            </div>
            <div className="btn">
                <button>
                    Chat with us
                </button>
                <button>
                    Book A Call
                </button>
            </div>
            <div className="footer">
                <div>
                    <h1>
                        100+
                    </h1>
                    <p>
                        Satisfied Clients
                    </p>
                </div>
                <div>
                    <h1>150+</h1>
                    <p> Projects Completed</p>
                </div>
                <div>
                    <h1> 14+</h1>
                    <p>Years Industry Experience</p>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Landing;
