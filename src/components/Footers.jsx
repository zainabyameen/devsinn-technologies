import React from 'react'

export const Footers = () => {
  return (
   <>
   <div className="footer-section">
    <div className="footer-columns">
        <div className="footer-column">
            <h2 className="footer-heading">About us</h2>
            <ul className="footer-links">
                <li>Company</li>
                <li>Why Choose us</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className="footer-column">
            <h2 className="footer-heading">Resources</h2>
            <ul className="footer-links">
                <li>Case Studies</li>
                <li>Career</li>
            </ul>
        </div>
    </div>
    <div className="footer-column">
        <h2 className="footer-heading">Social Media</h2>
        <ul className="footer-links">
            <li>Creative Design</li>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Digital Marketing</li>
        </ul>
    </div>
</div>
   
   
   </>
  )
}
export default Footers;
