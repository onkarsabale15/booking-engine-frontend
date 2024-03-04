
'use client'

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import rentalsData from "../../data/rentals";
import isTextMatched from "../../utils/isTextMatched";
import { useEffect, useState } from "react";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
const Rentals = () => {
  const [property, setProperty] = useState(null)
  useEffect(()=>{
    fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/allStays`).then(res=>res.json()).then(data=>{

      setProperty(data.data)
    })
  },[])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function Arrow(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type == "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      <Slider {...settings}>
        {property && property.map((item, index) => (
          <div
            key={index}
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            <Link
              href={`hotel/${item._id}`}
              className="rentalCard -type-1 rounded-4 hover-inside-slider"
            >
              <div className="rentalCard__image">
                <div className="cardImage inside-slider">
                  <Slider
                    {...itemSettings}
                    arrows={true}
                    nextArrow={<Arrow type="next" />}
                    prevArrow={<Arrow type="prev" />}
                  >
                    {item?.images?.map((slide, i) => (
                      <div className="cardImage ratio ratio-1:1" key={i}>
                        <div className="cardImage__content ">
                          <Image
                            width={300}
                            height={300}
                            className="rounded-4 col-12 js-lazy"
                            src={`${NEXT_PUBLIC_BACKEND_URL}/assets/images${slide}`}
                            alt="image"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div>

                  <div className="cardImage__leftBadge">
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase  ${
                        isTextMatched(item?.tag, "best seller")
                          ? "bg-blue-1 text-white"
                          : ""
                      }  ${
                        isTextMatched(item?.tag, "top rated")
                          ? "bg-yellow-1 text-dark-1"
                          : ""
                      }`}
                    >
                      {item?.tag}
                    </div>
                  </div>
                </div>
              </div>
              {/* End image card */}

              <div className="rentalCard__content mt-10">
                <div className="text-14 text-light-1 lh-14 mb-5">
                  {item?.city}
                </div>
                <h4 className="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                  <span>{item?.title}</span>
                </h4>
                <p className="text-light-1 lh-14 text-14 mt-5" />
                <div className="d-flex items-center mt-5">
                  <div className="text-14 text-light-1">
                    {item?.maxPeople} guests
                  </div>
                  <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                  <div className="text-14 text-light-1">
                    {item?.rooms.length} bedroom
                  </div>
                  <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                  <div className="text-14 text-light-1">{item?.rooms[0].bedType} bed</div>
                </div>
                {/* <div className="d-flex items-center mt-20">
                  <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                    {item?.ratings}
                  </div>
                  <div className="text-14 text-dark-1 fw-500 ml-10">
                    Exceptional
                  </div>
                  <div className="text-14 text-light-1 ml-10">
                    {item?.numberOfReviews} reviews
                  </div>
                </div> */}
                <div className="mt-5">
                  <div className="text-light-1">
                    <span className="fw-500 text-dark-1">INR ₹{item?.price}</span>{" "}
                    / per night
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Rentals;
