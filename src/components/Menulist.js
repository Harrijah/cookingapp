import React, { createContext, useEffect, useState } from "react";
import { getMoremenu } from "./Searchproduct";
import Menucard from "./Menucard";
import axios from "axios";

const Menulist = () => {
  const [menu, setMenu] = useState([]);
  const [mysearch, setMysearch] = useState("");

  const fetchData = async () => {
    const menuData = await getMoremenu(mysearch ? mysearch : "");
    setMenu(menuData);
  };

  useEffect(() => {
    fetchData();
  }, [mysearch]);

  const onsearch = (e) => {
    setMysearch(e.target.value);
  };

  return (
    <div className="std-container">
      <div className="searchbarcontainer">
        <input
          type="text"
          className="searchbar"
          onChange={(e) => onsearch(e)}
        />
      </div>

      <div className="card-container">
        { menu && 
          menu.map((menu) => (
            <Menucard
              key={menu.idMeal}
              menu={menu}
            />
          ))}
      </div>
    </div>
  );
};

export default Menulist;
