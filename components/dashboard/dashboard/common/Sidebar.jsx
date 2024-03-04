'use client'

import Image from "next/image";
import Link from "next/link";

import { isActiveLink } from "@/utils/linkActiveChecker";
import { usePathname, useRouter } from "next/navigation";
import { logOut } from "@/utils/auth"
const Sidebar = ({userData}) => {
  const router = useRouter()
  const handleLogout = async () => {
    const loggedout = await logOut()
    loggedout?router.push('/login'):null
  }
  const pathname = usePathname()

  const sidebarContent = [
    // {
    //   id: 1,
    //   icon: "/img/dashboard/sidebar/compass.svg",
    //   name: "Dashboard",
    //   routePath: "/dashboard/db-dashboard",
    // },
    {
      id: 2,
      icon: "/img/dashboard/sidebar/booking.svg",
      name: " Booking History",
      routePath: "/dashboard/db-booking",
    },
    // {
    //   id: 3,
    //   icon: "/img/dashboard/sidebar/bookmark.svg",
    //   name: "Wishlist",
    //   routePath: "/dashboard/db-wishlist",
    // },
    {
      id: 4,
      icon: "/img/dashboard/sidebar/gear.svg",
      name: " Settings",
      routePath: "/dashboard/db-settings",
    },
  ];
  return (
    <div className="sidebar -dashboard">
      {sidebarContent.map((item) => (
        <div className="sidebar__item" key={item.id}>
          <div
            className={`${isActiveLink(item.routePath, pathname) ? "-is-active" : ""
              } sidebar__button `}
          >
            <Link
              href={item.routePath}
              className="d-flex items-center text-15 lh-1 fw-500"
            >
              <Image
                width={20}
                height={20}
                src={item.icon}
                alt="image"
                className="mr-15"
              />
              {item.name}
            </Link>
          </div>
        </div>
      ))}
      <div className="sidebar__item" key="5" style={{ cursor: "pointer" }} onClick={handleLogout}>
        <div
          className={`${isActiveLink("/login", pathname) ? "-is-active" : ""
            } sidebar__button `}
        >
          <Image
            width={20}
            height={20}
            src="/img/dashboard/sidebar/log-out.svg"
            alt="image"
            className="mr-15"
          />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
