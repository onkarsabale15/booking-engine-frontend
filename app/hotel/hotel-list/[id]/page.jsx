"use client"
import CallToActions from "@/components/common/CallToActions";
import Header11 from "@/components/header/header-11";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/hotel-list/hotel-list-v2/TopHeaderFilter";
import HotelProperties from "@/components/hotel-list/hotel-list-v2/HotelProperties";
import Pagination from "@/components/hotel-list/common/Pagination";
import Sidebar from "@/components/hotel-list/hotel-list-v2/Sidebar";
import { useEffect, useState } from "react";
import DefaultHeader from "@/components/header/default-header";
import Header1 from "@/components/header/header-1";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const index = ({ params }) => {
  const id = params.id;
  const [hotels, setHotels] = useState(null);
  useEffect(() => {
    fetch(NEXT_PUBLIC_BACKEND_URL + `/api/property/${id}`)
     .then((res) => res.json())
     .then((data) => {
       setHotels(data.data);
      })
  }, [])
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader/>
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar />
              </aside>
              {/* End sidebar for desktop */}

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Hotels
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End offcanvas header */}

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar />
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
                {hotels && <HotelProperties hotels={hotels.configurations.stay} />}
              </div>
              {/* End .row */}
              <Pagination />
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;
