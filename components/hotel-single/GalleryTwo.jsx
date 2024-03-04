
'use client'

import React from 'react'
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Overview from "@/components/hotel-single/Overview";
import PopularFacilities from "@/components/hotel-single/PopularFacilities";
import ModalVideo from "react-modal-video";
import Map from "@/components/map/index";
// import SidebarRight2 from "@/components/hotel-single/SidebarRight2";
import SidebarRight from "@/components/hotel-single/SidebarRight";
// import RatingBox from "@/components/hotel-single/RatingBox";
import PropertyHighlights2 from "@/components/hotel-single/PropertyHighlights2";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export default function GalleryTwo({ hotel, property }) {
  // setTimeout(()=>{
  //   console.log(property)
  // },2000)
  const [isOpen, setOpen] = useState(false);
  let facilities = hotel?.facilities
  let desc = hotel?.desc
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />
      <section className="pt-40">
        <div className="container">
          <div className="hotelSingleGrid">
            <div>
              <Gallery>
                <div className="galleryGrid -type-2">
                  {hotel?.images.map((image, index) => (
                    <div className="galleryGrid__item relative d-flex justify-end" key={index}>
                      <Item
                        original={`${NEXT_PUBLIC_BACKEND_URL}/assets/images${image}`}
                        thumbnail={`${NEXT_PUBLIC_BACKEND_URL}/assets/images${image}`}
                        width={660}
                        height={660}
                      >
                        {({ ref, open }) => (
                          <div className="image-container" ref={ref} onClick={open}>
                            <img
                              src={`${NEXT_PUBLIC_BACKEND_URL}/assets/images${image}`}
                              alt="image"
                              role="button"
                              className="image rounded-4"
                            />
                          </div>
                        )}
                      </Item>
                      <div className="absolute px-20 py-20">
                        <button className="button -blue-1 size-40 rounded-full bg-white">
                          <i className="icon-heart text-16" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {/* End .galleryGrid__item */}
                </div>
              </Gallery>
              {/* End gallery grid */}

              <div className="row justify-between items-end pt-40">
                <div className="col-auto">
                  <div className="row x-gap-20  items-center">
                    <div className="col-auto">
                      <h1 className="text-30 sm:text-25 fw-600">
                        {hotel?.title?.slice(0, 30)}
                      </h1>
                    </div>
                    {/* End .col */}
                    {/* <div className="col-auto">
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                    </div> */}
                  </div>
                  {/* End .row */}

                  {/* <div className="row x-gap-20 y-gap-20 items-center">
                    <div className="col-auto">
                      <div className="d-flex items-center text-15 text-light-1">
                        <i className="icon-location-2 text-16 mr-5" />
                        {hotel?.location}
                      </div>
                    </div>
                    <div className="col-auto">
                      <button
                        data-x-click="mapFilter"
                        className="text-blue-1 text-15 underline"
                      >
                        Show on map
                      </button>
                    </div>
                  </div> */}
                  {/* End .row */}
                </div>
                {/* End .col */}

                <div className="col-auto">
                  <div className="text-14 text-md-end">
                    From{" "}
                    <span className="text-22 text-dark-1 fw-500">
                      INR ₹{hotel?.price}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Select Room <div className="icon-arrow-top-right ml-15" />
                  </a>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div id="overview" className="row y-gap-40 pt-40 ">
                <div className="col-12">
                  {desc && <Overview overviewData={desc} />}
                </div>
                {/* End col-12 */}

                <div className="col-12">
                  <h3 className="text-22 fw-500 pt-40 border-top-light">
                    Facilities Available
                  </h3>
                  <div className="row y-gap-10 pt-20">
                    {facilities && <PopularFacilities facilities={facilities} />}
                  </div>
                </div>
                {/* End .col-12  */}
              </div>
              {/* End .col-12  Overview */}
            </div>
            {/* End left hotel galler  */}

            <div>
              <SidebarRight hotel={hotel} />
              {/* <SidebarRight2 /> */}
              {/* <RatingBox hotel={hotel} /> */}
              {/* <PropertyHighlights2 /> */}
            </div>
            <div>
              {/* <Map url={property.locationInfo.googleMapsLink}/> */}
            </div>
            {/* End right content */}
          </div>
        </div>
        {/* End .container */}
      </section></>
  )
}
