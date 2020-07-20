import React from "react";
import styled from "styled-components";
import { media } from "../../utils/theme";

const Main = ({ children }) => (
  <Container className="main">
    <Wrapper>{children}</Wrapper>
  </Container>
);

const Wrapper = styled.div`
  margin: 0px 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Main;
