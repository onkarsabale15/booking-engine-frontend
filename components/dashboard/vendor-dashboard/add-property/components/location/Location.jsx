import { useState } from "react";

const Location = () => {
  const [address, setAddress] = useState("");
  const [googleMapsLink, setGoogleMapsLink] = useState("");

  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="text-18 fw-30 mb-10">Enter Address</div>
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Address</label>
        </div>
      </div>
      <div className="col-12">
        <div className="text-18 fw-30 mb-10">Enter Google Maps Link</div>
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Google Maps Link</label>
        </div>
      </div>
      <div className="text-18 fw-30 mb-10">Enter City and Landmark</div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">City</label>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Landmark</label>
        </div>
      </div>
      {/* <div className="col-lg-4 col-md-6 row justify-content-center"> */}
        {/* <div className="form-input "> */}
        {/* <button type="button" className="btn btn-sm btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-crosshair" viewBox="0 0 16 16">
            <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
          </svg>
          <span>Fetch Automatically</span>
        </button> */}
          {/* <label className="lh-1 text-16 text-light-1">Map Zoom</label> */}
        {/* </div> */}
      {/* </div> */}
      {/* <div className="col-lg12">
        <div className="d-flex ratio ratio-4:1 mt-10">
          <div className="d-flex px-20 py-20 bg-light-2 h-full w-1/1 absolute rounded-4">
            <div className>
              <div className="form-input bg-white">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Search by name...
                </label>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Location;