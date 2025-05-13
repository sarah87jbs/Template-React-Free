/* eslint-disable */
import React from "react";
import { NavLink } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  return (
    <>
      <nav
        className="sidebar-fix-right md:right-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row-reverse md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
        dir="rtl"
      >
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Brand */}
          <NavLink
            to="/"
            className="md:block text-right text-blueGray-600 inline-block text-sm uppercase font-bold p-4 px-0"
          >
            تطبيقة إنجاز القرص الصادر والوارد
          </NavLink>

          {/* User on small screens */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>

          {/* Menu */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 right-0 left-auto z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Navigation Sections */}
            <hr className="my-4 md:min-w-full" />
            <h6 className="text-blueGray-500 text-xs uppercase font-bold pt-1 pb-4">
              الإحصائيات
            </h6>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
                <NavLink
                  to="/admin/dashboard"
                  exact
                  className={({ isActive }) =>
                    "group text-xs uppercase py-3 font-bold block transition-all duration-300 ease-in-out " +
                    (isActive
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i className="fas fa-tv ml-2 text-sm group-hover:scale-110 transition-transform duration-300" />
                  إحصائيات القرص الوارد
                </NavLink>
              </li>

              
              <li className="items-center">
                <NavLink
                  to="/admin/dashboardDepart"
                  exact
                  className={({ isActive }) =>
                    "group text-xs uppercase py-3 font-bold block transition-all duration-300 ease-in-out " +
                    (isActive
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i className="fas fa-tv ml-2 text-sm group-hover:scale-110 transition-transform duration-300" />
                  إحصائيات القرص الصادر
                </NavLink>
              </li>
            </ul>

            {/* Other Sections (Example: معالجة القرص الصادر) */}
            <hr className="my-4 md:min-w-full" />
            <h6 className="text-blueGray-500 text-xs uppercase font-bold pt-1 pb-4">
              معالجة القرص الصادر
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <NavLink
                  to="/admin/tables"
                  exact
                  className={({ isActive }) =>
                    "group text-xs uppercase py-3 font-bold block transition-all duration-300 ease-in-out " +
                    (isActive
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i className="fas fa-file-alt ml-2 text-sm" />
                  تحضير القرص
                </NavLink>
              </li>
              

              {/* Ajoute ici d'autres liens similaires selon besoin */}
            </ul>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <NavLink
                  to="/admin/tables"
                  exact
                  className={({ isActive }) =>
                    "group text-xs uppercase py-3 font-bold block transition-all duration-300 ease-in-out " +
                    (isActive
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i className="fas fa-file-alt ml-2 text-sm" />
                  التسجيلات المزمع إدراجها بالقرص 
                </NavLink>
              </li>
              

              {/* Ajoute ici d'autres liens similaires selon besoin */}
            </ul>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <NavLink
                  to="/admin/tables"
                  exact
                  className={({ isActive }) =>
                    "group text-xs uppercase py-3 font-bold block transition-all duration-300 ease-in-out " +
                    (isActive
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i className="fas fa-file-alt ml-2 text-sm" />
                  الخصومات التي تفوق 1000 دينار
                </NavLink>
              </li>
              

              {/* Ajoute ici d'autres liens similaires selon besoin */}
            </ul>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <NavLink
                  to="/admin/dashboard"
                  exact
                  className={({ isActive }) =>
                    "group text-xs uppercase py-3 font-bold block transition-all duration-300 ease-in-out " +
                    (isActive
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i className="fas fa-file-alt ml-2 text-sm" />
                  التسجيلات التي تفوق 2000دينار
                </NavLink>
              </li>
              

              {/* Ajoute ici d'autres liens similaires selon besoin */}
            </ul>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <NavLink
                  to="/admin/tables"
                  exact
                  className={({ isActive }) =>
                    "group text-xs uppercase py-3 font-bold block transition-all duration-300 ease-in-out " +
                    (isActive
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i className="fas fa-file-alt ml-2 text-sm" />
                  إنجاز القرص
                </NavLink>
              </li>
              

              {/* Ajoute ici d'autres liens similaires selon besoin */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}