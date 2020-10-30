import React from "react";
import { CardContainer, ImageContainer, DescriptionContainer } from "./styles";

const ProductCard = () => {
  return (
    <CardContainer>
      <ImageContainer />

      <DescriptionContainer>
        <h1>Maleta Top</h1>
        <p>Dimensões: 10 cm x 15cm x 12 cm</p>
      </DescriptionContainer>
    </CardContainer>
  );
};

export default ProductCard;
