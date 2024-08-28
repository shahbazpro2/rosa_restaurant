'use client'
import React, { useEffect } from 'react'

const DotScroll = () => {

    useEffect(() => {
        const handleScroll = () => {
            const dots = document.querySelectorAll(".dots > div");
            const dotOne = document.querySelector(".dots .one");
            const dotTwo = document.querySelector(".dots .two");
            const dotThree = document.querySelector(".dots .three");
            const headerSection = document.querySelector("header");
            const headerSectionHeight = headerSection.offsetHeight;
            const recipeSection = document.querySelector(".recipes");
            const menuSection = document.querySelector(".menu");
            const fixedImageSection = document.querySelector(".fixed-image");
            const footerSection = document.querySelector("footer");

            if (window.scrollY < headerSectionHeight * 0.5) {
                dots.forEach((dot) => dot.classList.remove("black"));
                dotTwo.classList.remove("active");
                dotOne.classList.add("active");
            } else if (window.scrollY > headerSectionHeight * 0.5 && window.scrollY < recipeSection.offsetTop * 0.72) {
                dots.forEach((dot) => dot.classList.add("black"));
            } else if (window.scrollY > recipeSection.offsetTop * 0.75 && window.scrollY < menuSection.offsetTop * 0.81) {
                dots.forEach((dot) => dot.classList.remove("black"));
                dotOne.classList.remove("active");
                dotThree.classList.remove("active");
                dotTwo.classList.add("active");
            } else if (window.scrollY > menuSection.offsetTop * 0.81 && window.scrollY < fixedImageSection.offsetTop * 0.86) {
                dots.forEach((dot) => dot.classList.add("black"));
                dotThree.classList.remove("active");
                dotTwo.classList.add("active");
            } else if (window.scrollY > fixedImageSection.offsetTop * 0.86 && window.scrollY < footerSection.offsetTop * 0.72) {
                dots.forEach((dot) => dot.classList.remove("black"));
                dotTwo.classList.remove("active");
                dotThree.classList.add("active");
            } else if (window.scrollY > footerSection.offsetTop * 0.72 && window.scrollY < footerSection.offsetTop * 0.901) {
                dots.forEach((dot) => dot.classList.add("black"));
            } else if (window.scrollY > footerSection.offsetTop * 0.901) {
                dots.forEach((dot) => dot.classList.remove("black"));
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleDotClick = (sectionId) => {
        window.scrollTo({
            top: document.querySelector(sectionId).offsetTop - 100,
            behavior: "smooth",
        });
    };

    return (
        <div className="dots">
            <div className="active one" data-x="header" onClick={() => handleDotClick("header")}></div>
            <div className="two" data-x=".recipes" onClick={() => handleDotClick(".recipes")}></div>
            <div className="three" data-x=".fixed-image" onClick={() => handleDotClick(".fixed-image")}></div>
        </div>
    )
}

export default DotScroll
