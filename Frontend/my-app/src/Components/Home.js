import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const cardData = [
    {
      title: "Crop",
      image: "https://www.shutterstock.com/image-photo/indian-farmer-spreading-fertilizer-green-260nw-2401763899.jpg",
      description: "A crop is a plant or plant product that can be grown and harvested for profit or subsistence. By use, crops fall into six categories: food crops, feed crops, fiber crops, oil crops, ornamental crops, and industrial crops.",
    },
    {
      title: "Seeds",
      image: "https://hips.hearstapps.com/hmg-prod/images/farmer-giving-granulated-fertilizer-to-young-tomato-royalty-free-image-1676657512.jpg?access_token=8c576148-1477-42a3-ade8-2da256ef5119",
      description: "Easily manage your seed inventory with our platform.Track stock levels,categorize different seed varieties,suggest the best options for farmers.Generate sales reports and ensure you always have the right seeds in stock to meet customer needs.",
    },
    {
      title: "Our Stories",
      image: "https://www.shutterstock.com/image-photo/golden-hour-light-casting-over-600w-2465691597.jpg",
      description: "At Green yeild Solutions, we’re on a mission to simplify fertilizer and pesticide management for shop owners.Started by a group of friends, our goal is to support farmers with smart tools, creating a sustainable future for agriculture.",
    },
  ];





  

  return (
    <div>
      {/* Video Section */}
      <header className="header">
        <video
          className="background-video"
          src="https://v.ftcdn.net/04/65/94/08/700_F_465940876_7CsHHBzk1uQE6z9OrIP61wxatNtqJXak_ST.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="video-overlay">
          <h1>Welcome to Green Yeild Solutions</h1>
          <p>Your guide to better farming practices.</p>
        </div>
      </header>

      {/* Slider Section */}
      <section className="slider-section">
        <h2>Fertilizer Options</h2>
        <Slider {...sliderSettings}>
          {cardData.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} className="card-image" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </Slider>
      </section>

     

      {/* Additional Features Section */}
      <section className="info-section">
        <h2>Why Choose Us?</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>Expert Advice</h3>
            <p>Get recommendations tailored to your crops.</p>
          </div>
          <div className="info-item">
            <h3>Easy Management</h3>
            <p>Track stock, sales, and profits effortlessly.</p>
          </div>
          <div className="info-item">
            <h3>Sustainability Focus</h3>
            <p>Enhance soil quality while protecting the environment.</p>
          </div>
        </div>
      </section>


      {/* Footer */}

    </div>
  );
};

export default Home;





