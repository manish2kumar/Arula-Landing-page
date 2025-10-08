import React from "react";
import heroImg from "../assets/hero.png"; // your hero image
import ratingImg from "../assets/rating.png"; // your rating image (with stars, person icon, text)

export default function Hero() {
  return (
    <section className="bg-white h-screen flex items-center">
      <div className="w-[90%] mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3E2F84] leading-tight">
            ARULA for Autism
          </h1>
          <p className="text-lg md:text-2xl text-gray-700">
            <span className="font-semibold">The Ultimate Therapy Solution for Autism</span><br />
            A Completely Home-Based Treatment to ensure Promising Results in All Areas of Development
          </p>

          {/* Rating Image */}
          <div className="flex items-center">
            <img
              src={ratingImg}
              alt="Star rating with person icon and text"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
            <button className="bg-[#3E2F84] text-white py-4 px-8 rounded-lg hover:bg-[#5b49b0] transition-colors text-lg">
              Talk to an ARULA Guide
            </button>
            <button className="bg-pink-400 text-white py-4 px-8 rounded-lg hover:bg-pink-500 transition-colors text-lg">
              Take our Questionnaire
            </button>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Parent hugging child illustration"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
