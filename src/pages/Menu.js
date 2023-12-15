import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Mytitle from "../components/Montitre";
import Produit from "../components/Produit";
import { useParams } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedmenu, setSelectedmenu] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    const resp = await axios.get("http://localhost:3004/localmenu/" + id);
    setSelectedmenu(resp.data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <Mytitle.Provider value = { selectedmenu && selectedmenu.nom } >
      <div>
        <Navigation />
        {id && selectedmenu && <Produit key={id} menu={selectedmenu} />}
      </div>
    </Mytitle.Provider>
  );
};

export default Menu;
