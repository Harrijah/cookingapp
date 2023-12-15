import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getMeal } from "./Searchproduct";

const Menucard = ({ menu }) => {
  const wordsLimit = 250;
  const [idMeal, setIdMeal] = useState("");

  /******************************************************************
    Définir l'ID du menu à cliquer
 ******************************************************************/
  useEffect(() => {
    setIdMeal(menu.idMeal);
  }, [idMeal]);

  /******************************************************************
 Les data à uploader lors d'un choix de menu sur la liste de menu 
 ******************************************************************/
  const newdata = {
    id: menu.idMeal,
    nom: menu.strMeal,
    category: menu.strCategory,
    area: menu.strArea,
    tag: menu.strTags,
    video: menu.strYoutube,
    image: menu.strMealThumb,
    instruction: menu.strInstructions,
    ingredient1: menu.strIngredient1,
    ingredient2: menu.strIngredient2,
    ingredient3: menu.strIngredient3,
    ingredient4: menu.strIngredient4,
    ingredient5: menu.strIngredient5,
    ingredient6: menu.strIngredient6,
    ingredient7: menu.strIngredient7,
    ingredient8: menu.strIngredient8,
    ingredient9: menu.strIngredient9,
    ingredient10: menu.strIngredient10,
    ingredient11: menu.strIngredient11,
    ingredient12: menu.strIngredient12,
    ingredient13: menu.strIngredient13,
    ingredient14: menu.strIngredient14,
    ingredient15: menu.strIngredient15,
    ingredient16: menu.strIngredient16,
    ingredient17: menu.strIngredient17,
    ingredient18: menu.strIngredient18,
    ingredient19: menu.strIngredient19,
    ingredient20: menu.strIngredient20,
    mesure1: menu.strMeasure1,
    mesure2: menu.strMeasure2,
    mesure3: menu.strMeasure3,
    mesure4: menu.strMeasure4,
    mesure5: menu.strMeasure5,
    mesure6: menu.strMeasure6,
    mesure7: menu.strMeasure7,
    mesure8: menu.strMeasure8,
    mesure9: menu.strMeasure9,
    mesure10: menu.strMeasure10,
    mesure11: menu.strMeasure11,
    mesure12: menu.strMeasure12,
    mesure13: menu.strMeasure13,
    mesure14: menu.strMeasure14,
    mesure15: menu.strMeasure15,
    mesure16: menu.strMeasure16,
    mesure17: menu.strMeasure17,
    mesure18: menu.strMeasure18,
    mesure19: menu.strMeasure19,
    mesure20: menu.strMeasure20,
  };

  const upload = async () => {
    const mymenu = await getMeal(idMeal);
    if (mymenu) {
      if (mymenu.id == idMeal) {
        window.location.href = "http://localhost:3000/menu/"+ idMeal 
      } else {
        await axios.post("http://localhost:3004/localmenu", newdata);
          window.location.href = "http://localhost:3000/menu/"+ idMeal
      }
    }

  };

  return (
    <li className="mycard">
      <div>
        <div>
          <h2>{menu.strMeal}</h2>
        </div>
        <div>
          <img src={menu.strMealThumb} />
        </div>
        <div className="menutext">
          <p>{menu.strInstructions.slice(0, wordsLimit) + " ... "}</p>
          <Link onClick={() => upload()}>Voir la recette</Link>
        </div>
      </div>
    </li>
  );
};

export default Menucard;
