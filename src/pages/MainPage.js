import React from "react";

import ProductCard from "../components/ProductCard/ProductCard";
import logoImg from "../assets/logo.png";
import { Container, Header, Section, Main } from "./styles";

const MainPage = () => {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Logo Kartonê" />
        <h1>Artesanato com a técnica de cartonagem</h1>
      </Header>

      <Section>
        <p>
          Peças artesanais produzidas em papelão especial e tecido através da
          técnica da cartonagem.
        </p>
      </Section>

      <Main>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Main>
    </Container>
  );
};

export { MainPage };
