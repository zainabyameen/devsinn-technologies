import React from 'react'

export const Reviews = () => {
  return (
   <>
   <div className="reviews-section">
    <div className="reviews-title">
        <h2>Reviews</h2>
    </div>
    <div className="reviews-heading"><span className="highlight">Client</span>
        <h4> Testimonals</h4>
    </div>
    <div className="reviews-description">
        <h5>Securing your digital world: your trusted partner in data protection with
            cutting-edge solutions for comprehensive data security.</h5>
    </div>
    <div className="testimonial-slider">
        <div className="slide">
            <div className="stars">
                ★★★★★
            </div>
            <p className="testimonial-text">
                “Very happy work with agency, so professional to take work and I feel amazing with this work, so
                cool keep going and success!”
            </p>
            <div className="user-info">
                <img src="Picture.png" alt="User Avatar" className="avatar"/>
                <div className="user-details">
                    <h5 className="user-name">Jane D</h5>
                    <span className="user-role">CEO</span>
                </div>
            </div>
        </div>
        <div className="slide">
            <div className="stars">
                ★★★★★
            </div>
            <p className="testimonial-text">
                Erin was proactive, attentive to feedback and interested in delivering a solid work-product.
                I'll continue relying on her for work.
            </p>
            <div className="user-info">
                <img src="Picture2.png.png" alt="User Avatar" className="avatar"/>
                <div className="user-details">
                    <h5 className="user-name">Jane D</h5>
                    <span className="user-role">CEO</span>
                </div>
            </div>
        </div>
    </div>
</div>
   
   </>
  )
}
export default Reviews;
