import { useEffect, useState } from "react";

const PropertyName = ({ propertyName, handlePropertyNameChange}) => {
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input ">
          <input type="text" required value={propertyName}
            onChange={(e) => handlePropertyNameChange(e.target.value)} />
          <label className="lh-1 text-16 text-light-1">Enter Property Name</label>
        </div>
      </div>

      {/* <div className="col-12">
        <div className="form-input ">
          <textarea required rows={5} value={hotelDesc}
            onChange={(e)=>handleHotelDescChange(e.target.value)} />
          <label className="lh-1 text-16 text-light-1">Hotel Description</label>
        </div>
      </div> */}
    </div>
  );
};

export default PropertyName;