import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const Produit = ({ menu }) => {
  const listingr = () => {
    for (let i = 1; i < 20; i++) {
      // if(menu.ingredient + i){
      console.log(menu.ingredient + i);
    }
  };
  // useEffect(() => {
  // listingr();
  // }, [{ menu }])
  return (
    <div className="std-container produit">
      <div class="details-menu">
        {" "}
        <span>
          {" "}
          <b> Origin</b> : {menu.area}
        </span>
        <span>
          {" "}
          <b>Category </b> : {menu.tag}{" "}
        </span>{" "}
      </div>
      <Row>
        <Col className="col01">
          <img src={menu.image} alt="" class="prod-img" />
        </Col>
        <Col className="col02">
          <h2>Ingredients !</h2>
          <Row className="prod-det">
            <Col>
              <div className="prod-ingr">
                <b>
                  {menu.ingredient1} : <br />
                  {menu.ingredient2} : <br />
                  {menu.ingredient3} : <br />
                  {menu.ingredient4} : <br />
                  {menu.ingredient5} : <br />
                  {menu.ingredient6} : <br />
                  {menu.ingredient7} : <br />
                  {menu.ingredient8} : <br />
                  {menu.ingredient9} : <br />
                  {menu.ingredient10} : <br />
                  {menu.ingredient11} : <br />
                  {menu.ingredient12} : <br />
                  {menu.ingredient13} : <br />
                  {menu.ingredient14} : <br />
                  {menu.ingredient15} : <br />
                  {menu.ingredient16} : <br />
                  {menu.ingredient17} : <br />
                  {menu.ingredient18} : <br />
                  {menu.ingredient19} : <br />
                  {menu.ingredient20} : <br />
                </b>
              </div>
            </Col>
            <Col>
              <prod className="prod-meas">
                {menu.mesure1}
                <br />
                {menu.mesure2}
                <br />
                {menu.mesure3}
                <br />
                {menu.mesure4}
                <br />
                {menu.mesure5}
                <br />
                {menu.mesure6}
                <br />
                {menu.mesure7}
                <br />
                {menu.mesure8}
                <br />
                {menu.mesure9}
                <br />
                {menu.mesure10}
                <br />
                {menu.mesure11}
                <br />
                {menu.mesure12}
                <br />
                {menu.mesure13}
                <br />
                {menu.mesure14}
                <br />
                {menu.mesure15}
                <br />
                {menu.mesure16}
                <br />
                {menu.mesure17}
                <br />
                {menu.mesure18}
                <br />
                {menu.mesure19}
                <br />
                {menu.mesure20}
              </prod>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <div className="menu-instr"> {menu.instruction}</div>
      </Row>
      <div className="youtube">
              <iframe
                  src={menu.video}
                  width='580px'
                  frameborder="0"
                  allowFullScreen
              ></iframe>
      </div>
    </div>
  );
};
{
} 

export default Produit;
