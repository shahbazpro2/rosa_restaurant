import DotScroll from "@/components/DotScroll";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";

export default function HomePage() {
  return (
    <>
      <div className="stop-scroll">
        <Loader />
        <DotScroll />
        <Header />

        <div className="about-us">
          <div className="text">
            <h2>Discover</h2>
            <h3>Our Story</h3>
            <div>
              <i className="fas fa-asterisk"></i>
            </div>
            <p>Rosa is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.</p>
            <div>
              <a className="a-CTA" href="#">
                About Us
              </a>
            </div>
          </div>
          <div className="image-container">
            <div className="image image1">
              <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988527/vertical-photo-1.jpg" alt="Food Photo" />
            </div>
            <div className="image image2">
              <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988532/vertical-photo-2.jpg" alt="Food Photo" />
            </div>
          </div>
        </div>
        <div className="recipes">
          <div className="image"></div>
          <div className="text">
            <h2>Tasteful</h2>
            <h3>Recipes</h3>
          </div>
        </div>
        <div className="menu">
          <div className="box-model">
            <i className="fas fa-times fa-2x close"></i>
            <div className="arrow">
              <div className="arrow arrow-right"></div>
              <div className="arrow arrow-left"></div>
            </div>
            <div className="box-image-container">
              <div className="box-image">
                <img src="" alt="Food Photo" />
              </div>
            </div>
          </div>
          <div className="menu-image-container">
            <div className="image active">
              <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988517/big-menu-thumb-1.jpg" alt="Food Photo" />
            </div>
            <div className="image">
              <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988526/big-menu-thumb-2.jpg" alt="Food Photo" />
            </div>
            <div className="image">
              <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988525/big-menu-thumb-4.jpg" alt="Food Photo" />
            </div>
            <div className="image">
              <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988524/big-menu-thumb-6.jpg" alt="Food Photo" />
            </div>
          </div>
          <div className="text">
            <h2>Discover</h2>
            <h3>Menu</h3>
            <div>
              <i className="fas fa-asterisk"></i>
            </div>
            <p>For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates. We love food, lots of different food, just like you.</p>
            <div>
              <a className="a-CTA" href="#">
                View The Full Menu
              </a>
            </div>
          </div>
        </div>
        <div className="fixed-image">
          <div className="text">
            <h2>The Perfect</h2>
            <h3>Blend</h3>
          </div>
        </div>
        <div className="reservation">
          <div className="text">
            <h2>Culinary</h2>
            <h3>Delight</h3>
            <div>
              <i className="fas fa-asterisk"></i>
            </div>
            <p>We promise an intimate and relaxed dining experience that offers something different to local and foreign patrons and ensures you enjoy a memorable food experience every time.</p>
            <div>
              <a className="a-CTA" href="#">
                Make a Reservation
              </a>
            </div>
          </div>
          <div className="image-container">
            <div className="image image1">
              <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988518/bacon-1.jpg" alt="Food Photo" />
            </div>
            <div className="image image2">
              <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988518/bacon-2.jpg" alt="Food Photo" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
