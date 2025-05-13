

import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
/*import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";*/
import CardTable from "components/Cards/CardTable.js"
export default function DashboardDepart() {
  return (
    <>
     {/* <div className="flex flex-wrap">
        
        <div className="w-full md:w-4/12 px-4 mb-4">
        
  <CardLineChart />

  </div>
  <div className="w-full md:w-4/12 px-4 mb-4">
  
  <CardBarChart />

    
  </div>
      </div>*/}
      
      <div className="flex flex-wrap mt-4" dir="rtl">
        <div className="w-full mb-12 px-4">
         <CardTable tableWidth="w-3/4" tablePadding="p-4" />
        </div>
        
       {/* <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>*/}
      </div>
    </>
  );
}






