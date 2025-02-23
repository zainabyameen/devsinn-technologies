import React from 'react'

export const Stories = () => {
  return (
   <>
   <div className="stories">
    <div className="heading">
        <h2>
            Creative Achievements
        </h2>
    </div>
    <div className="description">
        <h5>Our comprehensive range of expertise empowers businesses to seize new opportunities and achieve
            remarkable results.</h5>
    </div>
    <div className="tabs-container">
    <div className="tabs">
            <button className="tab-button">Web Design</button>
        </div> 
        <div className="tabs">
            <button className="tab-button">Web Development</button>
        </div>
        <div className="tabs">
            <button className="tab-button">Mobile App Development</button>
        </div>
    </div>
    <div className="carousel-container">
        <div className="carousel">
            <div className="carousel-slide">
                <img src="/images/home/project/image1.png" alt="Img1"/>
            </div>
            <div className="carousel-slide">
                <img src="/images/home/project/image2.png" alt="Img2"/>
            </div>
            <div className="carousel-slide">
                <img src="/images/home/project/image3.png" alt="Img3"/>
            </div>
            <div className="carousel-slide">
                <img src="/images/home/project/image4.png" alt="Img4"/>
            </div>
            <div className="carousel-slide">
                <img src="/images/home/project/image5.png" alt="Img5"/>
            </div>
            <div className="carousel-slide">
                <img src="/images/home/project/image6.png" alt="Img6"/>
            </div>
        </div>
    
    </div>


</div>
   </>
  )
}
export default Stories;