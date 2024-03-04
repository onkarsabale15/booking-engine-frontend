"use client"
import Sidebar from "../common/Sidebar";
import Header from "../../../../components/header/dashboard-header";

import Footer from "../common/Footer";
import BookingTable from "./components/BookingTable";
import { useEffect, useState } from "react";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const index = () => {
  const [bookings, setBookings] = useState(null)
  useEffect(()=>{
    console.log("Here")
    const token = localStorage.getItem('token');
    token && fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/user`,{
      headers: {
        "authorization": `Bearer ${token}`,
      }
    }).then(res=>res.json()).then(data=>{
      console.log(data.data.previousBookings.stayBooking)
      setBookings(data.data.previousBookings.stayBooking)
    })
  },[])
  return (
    <>
      {/*  */}
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Booking History</h1>
                <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <BookingTable bookings={bookings}/>
              {/* End tabs */}
            </div>

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default index;
