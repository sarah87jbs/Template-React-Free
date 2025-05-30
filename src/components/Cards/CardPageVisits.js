import React from "react";

// components

export default function CardPageVisits() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700" dir="rtl">
                مقارنة المبالغ
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              {/*<button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button>*/}
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto" dir="rtl">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse" dir="rtl">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text" >
                  الخصم
                </th>
                <th  dir="rtl "className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text" >
                  جدولentree_cni
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text" >
                  entree_cni_defalquee
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text" >
                  echeancier_pret
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text" >
                  /argon/
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  4,569
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  340
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {/*<i className="fas fa-arrow-up text-emerald-500 mr-4"></i>*/}
                  46,53%
                </th>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text" >
                  /argon/index.html
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  3,985
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  319
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {/*<i className="fas fa-arrow-down text-orange-500 mr-4"></i>*/}
                  46,53%
                </th>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text">
                  /argon/charts.html
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  3,513
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  294
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 {/*} <i className="fas fa-arrow-down text-orange-500 mr-4"></i>*/}
                  36,49%
                </th>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  /argon/tables.html
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  2,050
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  147
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {/*<i className="fas fa-arrow-up text-emerald-500 mr-4"></i>*/}
                  50,87%
                </th>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  /argon/profile.html
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  1,795
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  190
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 {/* <i className="fas fa-arrow-down text-red-500 mr-4"></i>*/}
                  46,53%
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
