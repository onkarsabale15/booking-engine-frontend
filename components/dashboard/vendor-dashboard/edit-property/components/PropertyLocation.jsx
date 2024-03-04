import LocationTabContent from "./LocationTabContent";

const PropertyLocation = ({address, handleAddressChange, googleMapsLink, handleGoogleMapsLinkChange, city, handleCityChange, landmark, handleLandmarkChange, finalSubmit}) => {
  return (
    <div className="col-xl-10">
      <LocationTabContent address={address} handleAddressChange={handleAddressChange} googleMapsLink={googleMapsLink} handleGoogleMapsLinkChange={handleGoogleMapsLinkChange} city={city} handleCityChange={handleCityChange} landmark={landmark} handleLandmarkChange={handleLandmarkChange} finalSubmit={finalSubmit}/>
      <div className="d-inline-block pt-30">
        <button
          type="submit"
          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          onClick={()=>{finalSubmit()}}
        >
          Save Changes <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </div>
  );
};

export default PropertyLocation;
