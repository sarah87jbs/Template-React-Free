import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import DashboardDepart from "views/admin/dashboardDepart.js";
import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import ChoixMoisAnnee from "components/formulaire/ChoixmoisAnnee"; 

export default function Admin() {
  const location = useLocation();
  const showHeader = location.pathname === "/admin/dashboard";

  return (
    <>
      {/* Sidebar fixe */}
      <div className="flex  flex-row-reverse">
        <Sidebar />
        <div className={`relative ${!showHeader ? 'pt-0' : ''} md:mr-64 w-full`} style={{ marginRight: "250px" }}>
          
          {/* Toujours afficher le Navbar */}
          <AdminNavbar />
  
          {/* Bande bleue qui apparaît seulement si c'est /dashboard */}
          <div className="relative bg-blue pt-6 pb-6 px-4 justify-center">
          <div className="flex justify-center mb-4">
  <ChoixMoisAnnee />
</div>
  
  {showHeader && <HeaderStats />}
</div>
  
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
              <Route path="/admin/dashboard" exact component={Dashboard} />
              <Route path="/admin/maps" exact component={Maps} />
              <Route path="/admin/settings" exact component={Settings} />
              <Route path="/admin/tables" exact component={Tables} />
              <Route path="/admin/dashboardDepart" exact component={DashboardDepart} />
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
  
            <FooterAdmin />
          </div>
        </div>
      </div>
    </>
  );
}
