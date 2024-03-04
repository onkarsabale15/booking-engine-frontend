
'use client'

import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import DateSearch from "../DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DateObject } from "react-multi-date-picker";
import toast, {Toaster} from "react-hot-toast";
const MainFilterSearchBox = () => {

  const [guestCountValues, setGuestCountValues] = useState({
    Adults: 2,
    Children: 0,
    Rooms: 1,
  });
  const handleGuestCountValuesChange = (changes) => {
    setGuestCountValues(changes)
  }
  const [dates, setDates] = useState([
    new DateObject(),
    new DateObject().add(7, "days"),
  ]);

  const handleDateChanges = async (dates) => {
    setDates(dates)
  }
  const [location, setLocation] = useState(null)
  const handleLocationChange = async (loc) => {
    setLocation(loc)
  }
  const handleSearch = async () => {
    if(!dates[0] && !dates[1]){
      toast.error("Please select a date")
      return
    }
    if(!location){
      toast.error("Please select a location")
      return
    }
    if(!guestCountValues){
      toast.error("Please select a guest count and room count")
      return
    }
  }
  return (
    <>
      <div className="tabs__controls d-flex x-gap-30 y-gap-20 justify-center sm:justify-start js-tabs-controls">
      </div>

      <div className="position-relative mt-30 md:mt-20 js-tabs-content">
        <div className="mainSearch -w-900 bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100">
          <div className="button-grid items-center">
            <LocationSearch location={location} handleLocationChange={handleLocationChange} />
            {/* End Location */}

            <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
              <div>
                <h4 className="text-15 fw-500 ls-2 lh-16">
                  Check in - Check out
                </h4>
                <DateSearch dates={dates} setDates={handleDateChanges} />
              </div>
            </div>
            {/* End check-in-out */}
            <GuestSearch guestCountValues={guestCountValues} setGuestCountValues={handleGuestCountValuesChange} />
            <div className="button-item">
              <button
                className="mainSearch__submit button -dark-1 h-60 px-35 col-12 rounded-100 bg-blue-1 text-white"
                onClick={handleSearch}
              >
                <i className="icon-search text-20 mr-10" />
                Search
              </button>
            </div>
            {/* End search button_item */}
          </div>
        </div>
        {/* End .mainSearch */}
      </div>
      {/* End serarchbox tab-content */}
    </>
  );
};

export default MainFilterSearchBox;
