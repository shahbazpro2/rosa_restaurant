'use client'
import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {

    useEffect(() => {
        const handleScroll = () => {
            const headerSection = document.querySelector("header");
            const nav = document.querySelector("header nav");
            const logoImage = document.querySelector("header nav .logo img");

            if (window.scrollY > headerSection.offsetHeight - 75) {
                nav.classList.add("active");
                logoImage.src = "https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988525/logo-rosa.png";
            } else {
                nav.classList.remove("active");
                logoImage.src = "https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988515/logo-rosa-white.png";
            }

            // Handle header text fade
            const headerText = document.querySelector("header .text");
            if (window.scrollY > 0) {
                headerText.style.opacity = -window.scrollY / 300 + 1;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavToggle = () => {
        const navToggle = document.querySelector("header nav .toggle");
        const navSpanMiddle = document.querySelector("header nav .toggle .middle");
        const navNavigationBar = document.querySelector("header nav .navigation-bar");

        navToggle.classList.toggle("active");
        navSpanMiddle.classList.toggle("hide");
        navNavigationBar.classList.toggle("show");
    };

    const handleSvgDownClick = () => {
        window.scrollTo({
            top: document.querySelector(".about-us").offsetTop - 30,
            behavior: "smooth",
        });
    };

    return (
        <header>
            <nav>
                <div className="logo">
                    <Link href="/" className="inline-block">
                        <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988515/logo-rosa-white.png" alt="Rosa Logo" />
                    </Link>
                </div>
                <div className="toggle" onClick={handleNavToggle}>
                    <span className="first"></span>
                    <span className="middle"></span>
                    <span className="last"></span>
                </div>
                <div className="navigation-bar">
                    <ul>
                        <li className="active">
                            <a href="/">
                                Home<span className="underline"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Reservations<span className="underline"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Menu<span className="underline"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Blog<span className="underline"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Features<span className="underline"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Shop<span className="underline"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Contact<span className="underline"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="text">
                <h2>Welcome</h2>
                <h1>THE ROSA</h1>
                <div className="arrow">
                    <span className="left"></span>
                    <i className="fas fa-asterisk"></i>
                    <span className="right"></span>
                </div>
                <span>Ready To Be Opened</span>
                <div className="button">
                    <button>Explore</button>
                </div>
            </div>
            <svg className="svg-down" width="192" height="61" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160.7 61.5" enableBackground="new 0 0 160.7 61.5" xmlSpace="preserve">
                <path fill="currentColor" d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"></path>
            </svg>
            <div className="arrow-down" onClick={handleSvgDownClick}></div>
        </header>
    );
}
