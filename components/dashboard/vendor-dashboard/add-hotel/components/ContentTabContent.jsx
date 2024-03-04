import HotelContent from "./content/HotelContent";
import HotelPolicy from "./content/HotelPolicy";
import BannerUploader from "./content/BannerUploader";
import FeaturedUploader from "./content/FeaturedUploader";
import GalleryUploader from "./content/GalleryUploader";
import HotelProperty from "./content/HotelProperty";
import { useState } from "react";
const ContentTabContent = ({ setTabIndex, property, setProperty, hotelName, setHotelName, hotelDesc, setHotelDesc, hotelGallery, setHotelGallery, previewGallery, setPreviewGallery }) => {
  // const [property, setProperty] = useState(property);
  // const [hotelName, setHotelName] = useState(hotelName);
  // const [hotelDesc, setHotelDesc] = useState("");
  // const [hotelGallery, setHotelGallery] = useState([]);
  const handlePropertyChange = (property_id) => {
    setProperty(property_id);
  }
  const handleHotelNameChange = (hotelName) => {
    setHotelName(hotelName);
  }
  const handleHotelDescChange = (hotelDesc) => {
    setHotelDesc(hotelDesc);
  }
  const handleGalleryChange = (gallery) => {
    setHotelGallery(gallery);
  }
  return (
    <>
      <div className="col-xl-10">
      <div className="text-18 fw-500 mb-10">Property</div>
        <HotelProperty property={property} setProperty={handlePropertyChange} />
        <div className="text-18 fw-500 mb-10">Suite Information</div>
        <HotelContent hotelName={hotelName} hotelDesc={hotelDesc} setHotelName={handleHotelNameChange} setHotelDesc={handleHotelDescChange}/>

        <div className="mt-30">
          <div className="fw-500">Gallery</div>
          <GalleryUploader gallery={hotelGallery} setGallery={handleGalleryChange} previewGallery={previewGallery} setPreviewGallery={setPreviewGallery} />
        </div>

        <div className="d-inline-block pt-30">
          <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white" onClick={()=>{setTabIndex()}}>
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentTabContent;