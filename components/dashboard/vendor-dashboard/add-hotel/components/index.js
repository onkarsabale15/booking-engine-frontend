
'use client'

import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ContentTabContent from "./ContentTabContent";
// import Lay from "./LocationTabContent";
import PricingTabContent from "./PricingTabContent";
import AttributesTabContent from "./AttributesTabContent";
import LayoutTabContent from "./LayoutTabContent";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const Index = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, [])

  const [tabIndex, setTabIndex] = useState(0);
  const [property, setProperty] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [hotelDescription, setHotelDescription] = useState("");
  const [hotelGallery, setHotelGallery] = useState([]);
  const [facility, setFacility] = useState([])
  const [room, setRoom] = useState([])
  const [rooms, setRooms] = useState([{
    bedType: null,
    occupants: null,
    roomFacilities: []
  }])
  const [price, setPrice] = useState(0)
  const [maxPeople, setMaxPeople] = useState(0);
  const [previewGallery, setPreviewGallery] = useState([]);
  const handlePropertyChange = (prop) => {
    setProperty(prop);
  }
  const handleHotelNameChange = (hotelName) => {
    setHotelName(hotelName);
  }
  const handleHotelDescriptionChange = (hotelDescription) => {
    setHotelDescription(hotelDescription);
  }
  const handleGalleryChange = (gallery) => {
    setHotelGallery(gallery);
  }
  const facilityChange = (facility) => {
    setFacility(facility)
  }
  const roomChange = (room) => {
    setRoom(room)
  }
  const handleRoomsChange = (rooms) => {
    setRooms(rooms)
  }
  const handlePriceChange = (price) => {
    setPrice(price)
  }
  const handleMaxPeopleChange = (maxPeople) => {
    setMaxPeople(maxPeople)
  }
  const handlePreviewGalleryChange = (gallery) => {
    setPreviewGallery(gallery)
  }
  const finalSubmit = async () => {
    const addData = {
      property_id: property._id,
      fields: {
        title: hotelName,
        price: price,
        maxPeople: maxPeople,
        desc: hotelDescription,
        rooms: rooms,
        facilities: facility,
        roomNumbers: property.propertyType=="Villa"?[101]:room
      }
    }
    const formData = new FormData();
    hotelGallery.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    })
    formData.append("data", JSON.stringify(addData));
    const response = fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/addStay`, {
      method: "POST",
      headers: {
        "authorization": `Bearer ${token}`,
      },
      body: formData,
    })
  }
  const addTabIndex = () => {
    setTabIndex(tabIndex + 1)
  }

  return (
    <Tabs
      className="tabs -underline-2 js-tabs"
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20">
        <Tab key={1} className="col-auto">
          <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
            1. Content
          </button>
        </Tab>
        <Tab key={2} className="col-auto">
          <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
            2. Layout
          </button>
        </Tab>
        <Tab key={3} className="col-auto">
          <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
            3. Pricing
          </button>
        </Tab>
        <Tab key={4} className="col-auto">
          <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
            4. Attributes
          </button>
        </Tab>
      </TabList>
      <div className="tabs__content pt-30 js-tabs-content">
        <TabPanel
          key={0}
          className={`-tab-item-${1} ${tabIndex == 1 ? "is-tab-el-active" : ""
            }`}
        >
          <ContentTabContent setTabIndex={addTabIndex} property={property} setProperty={handlePropertyChange} hotelName={hotelName} setHotelName={handleHotelNameChange} hotelDesc={hotelDescription} setHotelDesc={handleHotelDescriptionChange} hotelGallery={hotelGallery} setHotelGallery={handleGalleryChange} previewGallery={previewGallery} setPreviewGallery={handlePreviewGalleryChange} />
        </TabPanel>
        <TabPanel
          key={1}
          className={`-tab-item-${2} ${tabIndex == 2 ? "is-tab-el-active" : ""
            }`}
        >
          <LayoutTabContent addTabIndex={addTabIndex} rooms={rooms} setRooms={handleRoomsChange} />
        </TabPanel>
        <TabPanel
          key={2}
          className={`-tab-item-${3} ${tabIndex == 3 ? "is-tab-el-active" : ""
            }`}
        >
          <PricingTabContent addTabIndex={addTabIndex} price={price} maxPeople={maxPeople} handlePriceChange={handlePriceChange} handleMaxPeopleChange={handleMaxPeopleChange} />
        </TabPanel>
        <TabPanel
          key={3}
          className={`-tab-item-${4} ${tabIndex == 4 ? "is-tab-el-active" : ""
            }`}
        >
          <AttributesTabContent facility={facility} room={room} facilityChange={facilityChange} roomChange={roomChange} finalSubmit={finalSubmit} property={property} />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Index;
