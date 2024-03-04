
'use client'

import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ContentTabContent from "./ContentTabContent";
import toast, { Toaster } from 'react-hot-toast';
// import Lay from "./LocationTabContent";
import PricingTabContent from "./PricingTabContent";
import AttributesTabContent from "./AttributesTabContent";
import PropertyLocation from "./PropertyLocation";
import { useRouter } from "next/navigation";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const Index = ({ id }) => {
  const router = useRouter()
  const [prop, setProp] = useState(null);
  const [token, setToken] = useState(null);
  const [propertyType, setPropertyType] = useState("");
  const [propertyName, setPropertyName] = useState(null);

  const [tabIndex, setTabIndex] = useState(0);
  const [hotelGallery, setHotelGallery] = useState([]);
  const [previewGallery, setPreviewGallery] = useState([]);
  const [address, setAddress] = useState("");
  const [googleMapsLink, setGoogleMapsLink] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState([]);
  const handleGalleryChange = (gallery) => {
    console.log("Gallery : ",gallery)
    setHotelGallery(gallery);
  }
  const handlePropTypeChange = (propertyType) => {
    setPropertyType(propertyType);
  }
  const handlePropertyNameChange = (propertyName) => {
    setPropertyName(propertyName);
  }
  const handlePreviewGalleryChange = (gallery) => {
    console.log("Preview Gallery : ", gallery)
    setPreviewGallery(gallery)
  }
  const handleAddressChange = (address) => {
    setAddress(address);
  }
  const handleCityChange = (city) => {
    setCity(city);
  }
  const handleLandmarkChange = (landmark) => {
    setLandmark(landmark);
  }
  const handleGoogleMapsLinkChange = (googleMapsLink) => {
    setGoogleMapsLink(googleMapsLink);
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/property/${id}`).then(res => res.json()).then(data => {
      setProp(data.data)
      setPropertyType(data.data.propertyType)
      setPropertyName(data.data.name)
      setAddress(data.data.locationInfo.address)
      setGoogleMapsLink(data.data.locationInfo.googleMapsLink)
      setCity(data.data.locationInfo.city)
      setLandmark(data.data.locationInfo.landmarks)
      setHotelGallery(data.data.images)
      setPreviewGallery(data.data.images)
    })
  }, [])
  const finalSubmit = async () => {
    const property = prop
    property.name = propertyName;
    property.propertyType = propertyType;
    property.locationInfo = {
      address: address,
      googleMapsLink: googleMapsLink,
      city: city,
      landmarks: landmark
    }
    const formData = new FormData();
    hotelGallery.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    })

    formData.append("data", JSON.stringify(property));
    fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/property`, {
      method: "PATCH",
      headers: {
        "authorization": `Bearer ${token}`,
      },
      body: formData,
    }).then((res) => {
      console.log(res)
      if (res.status == 200) {
        res.json().then(
          data => {
            console.log("Here is message : ", data.message)
            toast.success(data.message);
            setTimeout(() => {
              router.push('/vendor-dashboard/properties');
            }, 1500);
          }
        )
      } else {
        res.json().then(
          data => {
            toast.error(data.message);
          }
        )
      }
    }
    )
  }
  const addTabIndex = () => {
    setTabIndex(tabIndex + 1)
  }

  return (
    <>
      <Toaster />
      <Tabs
        className="tabs -underline-2 js-tabs"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20">
          <Tab key={1} className="col-auto">
            <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
              Add Property Information
            </button>
          </Tab>
          <Tab key={2} className="col-auto">
            <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
              Add Property Location
            </button>
          </Tab>
        </TabList>
        <div className="tabs__content pt-30 js-tabs-content">
          <TabPanel
            key={0}
            className={`-tab-item-${1} ${tabIndex == 1 ? "is-tab-el-active" : ""
              }`}
          >
            <ContentTabContent setTabIndex={addTabIndex} propertyType={propertyType} handlePropTypeChange={handlePropTypeChange} propertyName={propertyName} handlePropertyNameChange={handlePropertyNameChange} hotelGallery={hotelGallery} setHotelGallery={handleGalleryChange} previewGallery={previewGallery} setPreviewGallery={handlePreviewGalleryChange} />
          </TabPanel>
          <TabPanel
            key={1}
            className={`-tab-item-${2} ${tabIndex == 2 ? "is-tab-el-active" : ""
              }`}
          >
            <PropertyLocation address={address} handleAddressChange={handleAddressChange} googleMapsLink={googleMapsLink} handleGoogleMapsLinkChange={handleGoogleMapsLinkChange} city={city} handleCityChange={handleCityChange} landmark={landmark} handleLandmarkChange={handleLandmarkChange} finalSubmit={finalSubmit} />
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
};

export default Index;
