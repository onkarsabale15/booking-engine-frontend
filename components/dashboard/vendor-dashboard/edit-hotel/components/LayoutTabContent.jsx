import Layout from "./location/Layout";
import Health from "./location/Health";
import Location from "./location/Location";
import Sorroundings from "./location/Sorroundings";
import Transportation from "./location/Transportation";

const LayoutTabContent = ({addTabIndex, rooms, setRooms}) => {
  return (
    <div className="col-xl-10">
      <Layout rooms={rooms} setRooms={setRooms} />
      {/* <Health />
      <Transportation /> */}

      <div className="d-inline-block pt-30">
        <button
          type="submit"
          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          onClick={()=>{addTabIndex()}}
        >
          Save Changes <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </div>
  );
};

export default LayoutTabContent;
