import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import axios from "axios";
// import {} from "./Mixins";

const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {
  const [imageArray, setImageArray] = useState([]);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:8000/api/image/slider-image").then((res) => {
      setImageArray(res.data.images);
    });
  }, []);
  const nextSlide = () =>
    setCurrentIndex(
      currentImageIndex === imageArray.length - 1 ? 0 : currentImageIndex + 1
    );
  const prevSlide = () =>
    setCurrentIndex(
      currentImageIndex === 0 ? imageArray.length - 1 : currentImageIndex - 1
    );

  return (
    <Fragment>
      <div className="relative mt-16 bg-gray-100 border-2">
        {imageArray?.length && (
          <img
            className="w-full"
            src={imageArray[currentImageIndex].imageUrl}
            alt="sliderImage"
          />
        )}
        <svg
          onClick={(e) => prevSlide()}
          className={`z-10 absolute top-0 left-0 mt-64 flex justify-end items-center box-border flex justify-center w-12 h-12 text-gray-700  cursor-pointer hover:text-yellow-700`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <svg
          onClick={(e) => nextSlide()}
          className={`z-10 absolute top-0 right-0 mt-64 flex justify-start items-center box-border flex justify-center w-12 h-12 text-gray-700 cursor-pointer hover:text-yellow-700`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="#shop"
            style={{ background: "#303031" }}
            className="cursor-pointer box-border text-2xl text-white px-4 py-2 rounded"
          >
            Shop Now
          </a>
        </div>
      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
