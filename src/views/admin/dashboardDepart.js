import React from "react";

// components

/*import CardLineChart from "components/Cards/CardLineChart.js";*/
/*import CardBarChart from "components/Cards/CardBarChart.js";*/
import CardPageVisits from "components/Cards/CardPageVisits.js";
/*import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";*/

export default function DashboardDepart() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardPageVisits />
          </div>
        </div>
      </div>
    </>
    
  );
}





