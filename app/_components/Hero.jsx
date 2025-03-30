"use client";
import React, { useState } from "react";
import Lookup from "../_data/Lookup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const [logoTitle, setLogoTitle] = useState();

  const carouselImages = [
    "/sample_1.jpg",
    "/sample_2.jpg",
    "/sample_3.jpg",
    "/sample_8.jpg",
    "/sample_10.jpg",
    "/sample_9.jpg",
    "/sample_7.jpg",
  ];

  return (
    <>
      <div className="flex items-center mt-8 md:mt-15 flex-col gap-5">
        <h2 className="text-5xl md:text-7xl lg:text-9xl text-center font-extrabold font-mono">
          <span className="text-[#ed1e61] font-playwrite-hu">L</span>
          <span className="text-black font-extrabold font-playwrite-hu">O</span>
          <span className="text-[#ed1e61] font-playwrite-hu">G</span>
          <span className="text-black font-extrabold font-playwrite-hu">O</span>
          <span className="text-[#ed1e61] font-playwrite-hu">F</span>
          <span className="text-primary font-playwrite-hu">Y</span>
        </h2>
        <h2 className="text-4xl text-center font-mono font-bold text-primary mt-20">
          AI-LOGO MAKER
        </h2>
        <h2 className=" text-5xl text-center font-bold font-host-grotesk">
          {Lookup.HeroSubheading}
        </h2>
        <p className="text-[#808080] text-xl text-center font-host-grotesk">
          {Lookup.HeroDesc}
        </p>
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl mt-10">
          <input
            placeholder={Lookup.InputTitlePlaceholder}
            className="p-3 border border-[#ed1e61] rounded-lg w-full shadow-md"
            onChange={(event) => setLogoTitle(event?.target.value)}
          />
          <Link
            href={"/create?title=" + logoTitle}
            className="w-full md:w-auto"
          >
            <Button className="w-full md:w-auto p-6 hover:bg-black hover:text-white transition-colors duration-300">
              Get Started
            </Button>
          </Link>
        </div>
        <h2 className="text-3xl font-bold font-mono mt-20 underline decoration-[#ed1e61]">
          OUR FEATURES
        </h2>
        <div className="bg-white mt-6 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto p-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#ed1e61] hover:scale-105 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#ed1e61] rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-mono">
              Create Custom Logos
            </h3>
            <p className="text-gray-600 font-mono">
              Design unique and professional logos tailored to your brand
              identity
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#ed1e61] hover:scale-105 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#ed1e61] rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-mono">
              AI-Powered Design
            </h3>
            <p className="text-gray-600 font-mono">
              Leverage advanced AI to generate stunning logo variations
              instantly
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#ed1e61] hover:scale-105 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#ed1e61] rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-mono">Easy Export</h3>
            <p className="text-gray-600 font-mono">
              Download your logos in multiple formats (jpg,png,svg) ready for
              use
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#ed1e61] hover:scale-105 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#ed1e61] rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-mono">Fast Delivery</h3>
            <p className="text-gray-600 font-mono">
              Get your logo designs quickly and start using them right away
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen relative left-[50%] right-[50%] mx-[-50vw] mt-20 overflow-hidden">
        <div className="flex animate-scroll gap-5 py-4">
          {/* First set of images */}
          {carouselImages.map((image, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[300px] h-[300px] relative group"
            >
              <Image
                src={image}
                alt={`Design ${index + 1}`}
                fill
                className="rounded-lg shadow-md object-contain opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 group-hover:z-10 "
                priority={index < 3}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {carouselImages.map((image, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-[300px] h-[300px] relative group"
            >
              <Image
                src={image}
                alt={`Design ${index + 1}`}
                fill
                className="rounded-lg shadow-md object-contain opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 group-hover:z-10"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white w-screen relative left-[50%] right-[50%] mx-[-50vw] mt-20">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white"></div>
              <div className="relative h-[500px] w-full">
                <Image
                  src="/AI.jpg"
                  alt="Image 1"
                  fill
                  className="object-cover shadow-md border-2 border-gray-200 rounded-3xl opacity-90"
                  priority
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 p-8 text-right">
              <h1 className="text-3xl font-bold text-[#ed1e61] font-mono">
                AI-RECOMMENDED LOGO IDEAS
              </h1>
              <p className="text-gray-600 text-2xl text-justify mt-10 mb-10 leading-12">
                Get AI-recommended logo ideas tailored to your brand! Our
                intelligent design suggestions ensure creativity and uniqueness.
                Powered by advanced AI algorithms, we analyze your brand's
                personality and industry to create stunning logos that perfectly
                match your identity and target audience.
              </p>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mt-6 bg-[#ed1e61] text-white px-8 py-4 rounded-full hover:bg-black transition duration-300 text-lg font-semibold"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full max-w-4xl mx-auto mt-40 mb-16">
        <div className="absolute -left-4 top-0 w-62 h-62 bg-yellow-100 rounded-3xl transform -rotate-12 z-10 overflow-hidden">
          <Image
            src="/pal1.png"
            alt="Sample Logo 1"
            fill
            className="object-cover rounded-3xl"
            style={{ transform: "scale(1.1)" }}
          />
        </div>
        <div className="absolute left-32 -top-8 w-62 h-62 bg-pink-50 rounded-3xl transform rotate-12 z-20 overflow-hidden">
          <Image
            src="/pal5.png"
            alt="Sample Logo 2"
            fill
            className="object-cover rounded-3xl"
            style={{ transform: "scale(1.1)" }}
          />
        </div>
        <div className="absolute right-24 top-4 w-62 h-62 bg-blue-50 rounded-3xl transform -rotate-6 z-30 overflow-hidden">
          <Image
            src="/pal3.png"
            alt="Sample Logo 3"
            fill
            className="object-cover rounded-3xl"
            style={{ transform: "scale(1.1)" }}
          />
        </div>
        <div className="absolute -right-8 -top-4 w-62 h-62 bg-purple-50 rounded-3xl transform rotate-12 z-10 overflow-hidden">
          <Image
            src="/pal4.png"
            alt="Sample Logo 4"
            fill
            className="object-cover rounded-3xl"
            style={{ transform: "scale(1.1)" }}
          />
        </div>
        <div className="text-center pt-64 pb-8">
          <h3 className="text-[#ed1e61] text-3xl font-bold mb-4 mt-10">
            MORE COLORS THAN YOU CAN IMAGINE
          </h3>
          <p className="text-gray-600 text-2xl text-center mt-10  max-w-md mx-auto">
            Explore our curated collection of professional color combinations.
            From vibrant and bold to subtle and sophisticated, find the perfect
            palette for your brand identity.
          </p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-6 bg-[#ed1e61] text-white px-8 py-4 rounded-full hover:bg-[#d01a55] transition-colors duration-300 text-lg font-semibold"
          >
            Explore Designs
          </Button>
        </div>
      </div>
      <div className="w-screen relative left-[50%] right-[50%] mx-[-50vw] mt-20">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left p-8">
              <h1 className="text-3xl font-bold text-primary font-mono ">
                MORE STYLES THAN YOU CAN THINK
              </h1>
              <p className="text-gray-600 text-2xl text-justify mt-10 mb-10 font-mono leading-12 ">
                Discover an endless variety of logo styles tailored to your
                vision. From sleek and modern to bold and intricate, we offer
                more designs than you can imagine to make your brand stand out!
              </p>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mt-6 bg-primary text-white px-8 py-4 rounded-full hover:bg-pink-700 transition duration-300 text-lg font-semibold"
              >
                Explore
              </Button>
            </div>
            <div className="relative w-full md:w-1/2">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white"></div>
              <div className="relative h-[500px] w-full">
                <Image
                  src="/pc1.jpg"
                  alt="Image 1"
                  fill
                  className="object-cover shadow-md border-2 border-gray-200 rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Carousel */}
    </>
  );
}

export default Hero;
