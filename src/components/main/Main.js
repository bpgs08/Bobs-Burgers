import React from "react";
import styled from "styled-components";
import { colors, media } from "../../utils/theme";

const Main = ({ children }) => (
  <Container className="main">
    <CenterPage>{children}</CenterPage>
  </Container>
);

const CenterPage = styled.div`
  width: 750px;
`;

const Container = styled.div`
  height: calc(100vh - 50px);
  background-color: ${colors.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Main;
