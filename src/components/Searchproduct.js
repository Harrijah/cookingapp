import axios from "axios";

const getMoremenu = async (choice) => {
  try {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + choice);
    // const response = await axios.get("http://localhost:3004/localmenu/" + choice);
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const getMenuById = (menuList, id) => {
  return menuList.find((item) => item.idMeal === id);
};

const getMeal = async (selmenu) => {
  try {
    const response = await axios.get("http://localhost:3004/localmenu/" + selmenu);
    return response.data;
  } catch (error) {
    console.error("Error fetching menu zoky:", error);
    return [];
  }
};

export { getMoremenu, getMenuById, getMeal };
