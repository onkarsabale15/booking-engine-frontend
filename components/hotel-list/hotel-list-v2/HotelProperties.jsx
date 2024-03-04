
'use client'

import { hotelsData } from "../../../data/hotels";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
function countBedTypes(roomData) {
  let bedTypeCounts = {};
  roomData.forEach(room => {
    const bedType = room.bedType;
    if (bedTypeCounts.hasOwnProperty(bedType)) {
      bedTypeCounts[bedType].bedCount++;
    } else {
      bedTypeCounts[bedType] = {
        bedType: bedType,
        bedCount: 1
      };
    }
  });

  let bedString = "";
  Object.entries(bedTypeCounts).forEach(([bedType, bed]) => {
    if (bedString === "") {
      bedString += bed.bedCount + " " + bed.bedType + " bed";
    } else {
      bedString += ", " + bed.bedCount + " " + bed.bedType + " bed";
    }
  });
  return bedString;
}
const HotelProperties = ({ hotels }) => {
  const [stays, setStays] = useState(null);
  useEffect(() => {
    setStays(hotels);
  }, [hotels]);
  return (
    <>
      {stays && stays.map((item) => (
        <div className="col-12" key={item?._id}>
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                  <div className="cardImage__content">
                    <div className="cardImage-slider rounded-4  custom_inside-slider d-flex justify-content-center align-items-center">
                      <Swiper
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                      >
                        {item?.images?.map((slide, i) => (
                          <SwiperSlide key={i}>
                            <Image
                              width={250}
                              height={250}
                              className="rounded-4 col-12 js-lazy"
                              src={`${NEXT_PUBLIC_BACKEND_URL}/assets/images${slide}`}
                              // src={slide}
                              alt="image"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  {/* End image */}

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md">
                <h3 className="text-18 lh-16 fw-500">
                  {item?.title}
                  <br className="lg:d-none" /> {item?.location}
                  <div className="d-inline-block ml-10">
                    <i className="icon-star text-10 text-yellow-2"></i>
                    <i className="icon-star text-10 text-yellow-2"></i>
                    <i className="icon-star text-10 text-yellow-2"></i>
                    <i className="icon-star text-10 text-yellow-2"></i>
                    <i className="icon-star text-10 text-yellow-2"></i>
                  </div>
                </h3>

                <div className="row x-gap-10 y-gap-10 items-center pt-10">
                  <div className="col-auto">
                    <p className="text-14">{item?.location}</p>
                  </div>
                  {/* <div className="col-auto">
                    <button
                      data-x-click="mapFilter"
                      className="d-block text-14 text-blue-1 underline"
                    >
                      Show on map
                    </button>
                  </div> */}

                  {/* <div className="col-auto">
                    <div className="size-3 rounded-full bg-light-1"></div>
                  </div> */}

                  {/* <div className="col-auto">
                    <p className="text-14">2 km to city center</p>
                  </div> */}
                </div>

                <div className="text-14 lh-15 mt-20">
                  <div className="fw-500">King Room</div>
                  <div className="text-light-1">{countBedTypes(item.rooms)}</div>
                </div>

                <div className="text-14 text-green-2 lh-15 mt-10">
                  <div className="fw-500">8 nights, 2 adult</div>
                  {/* <div className="">
                    You can cancel later, so lock in this great price today.
                  </div> */}
                </div>

                <div className="row x-gap-10 y-gap-10 pt-20">
                  {item.facilities?.slice(0, 4).map((facility, i) => (
                    <div className="col-auto" key={i}>
                      <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                        {i === 3 ? (
                          item.facilities.length > 4 ? (
                            `${item.facilities.length - 3} more facilities`
                          ) : (
                            facility
                          )
                        ) : (
                          facility
                        )}
                      </div>
                    </div>
                  ))}

                  {/* {item.facilities && item.facilities.length > 4 && (
                    <div className="col-auto">
                      <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                        {item.facilities.length - 3} more facilities
                      </div>
                    </div>
                  )} */}
                  {/* <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      Breakfast
                    </div>
                  </div> */}

                  {/* <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      WiFi
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      Spa
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      Bar
                    </div>
                  </div> */}
                </div>
              </div>
              {/* End .col-md */}

              <div className="col-md-auto text-right md:text-left">
                {/* <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <div className="text-14 lh-14 fw-500">Exceptional</div>
                    <div className="text-14 lh-14 text-light-1">
                      3,014 reviews
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
                      {item?.ratings}
                    </div>
                  </div>
                </div> */}

                <div className="">
                  {/* <div className="text-14 text-light-1 mt-50 md:mt-20">
                    8 nights, 2 adult
                  </div> */}
                  <div className="text-22 lh-12 fw-600 mt-5">
                    INR ₹{item?.price}
                  </div>
                  <div className="text-14 text-light-1 mt-5">
                  INR ₹{item?.price} Including taxes and charges
                  </div>

                  <Link
                    href={`/hotel/${item._id}`}
                    className="button -md -dark-1 bg-blue-1 text-white mt-24"
                  >
                    See Availability{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HotelProperties;
