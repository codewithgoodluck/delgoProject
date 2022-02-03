import React from "react";
import FileText from "../components/Assets/Icons/FileText.svg";
import DownArrow from "../components/Assets/Icons/DownArrow.svg";

function Dropdown() {
    
  return (
    <div>
      <div>
        <div>
          <div className="flex ml-6 mt-3">
            <img src={FileText} alt=""></img>
            <p className="text-xs mt-1 ml-2">Iventory</p>
            <img src={DownArrow} alt="" className="ml-28 xl:ml-[vw]"></img>
          </div>

          {/* DROP DOWN CONTENT */}
          <div id="myDropdown" class="ml-14 mt-2 dropdown-content ">
            <a href="#" className="block my-3 text-xs">Item Groups</a>
            <a href="#" className="block text-xs">Items</a>
            <a href="#" className="block my-3 text-xs">Composite Items</a>
            <a href="#" className="block my-3 text-xs">Price Lists</a>
            <a href="#" className="block my-3 text-xs">Inventory Adjustments</a>
            <a href="#" className="block my-3 text-xs">Transfer Orders</a>
          </div>
        </div>
        {/* DROP DOWN START */}
      </div>
    </div>
  );
}

export default Dropdown;
