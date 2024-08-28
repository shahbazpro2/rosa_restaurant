'use client'
import React from 'react'

const Footer = () => {

    const handleSvgUpClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <footer>
                <div className="text">
                    <h2>ABOUT ROSA</h2>
                    <div>
                        <i className="fas fa-asterisk"></i>
                    </div>
                    <p>ROSA is an enchanting and easy-to-use parallax Restaurant WordPress theme that allows you to tell your story in a dynamic, narrative and enjoyable way, making it perfect for restaurants, bakeries, bars or coffee shops.</p>
                </div>
            </footer>

            <div className="copyright">
                <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={192} height={61} viewBox="0 0 160.7 61.5" className="svg-up">
                    <path fill="#262526" d="M80.3 61.5s22.1-2.7 43.1-5.4 41-5.4 36.6-5.4c-21.7 0-34.1-12.7-44.9-25.4S95.3 0 80.3 0c-15 0-24.1 12.7-34.9 25.4S22.3 50.8.6 50.8c-4.3 0-6.5 0 3.5 1.3s32.1 4 76.2 9.4z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-2 arrow-up" onClick={handleSvgUpClick}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                </svg>

                <ul className="info">
                    <li>&copy; ROSA 2017</li>
                    <li>13 Hanway Square, London</li>
                    <li>Tel: 71494563</li>
                </ul>
                <ul className="CTA">
                    <li>
                        <a href="#">PERMISSIONS AND COPYRIGHT</a>
                    </li>
                    <li>
                        <a href="#">CONTACT THE TEAM</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
