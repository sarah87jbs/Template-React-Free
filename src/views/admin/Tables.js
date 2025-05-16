import React from "react";

// components
import CardTable from "components/Cards/CardTable.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-24" dir="rtl">
        <div className="w-full mb-12 px-4">
          {/* Passer des props de taille au tableau */}
          <CardTable tableWidth="w-3/4" tablePadding="p-4" />
        </div>
        {/*<div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>*/}
      </div>
    </>
  );
}