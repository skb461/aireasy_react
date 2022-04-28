
import "./SideMenu.css";

import aireasy from "./aireasy.png";
function SideMenu() {


  return (
      <div className="fixed-top col-lg-2 navbar_sideMenu">
        <div className="mt-5 card_nav">
          <img src={aireasy} className="w-25 img-fluid d-block mx-auto my-5"/>
          <div className="card nav_Text_head">
            <p className="text-dark">Research</p>
            <button className="btn btn-outline-primary m-1 Overview">Overview</button>
            <button className="btn btn-outline-primary m-1 Overview">Similer Properties</button>
          </div>
        </div>
      </div>
  );
}

export default SideMenu;