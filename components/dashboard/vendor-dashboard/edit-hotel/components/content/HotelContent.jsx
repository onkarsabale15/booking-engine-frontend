import { useEffect, useState } from "react";

const HotelContent = ({ hotelName, hotelDesc, setHotelName, setHotelDesc }) => {
  // const [hotelDescValue, setHotelDescValue] = useState(hotelDesc);
  // const [hotelNameValue, setHotelNameValue] = useState(hotelName);
  const handleHotelDescChange = (hotelDesc) => {
    setHotelDesc(hotelDesc);
  }
  const handleHotelNameChange = (hotelName) => {
    setHotelName(hotelName);
  }
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input ">
          <input type="text" required value={hotelName}
            onChange={(e) => handleHotelNameChange(e.target.value)} />
          <label className="lh-1 text-16 text-light-1">Suite Name</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input ">
          <textarea required rows={5} value={hotelDesc}
            onChange={(e)=>handleHotelDescChange(e.target.value)} />
          <label className="lh-1 text-16 text-light-1">Suite Description</label>
        </div>
      </div>
    </div>
  );
};

export default HotelContent;