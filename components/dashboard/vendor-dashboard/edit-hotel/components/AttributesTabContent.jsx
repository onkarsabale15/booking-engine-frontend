import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import './Tagsinput.css';
const AttributesTabContent = ({facility, room, facilityChange, roomChange, finalSubmit, property}) => {
  // const [facility, setFacility] = useState(facility);
  // const [room, setRoom] = useState(room);
  const handleFacilityChange = (tags) => {
    // setFacility(tags);
    facilityChange(tags)
  };
  const handleRoomChange = (tags) => {
    // setRoom(tags);
    roomChange(tags)
  };
  const isVilla = property?.propertyType=="Villa" ? false : true;
  return (
    <>

      <div className="col-xl-9 col-lg-11">
        <div className="row x-gap-100 y-gap-15">
          <div className="col-12">
            <div className="text-18 fw-500">Facilities</div>
          </div>
          <TagsInput
            value={facility}
            onChange={handleFacilityChange}
            inputProps={{
              placeholder: 'Add a facility',
              className: 'form-control',
            }}
            style={{"backgroundColor": "blue"}}
          />
          {/* <div className="col-lg-3 col-sm-6"> */}
            
              {/* End .col-12 */}
            
            {/* End .row */}
          {/* </div> */}
          {/* End .col-3 */}
          {/* <div className="col-lg-3 col-sm-6"> */}
            
            {/* End .row */}
          {/* </div> */}
          {/* End .col-3 */}
        </div>
        {/* End .row */}

        {isVilla && <div className="row x-gap-100 y-gap-15 pt-30">
          <div className="col-12">
            <div className="text-18 fw-500">Room Numbers</div>
          </div>
          <TagsInput
            value={room}
            onChange={handleRoomChange}
            inputProps={{
              placeholder: 'Add Room Numbers',
              className: 'form-control',
            }}
            style={{"backgroundColor": "blue"}}
          />
        </div>}
        {/* End .row */}

        <div className="row x-gap-100 y-gap-15 pt-30">
          <div className="col-12">
            <div className="text-18 fw-500"></div>
          </div>

        </div>
        {/* End .row */}

        <div className="d-inline-block mt-30">
          <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
            onClick={()=>{
              finalSubmit()}}
          >
            Submit <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AttributesTabContent;
