
'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
import toast, { Toaster } from "react-hot-toast";
const PropertiesTable = () => {
  const router = useRouter()
  const notAuthorized = () => {
    toast.error("You are not authorized to access this page!");
    setTimeout(() => {
      router.push("/login")
    }, 1500)
  };
  const [properties, setProperties] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token")
    token ? fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/userProperties`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    }).then((res) =>
      res.json()
    ).then((data) => {
      setProperties(data.data);
    }) : notAuthorized()
  }, [])
  return (
    <>
      <Toaster />
      <div className="tabs -underline-2 js-tabs" style={{ minHeight: "60vh" }}>
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          <div className="col-auto">
            <button
              className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button is-tab-el-active`}
            >
              All Properties
            </button>
          </div>
        </div>


        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-4 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* End theade */}
                <tbody>
                  {properties && properties.map((property, index) => (
                    <tr key={index}>
                      <td className="text-blue-1 fw-500 cursor-pointer" onClick={() => { router.push(`/vendor-dashboard/properties/layouts/${property._id}`) }}>{property.name}</td>
                      <td>{property.locationInfo.city}</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35" onClick={()=>{router.push(`/vendor-dashboard/edit-property/${property._id}`)}}>
                              <i className="icon-edit text-16 text-light-1" />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
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

export default PropertiesTable;
