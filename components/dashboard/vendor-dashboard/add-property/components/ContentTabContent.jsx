import PropertyName from "./content/PropertyName";
import GalleryUploader from "./content/GalleryUploader";
import PropertyInfo from "./content/PropertyInfo";
const ContentTabContent = ({ setTabIndex, propertyType, handlePropTypeChange, propertyName, handlePropertyNameChange, hotelGallery, setHotelGallery, previewGallery, setPreviewGallery }) => {

  return (
    <>
      <div className="col-xl-10">
      <div className="text-18 fw-500 mb-10">Property Type</div>
        <PropertyInfo propertyType={propertyType} handlePropTypeChange={handlePropTypeChange}/>
        <div className="text-18 fw-500 mb-10">Hotel Information</div>
        <PropertyName propertyName={propertyName} handlePropertyNameChange={handlePropertyNameChange} />

        <div className="mt-30">
          <div className="fw-500">Gallery</div>
          <GalleryUploader gallery={hotelGallery} setGallery={setHotelGallery} previewGallery={previewGallery} setPreviewGallery={setPreviewGallery} />
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