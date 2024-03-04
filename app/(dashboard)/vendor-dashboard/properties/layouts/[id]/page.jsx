import React from "react";
import DashboardPage from "../../../../../../components/dashboard/vendor-dashboard/layout-list";

export const metadata = {
  title: "Vendor Hotels || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

export default function page({params}) {
  const id = params.id;
  return (
    <>
      <DashboardPage id={id}/>
    </>
  );
}
