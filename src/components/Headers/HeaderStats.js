import React from "react";

// components
import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* HeaderStats sans bande bleue */}
      <div className="px-4 md:px-10">
        <div>
          {/* Card stats */}
          <div className="flex flex-wrap justify-start">
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4" dir="rtl">
              <CardStats
                statSubtitle="المداخيل"
                statTitle="350,897"
                statArrow="up"
                statPercent="3.48"
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName="far fa-chart-bar"
                statIconColor="bg-red-500"
              />
            </div>

            <div className="w-full lg:w-6/12 xl:w-3/12 px-4" dir="rtl">
              <CardStats
                statSubtitle="الإشتراكات"
                statTitle="2,356"
                statArrow="down"
                statPercent="3.48"
                statPercentColor="text-red-500"
                statDescripiron="Since last week"
                statIconName="fas fa-chart-pie"
                statIconColor="bg-orange-500"
              />
            </div>

            <div className="w-full lg:w-6/12 xl:w-3/12 px-4" dir="rtl">
              <CardStats
                statSubtitle="المنخرطين الجدد"
                statTitle="924"
                statArrow="down"
                statPercent="1.10"
                statPercentColor="text-orange-500"
                statDescripiron="Since yesterday"
                statIconName="fas fa-users"
                statIconColor="bg-pink-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}