
'use client'

import { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";
import ActionsButton from "./ActionsButton";
import { useRouter } from "next/navigation";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const LayoutList = ({ id }) => {
  const router = useRouter()
  const [layouts, setLayouts] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  useEffect(() => {
    fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/${id}/stays`).then((res) => res.json()).then(data => {
      console.log(data.data)
      setLayouts(data.data);
    })
  }, [])

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {/* {tabItems.map((item, index) => ( */}
          <div className="col-auto">
            <button
              className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button is-tab-el-active`}
            // onClick={() => handleTabClick(index)}
            >
              All Layouts
            </button>
          </div>
          {/* ))} */}
        </div>
        {/* End tabs */}

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-4 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Nmber of rooms</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* End theade */}
                <tbody>
                  {layouts && layouts.map((layout, index) => {
                    return (
                    <tr>
                      <td className="text-blue-1 fw-500">{layout.title}</td>
                      <td>{layout.price}</td>
                      <td>{layout.rooms.length}</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35" onClick={()=>{router.push(`/vendor-dashboard/edit-hotel/${layout._id}`)}}>
                              <i className="icon-edit text-16 text-light-1" />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>)
                  })}

                  {/* End tr */}
                </tbody>
                {/* End tbody */}
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination /> */}
    </>
  );
};

export default LayoutList;
