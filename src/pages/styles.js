import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
    margin: 0;
    padding: 0;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.5rem;
  }
`;

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #9ad3bc;
`;
