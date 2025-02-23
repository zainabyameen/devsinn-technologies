import React from 'react'

export const Contact = () => {
  return (
    <>
    <div className="contact-section">
    <div className="contact-info">
        <div className="location">
            <img src="flag.png.png" alt="Lahore Icon"/>
            <h2>Lahore</h2>
            <a href="tel:+92 336 5918295">+92 336 5918295</a>
        </div>
        <div className="location">
            <img src="flag.png.png" alt="Islamabad Icon"/>
            <h2>Islamabad</h2>
            <a href="tel:+92 336 5918295">+92 336 5918295</a>
        </div>
        <div className="location">
            <img src="united.png.png" alt="United Kingdom Icon"/>
            <h2>United Kingdom</h2>
            <a href="tel:+44 7868 862651">+44 7868 862651</a>
        </div>
    </div>
</div>
    </>
  )
}
export default Contact;
