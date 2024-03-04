"use client"
import Link from "next/link";
import {
  homeItems,
  // blogItems,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
// import localStorage from "local-storage";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import toast, { Toaster } from 'react-hot-toast';
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { logOut } from "@/utils/auth";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const MainMenu = ({ style = "" }) => {

  const [properties, setProperties] = useState(null);
  useEffect(() => {
    fetch(NEXT_PUBLIC_BACKEND_URL + "/api/properties/all")
     .then((res) => res.json())
     .then((data) => {
       setProperties(data.data);
      })
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));
  const router = useRouter();
  const handleLogout = async () => {
    const loggedout = await logOut()
    if (loggedout) {
      toast.success('Logout successful!');
    }
    loggedout ? setTimeout(() => {
      router.push('/login')
    }, 1500) : null
  }
  const pathname = usePathname();
  const [isActiveParent, setIsActiveParent] = useState(false)

  return (
    <>
      <Toaster />
      <nav className="menu js-navList">
        <ul className={`menu__nav ${style} -is-active`}>
          <li
            className={`${isActiveParentChaild(homeItems, pathname) ? "current" : ""
              } menu-item-has-children`}
          >
            <a href="#">
              <span className="mr-10">Home</span>
              <i className="icon icon-chevron-sm-down" />
            </a>
            <ul className="subnav">

              {/* {homeItems.map((menu, i) => (
                <li
                  key={i}
                  className={
                    isActiveLink(menu.routePath, pathname) ? "current" : ""
                  }
                >
                  <Link href={menu.routePath}>{menu.name}</Link>
                </li>
              ))} */}
              {properties?.map((property)=>(
                  <li key={property._id} className={isActiveLink(property.routePath, pathname) ? "current" : ""}>
                    <Link
                    // {property.}
                    href={property.propertyType=="Villa"?`/villa/${property._id}`:`/hotel/hotel-list/${property._id}`}>
                    {property.name}</Link>
                  </li>
              ))}
            </ul>
          </li>
          <li className={pathname === "/destinations" ? "current" : ""}>
            <Link href="/destinations">Destinations</Link>
          </li>

          <li
            className={`${pathname.split('/')[1] == 'dashboard' || pathname.split('/')[1] == 'vendor-dashboard' ? "current" : ""
              } menu-item-has-children`}
          >
            <a href="#">
              <span className="mr-10">Dashboard</span>
              <i className="icon icon-chevron-sm-down" />

            </a>
            <ul className="subnav ">
              {dashboardItems.map((menu, i) => (
                menu.for ? (menu.for.includes(user?.role) ? (<li key={i} className={isActiveLink(menu.routePath, pathname) ? "current" : ""}>
                  <Link href={menu.routePath}>{menu.name}</Link>
                </li>) : null) : (<li key={i} className={isActiveLink(menu.routePath, pathname) ? "current" : ""}>
                  <Link href={menu.routePath}>{menu.name}</Link>
                </li>)
              ))}
              {user?<li
                key="11"
                className={
                  isActiveLink("/login", pathname) ? "current" : ""
                } onClick={handleLogout}>
                <Link href="#">Logout</Link>
              </li>:<li
                key="11"
                className={
                  isActiveLink("/login", pathname) ? "current" : ""
                }
                // onClick={handleLogout}
                >
                <Link href="/login">Login</Link>
              </li>}
            </ul>
          </li>
          <li className={pathname === "/about" ? "current" : ""}>
            <Link href="/about">About</Link>
          </li>
          <li className={pathname === "/terms" ? "current" : ""}>
            <Link href="/terms">Terms</Link>
          </li>
          <li className={pathname === "/contact" ? "current" : ""}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainMenu;
