
'use client'

import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PasswordInfo from "./PasswordInfo";
import LocationInfo from "./LocationInfo";
import PersonalInfo from "./PersonalInfo";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const Index = () => {
  // const [userData, setUserData] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  useEffect(()=>{
    console.log("Here")
    const token = localStorage.getItem('token');
    token && fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/user`,{
      headers: {
        "authorization": `Bearer ${token}`,
      }
    }).then(res=>res.json()).then(data=>{
      console.log(data.data)
      setFirstName(data.data.userName.firstName);
      setLastName(data.data.userName.lastName);
      setEmail(data.data.email);
      setPhone(data.data.phone.primaryNumber)
    })
  },[])
  const tabs = [
    {
      label: " Information",
      content: <PersonalInfo firstName={firstName} lastName={lastName} email={email} phone={phone}/>,
    },
    // {
    //   label: "Location Information",
    //   content: <LocationInfo />,
    // },
    {
      label: "Change Password",
      content: <PasswordInfo />,
    },
  ];

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs
      className="tabs -underline-2 js-tabs"
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20">
        {tabs.map((tab, index) => (
          <Tab key={index} className="col-auto">
            <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
              {tab.label}
            </button>
          </Tab>
        ))}
      </TabList>

      <div className="tabs__content pt-30 js-tabs-content">
        {tabs.map((tab, index) => (
          <TabPanel
            key={index}
            className={`-tab-item-${index + 1} ${
              tabIndex === index ? "is-tab-el-active" : ""
            }`}
          >
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
};

export default Index;
